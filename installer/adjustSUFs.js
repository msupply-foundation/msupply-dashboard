const fs = require('fs');
const path = require('path');

// Stamps the .suf projects in place before a headless Setup Factory build.
//   versionTag    e.g. v8.6.0 — names the installer exes and the ProductVer
//   RELEASE_FOLDER  short path release/ is mirrored to before the build
//                   (Setup Factory crashes when source file paths are too long)
const { versionTag, RELEASE_FOLDER } = process.env;
if (!versionTag) throw new Error('versionTag environment variable is not set');
if (!RELEASE_FOLDER) throw new Error('RELEASE_FOLDER environment variable is not set');

const installerFolder = __dirname;

fs.readdirSync(installerFolder)
  .filter((fileName) => fileName.endsWith('.suf'))
  .forEach((fileName) => {
    const sufPath = path.join(installerFolder, fileName);
    const adjusted = fs
      .readFileSync(sufPath, 'utf8')
      .replace(/~~version~~/g, versionTag)
      .replace(/~~installer-folder~~/g, installerFolder)
      .replace(/~~release-folder~~/g, RELEASE_FOLDER);
    fs.writeFileSync(sufPath, adjusted);
    console.log(`adjusted ${fileName}`);
  });
