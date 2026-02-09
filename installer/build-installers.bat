@ECHO ##### Removing previous installers #####
@del /q installer\dashboard-setup-*.exe
@del /q installer\dashboard-upgrade-*.exe

@if exist c:\temp\release rmdir /s /q c:\temp\release
@if not exist c:\temp mkdir c:\temp

@ECHO.
@ECHO ##### Adjusting SUFS #####
FOR /F "delims=*" %%i in ('more version.txt') do SET versionTag=%%i
@ECHO "current tag = %versionTag%"

cd installer
node "%WORKSPACE%\installer\adjustSUFs.js"
cd ..


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

    REM Check if all three were found
    if defined GRAFANA_EXE if defined GRAFANA_SERVER_EXE if defined GRAFANA_CLI_EXE (
        goto :found_grafana
    )
)

ECHO ERROR: One or more Grafana executables not found
ECHO   grafana.exe        = %GRAFANA_EXE%
ECHO   grafana-server.exe = %GRAFANA_SERVER_EXE%
ECHO   grafana-cli.exe    = %GRAFANA_CLI_EXE%
EXIT /B 1

:found_grafana
ECHO Found Grafana executables:
ECHO   %GRAFANA_EXE%
ECHO   %GRAFANA_SERVER_EXE%
ECHO   %GRAFANA_CLI_EXE%

REM Ensure destination exists
IF NOT EXIST "%WORKSPACE%\release\bin" (
    mkdir "%WORKSPACE%\release\bin"
)

copy /Y "%GRAFANA_EXE%"        "%WORKSPACE%\release\bin\"
copy /Y "%GRAFANA_SERVER_EXE%" "%WORKSPACE%\release\bin\"
copy /Y "%GRAFANA_CLI_EXE%"    "%WORKSPACE%\release\bin\"

ECHO Grafana executables copied successfully

rmdir /s /q "%GRAFANA_TMP%"
ECHO Grafana ready

REM required as setup factory crashes when a file path is too long
REM and the jenkins workspace is a very long path
@ECHO ##### Copying build files #####
@move /Y "%WORKSPACE%\release" "c:\temp\release"

@ECHO.
@ECHO ##### Creating installers #####
start "" /wait "C:\Program Files (x86)\Setup Factory 9\SUFDesign.exe" /BUILD /LOG:installer\setup-factory.log "%WORKSPACE%\installer\dashboard.suf"
start "" /wait "C:\Program Files (x86)\Setup Factory 9\SUFDesign.exe" /BUILD /LOG:installer\setup-factory.log "%WORKSPACE%\installer\dashboard-upgrade.suf"
