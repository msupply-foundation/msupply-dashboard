const fs = require('fs');
const installerWorkspace = process.env.WORKSPACE;
const installerFolder = `${installerWorkspace}\\installer`;
const files = fs.readdirSync(installerFolder);

files.forEach((fileName) => {
  if (fileName.endsWith('.suf')) {
    const sufFileName = `${installerFolder}\\${fileName}`;
    const fileContent = fs.readFileSync(sufFileName, 'utf8');
    fs.writeFileSync(fileName, replaceVersion(adjustOutputFolder(fileContent)));
  }
});

function replaceVersion(fileContent) {
  return fileContent.replace(/~~version~~/g, process.env.versionTag);
}

function adjustOutputFolder(fileContent) {
  return fileContent
    .replace(/~~installer-folder~~/g, `${installerFolder}`)
    .replace(/~~release-folder~~/g, `${installerWorkspace}\\release`);
}
