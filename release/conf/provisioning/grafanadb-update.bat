@echo off
setlocal EnableDelayedExpansion

:: ===== CONFIG =====
set GRAFANA_DB=C:\Program Files\mSupply Dashboard\data\grafana.db
set BACKUP_DIR=C:\Program Files\mSupply Dashboard\data
set USER_DIR=C:\Program Files\mSupply Dashboard\data\temp
set LOGDIR=%~dp0
set TIMESTAMP=%DATE:~10,4%%DATE:~4,2%%DATE:~7,2%_%TIME:~0,2%%TIME:~3,2%%TIME:~6,2%
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

for /f "delims=" %%i in ('where sqlite3 2^>nul') do (
    set "SQLITE=%%i"
    goto :found
)

echo ERROR: sqlite3.exe not found in PATH
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
"%SQLITE%" "%GRAFANA_DB%" -header -csv "SELECT u.id AS user_id, u.name, u.email FROM user u JOIN user_auth ua ON u.id = ua.user_id WHERE u.is_disabled = 0 AND ua.auth_module='oauth_generic_oauth';" > "%USER_CSV%"

for /f "usebackq delims=" %%A in ("%USER_CSV%") do (
    set /a LINE_COUNT+=1
)

if %LINE_COUNT% LEQ 1 (
    echo Only header found in %USER_CSV%, nothing to do.
    exit /b 0
)

echo.
echo ==========================================
echo ImportCSV to postges and export sql with [user]ID ...
echo ==========================================

SET USER_SQL=%USER_DIR%\updates.sql
"C:\Program Files\PostgreSQL\%PGVERSION%\bin\psql" --username=%PGUSER% --port=%PGPORT% --file=grafanadb-update.sql --host=%PGHOST% --dbname=%PGDB% -q -t -A >  "%USER_SQL%" 

for /f "usebackq delims=" %%A in ("%USER_SQL%") do (
    set /a LINE_COUNT+=1
)

if %LINE_COUNT% LEQ 0 (
    echo no users found in %USER_SQL%, nothing to do.
    exit /b 0
)

echo.
echo ==========================================
echo Update grafana.db with [user]ID ...
echo ==========================================

"%SQLITE%" "%GRAFANA_DB%" < "%USER_SQL%" > sqlite_update.log 2>&1

if errorlevel 1 (
    echo ERROR: SQLite update failed. Check sqlite_update.log
    exit /b 1
)
