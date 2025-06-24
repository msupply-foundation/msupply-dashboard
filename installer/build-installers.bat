@ECHO ##### Removing previous installers #####
@del /q installer\dashboard-setup-*.exe
@del /q installer\dashboard-upgrade-*.exe
@del /q c:\temp\release

@ECHO.
@ECHO ##### Adjusting SUFS #####
FOR /F "delims=*" %%i in ('more version.txt') do SET versionTag=%%i
@ECHO "current tag = %versionTag%"

cd installer
node "%WORKSPACE%\installer\adjustSUFs.js"
cd ..

REM required as setup factory crashes when a file path is too long
REM and the jenkins workspace is a very long path
@ECHO ##### Copying build files #####
@move /Y "%WORKSPACE%\release" "c:\temp\release"

@ECHO.
@ECHO ##### Creating installers #####
start "" /wait "C:\Program Files (x86)\Setup Factory 9\SUFDesign.exe" /BUILD /LOG:installer\setup-factory.log "%WORKSPACE%\installer\dashboard.suf"
start "" /wait "C:\Program Files (x86)\Setup Factory 9\SUFDesign.exe" /BUILD /LOG:installer\setup-factory.log "%WORKSPACE%\installer\dashboard-upgrade.suf"
