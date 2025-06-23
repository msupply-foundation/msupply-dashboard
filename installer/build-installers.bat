@ECHO ##### Removing previous installers #####
@del /q installer\dashboard-setup-*.exe
@del /q installer\dashboard-upgrade-*.exe

@ECHO.
@ECHO ##### Adjusting SUFS #####
@ECHO "Current working directory: %WORKSPACE%"
@ECHO "Current working dir: %workspace_dir%"
// SET installerWorkspace=C:\Users\Administrator\AppData\Local\Jenkins\.jenkins\workspace\mSupply Dashboard Installers
FOR /F "delims=*" %%i in ('more version.txt') do SET versionTag=%%i
@ECHO "current tag = %versionTag%"

cd installer
node "%WORKSPACE%\installer\adjustSUFs.js"
cd ..

@ECHO.
@ECHO ##### Creating installers #####
start "" /wait "C:\Program Files (x86)\Setup Factory 9\SUFDesign.exe" /BUILD /LOG:installer\setup-factory.log "%WORKSPACE%\installer\dashboard.suf"
start "" /wait "C:\Program Files (x86)\Setup Factory 9\SUFDesign.exe" /BUILD /LOG:installer\setup-factory.log "%WORKSPACE%\installer\dashboard-upgrade.suf"
