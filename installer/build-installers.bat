@ECHO ##### Removing previous installers #####
@del /q installer\dashboard-setup-*.exe
@del /q installer\dashboard-upgrade-*.exe

@if exist c:\temp\release rmdir /s /q c:\temp\release
@if not exist c:\temp mkdir c:\temp

@ECHO.
@ECHO ##### Adjusting SUFS #####
FOR /F "delims=*" %%i in ('more version.txt') do SET versionTag=%%i
@ECHO "current tag = %versionTag%"

REM adjustSUFs.js reads RELEASE_FOLDER (it is shared with the GitHub Actions
REM build, which mirrors release/ to a short path). Locally that path is
REM c:\temp\release, which the move below creates.
SET RELEASE_FOLDER=c:\temp\release

node "%WORKSPACE%\installer\adjustSUFs.js"
@if errorlevel 1 exit /b 1


@ECHO.
@ECHO ##### Downloading and extracting Grafana #####
SET /P GRAFANA_URL=<installer\grafana.url
@ECHO "Using Grafana URL: %GRAFANA_URL%"
SET GRAFANA_TMP=%WORKSPACE%\_grafana_tmp
SET ARCHIVE=%GRAFANA_TMP%\grafana.tar.gz

IF EXIST "%GRAFANA_TMP%" rmdir /s /q "%GRAFANA_TMP%"
mkdir "%GRAFANA_TMP%"

ECHO Downloading %GRAFANA_URL%
curl -f -L "%GRAFANA_URL%" -o "%ARCHIVE%"
IF ERRORLEVEL 1 EXIT /B 1

ECHO Extracting Grafana archive
tar -xzf "%ARCHIVE%" -C "%GRAFANA_TMP%"
IF ERRORLEVEL 1 EXIT /B 1

@ECHO.
@ECHO ##### Locating Grafana executables #####

REM Modern Grafana ships a single bin\grafana.exe; the old grafana-server.exe
REM and grafana-cli.exe wrappers were removed (the equivalents are the
REM `grafana server` and `grafana cli` subcommands). Copy whichever of the
REM three the archive actually contains, and only require grafana.exe.
SET GRAFANA_EXE=
SET GRAFANA_SERVER_EXE=
SET GRAFANA_CLI_EXE=

for /D %%d in ("%GRAFANA_TMP%\grafana-*") do (
    if exist "%%d\bin\grafana.exe" (
        SET GRAFANA_EXE=%%d\bin\grafana.exe
    )
    if exist "%%d\bin\grafana-server.exe" (
        SET GRAFANA_SERVER_EXE=%%d\bin\grafana-server.exe
    )
    if exist "%%d\bin\grafana-cli.exe" (
        SET GRAFANA_CLI_EXE=%%d\bin\grafana-cli.exe
    )
)

if not defined GRAFANA_EXE (
    ECHO ERROR: grafana.exe not found in the downloaded archive
    EXIT /B 1
)

:found_grafana
ECHO Found Grafana executables:
ECHO   %GRAFANA_EXE%
if defined GRAFANA_SERVER_EXE ECHO   %GRAFANA_SERVER_EXE%
if defined GRAFANA_CLI_EXE ECHO   %GRAFANA_CLI_EXE%

REM Ensure destination exists
IF NOT EXIST "%WORKSPACE%\release\bin" (
    mkdir "%WORKSPACE%\release\bin"
)

copy /Y "%GRAFANA_EXE%" "%WORKSPACE%\release\bin\"
if defined GRAFANA_SERVER_EXE copy /Y "%GRAFANA_SERVER_EXE%" "%WORKSPACE%\release\bin\"
if defined GRAFANA_CLI_EXE    copy /Y "%GRAFANA_CLI_EXE%"    "%WORKSPACE%\release\bin\"

