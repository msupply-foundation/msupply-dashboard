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

REM find grafana.exe and copy it
for /R "%GRAFANA_TMP%" %%f in (grafana.exe) do (
    copy /Y "%%f" "%WORKSPACE%\release\bin\grafana.exe"
)

IF NOT EXIST "%WORKSPACE%\release\bin\grafana.exe" (
    ECHO ERROR: grafana.exe not found after extraction
    EXIT /B 1
)

REM find grafana-cli.exe and copy it
for /R "%GRAFANA_TMP%" %%f in (grafana-cli.exe) do (
    copy /Y "%%f" "%WORKSPACE%\release\bin\grafana-cli.exe"
)

IF NOT EXIST "%WORKSPACE%\release\bin\grafana-cli.exe" (
    ECHO ERROR: grafana-cli.exe not found after extraction
    EXIT /B 1
)

REM find grafana-server.exe and copy it
for /R "%GRAFANA_TMP%" %%f in (grafana-server.exe) do (
    copy /Y "%%f" "%WORKSPACE%\release\bin\grafana-server.exe"
)


IF NOT EXIST "%WORKSPACE%\release\bin\grafana-server.exe" (
    ECHO ERROR: grafana-server.exe not found after extraction
    EXIT /B 1
)

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
