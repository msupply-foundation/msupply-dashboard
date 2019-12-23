const fs = require('fs');
const installerFolder = process.env.installerFolder;

const files = fs.readdirSync(installerFolder);

files.forEach(fileName => {
    if(fileName.endsWith('.suf')) {
        const sufFileName = `${installerFolder}\\${fileName}`;
        const fileContent = fs.readFileSync(sufFileName, 'utf8');
		console.warn(sufFileName);
        fs.writeFileSync(fileName, replaceVersion(adjustOutputFolder(fileContent)));
    }
});

function replaceVersion(fileContent) {
    return fileContent.replace(/~~version~~/g, 'process.env.versionTag');
}

function adjustOutputFolder(fileContent) {
	return fileContent.replace(/<OutputFolder>.*<\/OutputFolder>/g, `<OutputFolder>${installerFolder}</OutputFolder>`);
}