REM Drop stale wrappers from older Grafana builds so the shipped bin\ matches
REM the version we just downloaded. The service runs `grafana.exe server`.
if not defined GRAFANA_SERVER_EXE (
    if exist "%WORKSPACE%\release\bin\grafana-server.exe" del /q "%WORKSPACE%\release\bin\grafana-server.exe"
    if exist "%WORKSPACE%\release\bin\grafana-server.exe.md5" del /q "%WORKSPACE%\release\bin\grafana-server.exe.md5"
)
if not defined GRAFANA_CLI_EXE (
    if exist "%WORKSPACE%\release\bin\grafana-cli.exe" del /q "%WORKSPACE%\release\bin\grafana-cli.exe"
    if exist "%WORKSPACE%\release\bin\grafana-cli.exe.md5" del /q "%WORKSPACE%\release\bin\grafana-cli.exe.md5"
)

ECHO Grafana executables copied successfully

rmdir /s /q "%GRAFANA_TMP%"
ECHO Grafana ready

@ECHO.
@ECHO ##### Building custom plugins #####
REM dashboard-upgrade.suf packages release\data\plugins, so the folder must
REM exist or Setup Factory aborts with exit code 2051. Build the panels from
REM source so they match the Grafana downloaded above.
if not exist "%WORKSPACE%\release\data\plugins" mkdir "%WORKSPACE%\release\data\plugins"

REM Called as a subroutine per plugin: a for-loop body would need delayed
REM expansion to read PLUGIN_ID back after setting it.
call :build_plugin msupplyfoundation-table
if errorlevel 1 exit /b 1
call :build_plugin msupplyfoundation-msupply-regionmap
if errorlevel 1 exit /b 1

REM required as setup factory crashes when a file path is too long
REM and the jenkins workspace is a very long path
@ECHO ##### Copying build files #####
@move /Y "%WORKSPACE%\release" "c:\temp\release"

@ECHO.
@ECHO ##### Creating installers #####
start "" /wait "C:\Program Files (x86)\Setup Factory 9\SUFDesign.exe" /BUILD /LOG:installer\setup-factory.log "%WORKSPACE%\installer\dashboard.suf"
@if errorlevel 1 exit /b %errorlevel%
start "" /wait "C:\Program Files (x86)\Setup Factory 9\SUFDesign.exe" /BUILD /LOG:installer\setup-factory.log "%WORKSPACE%\installer\dashboard-upgrade.suf"
@if errorlevel 1 exit /b %errorlevel%

goto :eof

REM ---------------------------------------------------------------------------
REM build_plugin <folder under custom-plugins>
REM Builds the panel and copies dist\ to release\data\plugins\<plugin.json id>.
REM ---------------------------------------------------------------------------
:build_plugin
ECHO --- building %~1
pushd "%WORKSPACE%\custom-plugins\%~1"
call npm ci
if errorlevel 1 ( popd & ECHO ERROR: npm ci failed for %~1 & exit /b 1 )
call npm run build
if errorlevel 1 ( popd & ECHO ERROR: npm run build failed for %~1 & exit /b 1 )
popd

set PLUGIN_ID=
for /f "usebackq delims=" %%i in (`node -p "require('%WORKSPACE%/custom-plugins/%~1/dist/plugin.json').id"`) do set PLUGIN_ID=%%i
if not defined PLUGIN_ID ( ECHO ERROR: could not read plugin id for %~1 & exit /b 1 )

if exist "%WORKSPACE%\release\data\plugins\%PLUGIN_ID%" rmdir /s /q "%WORKSPACE%\release\data\plugins\%PLUGIN_ID%"
xcopy "%WORKSPACE%\custom-plugins\%~1\dist" "%WORKSPACE%\release\data\plugins\%PLUGIN_ID%\" /e /c /i /y >nul
if errorlevel 1 ( ECHO ERROR: copy failed for %~1 & exit /b 1 )
ECHO installed %~1 as %PLUGIN_ID%
goto :eof
