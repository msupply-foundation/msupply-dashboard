@echo off
setlocal EnableDelayedExpansion

:: ===== CONFIG =====
set GRAFANA_DB=C:\Program Files\mSupply Dashboard\data\grafana.db
set BACKUP_DIR=C:\Program Files\mSupply Dashboard\data
set USER_DIR=C:\Program Files\mSupply Dashboard\data\temp
set LOGDIR=%~dp0

:: Build the timestamp via WMIC, which always returns yyyymmddHHMMSS regardless
:: of the machine's locale. Slicing %DATE% assumed a US mm/dd/yyyy format and on
:: a dd/MM/yyyy machine produced a name containing "/", which made every path
:: built from it invalid ("The system cannot find the path specified").
for /f "skip=1 delims=" %%i in ('wmic os get localdatetime 2^>nul') do (
    if not defined WMIC_DT set WMIC_DT=%%i
)
set TIMESTAMP=%WMIC_DT:~0,8%_%WMIC_DT:~8,6%

:: Fall back to PowerShell if WMIC is unavailable (removed in newer Windows).
if "%TIMESTAMP%"=="_" set TIMESTAMP=
if not defined TIMESTAMP (
    for /f "delims=" %%i in ('powershell -NoProfile -Command "Get-Date -Format yyyyMMdd_HHmmss"') do set TIMESTAMP=%%i
)
if not defined TIMESTAMP (
    echo ERROR: could not determine a timestamp for the log file name
    exit /b 1
)
set TIMESTAMP=%TIMESTAMP: =0%

:: ---- Default postgres values ----
set DEFAULT_PASSWORD=postgres
set DEFAULT_USER=postgres
set DEFAULT_PORT=5432
set DEFAULT_DB=dashboard
set DEFAULT_HOST=localhost
set DEFAULT_VERSION=17

:: ---- Read parameters ----
set PGPASSWORD=%~1
set PGUSER=%~2
set PGPORT=%~3
set PGDB=%~4
set PGHOST=%~5
set PGVERSION=%~6

:: ---- Apply defaults if missing ----
if "%PGPASSWORD%"=="" set PGPASSWORD=%DEFAULT_PASSWORD%
if "%PGUSER%"=="" set PGUSER=%DEFAULT_USER%
if "%PGPORT%"=="" set PGPORT=%DEFAULT_PORT%
if "%PGDB%"=="" set PGDB=%DEFAULT_DB%
if "%PGHOST%"=="" set PGHOST=%DEFAULT_HOST%
if "%PGVERSION%"=="" set PGVERSION=%DEFAULT_VERSION%

set LOGFILE=%LOGDIR%migration_%TIMESTAMP%.log

:: Redirect ALL output (stdout + stderr) to log file
call :main > "%LOGFILE%" 2>&1
exit /b %ERRORLEVEL%

:main

echo ======================================
echo Grafana.db migration started at %DATE% %TIME%
echo ======================================

echo.
echo ==========================================
echo Creating backup...
echo ==========================================
copy "%GRAFANA_DB%" "%BACKUP_DIR%\grafana_%TIMESTAMP%.db"

if errorlevel 1 (
    echo Backup failed! Aborting.
    net start grafana
    exit /b 1
)

echo Backup created: grafana_%TIMESTAMP%.db
echo.

echo.
echo ==========================================
echo Checking SQLITE path...
echo ==========================================

:: Prefer the sqlite3.exe shipped in bin\ (the installer downloads it), and
:: fall back to PATH so the script still works on older installs.
set "SQLITE=%~dp0..\..\bin\sqlite3.exe"
if exist "%SQLITE%" goto :found

for /f "delims=" %%i in ('where sqlite3 2^>nul') do (
    set "SQLITE=%%i"
    goto :found
)

echo ERROR: sqlite3.exe not found in "%~dp0..\..\bin" or on PATH
echo        Install the SQLite command line tools from https://sqlite.org/download.html
exit /b 1

:found
echo Found sqlite at: %SQLITE%

echo.
echo ==========================================
echo Export CSV from grafana.db...
echo ==========================================

if not exist "%USER_DIR%" (
    mkdir "%USER_DIR%"
)

SET USER_CSV=%USER_DIR%\users.csv

:: Write the CSV with sqlite3's .once rather than ">" redirection. sqlite3
:: already ends lines with CRLF on Windows, and cmd's redirection converts the
:: LF to CRLF again, producing CR CR LF -- psql's \copy reads the extra CR as an
:: empty second line and fails with 'missing data for column "name"'.
(
    echo .mode csv
    echo .headers on
    echo .once "%USER_CSV:\=\\%"
    echo SELECT u.id AS user_id, u.name, u.email FROM user u JOIN user_auth ua ON u.id = ua.user_id WHERE u.is_disabled = 0 AND ua.auth_module='oauth_generic_oauth';
) | "%SQLITE%" "%GRAFANA_DB%"

if not exist "%USER_CSV%" (
    echo ERROR: sqlite3 did not produce %USER_CSV%
    exit /b 1
)

:: Normalise line endings regardless of how the CSV was produced: collapse any
:: run of CRs before a LF to a single CRLF, and drop a trailing blank line.
:: This keeps the handoff to psql working across sqlite3 versions and shells,
:: rather than depending on .once behaving a particular way.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0normalise-csv.ps1" -Path "%USER_CSV%"
if errorlevel 1 (
    echo ERROR: could not normalise line endings in %USER_CSV%
    exit /b 1
)

