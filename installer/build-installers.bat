@ECHO ##### Removing previous installers #####
@del /q dashboard-setup-*.exe
@del /q dashboard-upgrade-*.exe

@ECHO.
@ECHO ##### Adjusting SUFS #####
SET installerWorkspace=C:\Program Files (x86)\Jenkins\jobs\mSupply Dashboard Installers\workspace
SET installerFolder=%installerWorkspace%\installer
FOR /F "delims=*" %%i in ('more version.txt') do SET versionTag=%%i
@ECHO "current tag = %versionTag%"

node "%installerFolder%\adjustSUFs.js"

@ECHO.
@ECHO ##### Creating installers #####
start "" /wait "C:\Program Files (x86)\Setup Factory 9\SUFDesign.exe" /BUILD /LOG:installer\setup-factory.log "%installerFolder%\dashboard.suf"
start "" /wait "C:\Program Files (x86)\Setup Factory 9\SUFDesign.exe" /BUILD /LOG:installer\setup-factory.log "%installerFolder%\dashboard-upgrade.suf"
