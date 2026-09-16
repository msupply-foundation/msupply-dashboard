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
@ECHO ##### Locating Grafana executable #####

REM Grafana 13 ships a single bin\grafana.exe; the grafana-server.exe and
REM grafana-cli.exe wrappers were removed. Do not look for them.

SET GRAFANA_EXE=

for /D %%d in ("%GRAFANA_TMP%\grafana-*") do (
    if exist "%%d\bin\grafana.exe" (
        SET GRAFANA_EXE=%%d\bin\grafana.exe
        goto :found_grafana
    )
)

ECHO ERROR: grafana.exe not found under "%GRAFANA_TMP%\grafana-*\bin\"
EXIT /B 1

:found_grafana
ECHO Found Grafana executable:
ECHO   %GRAFANA_EXE%

REM Ensure destination exists
IF NOT EXIST "%WORKSPACE%\release\bin" (
    mkdir "%WORKSPACE%\release\bin"
)

copy /Y "%GRAFANA_EXE%" "%WORKSPACE%\release\bin\"
IF ERRORLEVEL 1 EXIT /B 1

ECHO Grafana executable copied successfully

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