set LINE_COUNT=0
for /f "usebackq delims=" %%A in ("%USER_CSV%") do (
    set /a LINE_COUNT+=1
)

if %LINE_COUNT% LEQ 1 (
    echo Only header found in %USER_CSV%, nothing to do.
    exit /b 0
)
set /a OAUTH_EXPORTED=%LINE_COUNT%-1
echo Exported %OAUTH_EXPORTED% OAuth users to %USER_CSV%

echo.
echo ==========================================
echo ImportCSV to postges and export sql with [user]ID ...
echo ==========================================

SET PSQL=C:\Program Files\PostgreSQL\%PGVERSION%\bin\psql.exe
if not exist "%PSQL%" (
    echo ERROR: psql not found at "%PSQL%"
    echo        Pass the PostgreSQL major version as the 6th argument, e.g.
    echo        grafanadb-update.bat %%PGPASSWORD%% %%PGUSER%% %%PGPORT%% %%PGDB%% %%PGHOST%% 16
    exit /b 1
)

SET USER_SQL=%USER_DIR%\updates.sql
:: -v ON_ERROR_STOP=1 so a failed \copy or query is fatal instead of leaving an
:: empty updates.sql and carrying on as though there was nothing to do.
"%PSQL%" --username=%PGUSER% --port=%PGPORT% --file=grafanadb-update.sql --host=%PGHOST% --dbname=%PGDB% -v ON_ERROR_STOP=1 -q -t -A > "%USER_SQL%"
if errorlevel 1 (
    echo ERROR: psql failed -- see the messages above.
    exit /b 1
)

set LINE_COUNT=0
for /f "usebackq delims=" %%A in ("%USER_SQL%") do (
    set /a LINE_COUNT+=1
)

if %LINE_COUNT% LEQ 0 (
    echo ERROR: psql produced no UPDATE statements in %USER_SQL%.
    echo.
    echo        The CSV exported %OAUTH_EXPORTED% Grafana users, but none of them
    echo        matched a row in the Postgres "%PGDB%" database, so no auth_id
    echo        can be written and OAuth logins will keep failing. Check:
    echo.
    echo          * public.user in "%PGDB%" is populated with the 4D users
    echo            psql -U %PGUSER% -d %PGDB% -c "SELECT COUNT(*) FROM public.user;"
    echo          * grafanadb-update.sql joins with lower^(^) on both sides; a
    echo            case-sensitive join matches nothing once Grafana 13 has
    echo            lowercased user.email.
    exit /b 1
)
echo Generated %LINE_COUNT% UPDATE statements.

echo.
echo ==========================================
echo Update grafana.db with [user]ID ...
echo ==========================================

"%SQLITE%" "%GRAFANA_DB%" < "%USER_SQL%" > "%LOGDIR%sqlite_update.log" 2>&1

if errorlevel 1 (
    echo ERROR: SQLite update failed. Check sqlite_update.log
    exit /b 1
)

:: Report the outcome rather than assuming success. Any OAuth user still
:: missing an auth_id cannot log in on Grafana 13, so surface the count.
echo.
echo ==========================================
echo Result
echo ==========================================
:: Write the counts to a file and read them back. Running sqlite3 inline in a
:: `for /f` needs the quoted "C:\Program Files" path nested inside the command
:: quotes, which cmd mis-parses ("'C:\Program' is not recognized").
:: Build the query in a file one line at a time. A parenthesised ( echo ... )
:: block would need every ( and ) of COUNT(*) escaped, and an unescaped one
:: closes the block early ("FROM was unexpected at this time"); redirecting
:: each echo separately avoids the escaping entirely.
set COUNT_SQL=%USER_DIR%\counts.sql
set COUNT_OUT=%USER_DIR%\counts.txt
del /q "%COUNT_SQL%" 2>nul

>  "%COUNT_SQL%" echo SELECT COUNT(*^) FROM user_auth WHERE auth_module='oauth_generic_oauth';
>> "%COUNT_SQL%" echo SELECT COUNT(*^) FROM user_auth WHERE auth_module='oauth_generic_oauth' AND (auth_id IS NULL OR auth_id=''^);

"%SQLITE%" "%GRAFANA_DB%" < "%COUNT_SQL%" > "%COUNT_OUT%" 2>&1

set OAUTH_TOTAL=
set OAUTH_MISSING=
for /f "usebackq delims=" %%i in ("%COUNT_OUT%") do (
    if not defined OAUTH_TOTAL (
        set OAUTH_TOTAL=%%i
    ) else (
        if not defined OAUTH_MISSING set OAUTH_MISSING=%%i
    )
)

if not defined OAUTH_TOTAL (
    echo ERROR: could not read the auth_id counts back from grafana.db
    echo        sqlite3 output was:
    type "%COUNT_OUT%"
    del /q "%COUNT_SQL%" "%COUNT_OUT%" 2>nul
    exit /b 1
)
del /q "%COUNT_SQL%" "%COUNT_OUT%" 2>nul
if not defined OAUTH_MISSING set OAUTH_MISSING=0

echo OAuth identities:    %OAUTH_TOTAL%
echo Still missing authid: %OAUTH_MISSING%

if not "%OAUTH_MISSING%"=="0" (
    echo.
    echo WARNING: %OAUTH_MISSING% of %OAUTH_TOTAL% OAuth users have no auth_id and
    echo          cannot log in. Those users were not matched in the Postgres
    echo          "%PGDB%" database -- check that public.user is populated and
    echo          that grafanadb-update.sql compares names/emails with lower^(^).
    exit /b 1
)

echo All OAuth users have an auth_id.
