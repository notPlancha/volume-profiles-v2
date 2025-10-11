import semver from 'semver';
import Bun from 'bun';

const packagejsonPath = 'package.json';
const packageJson = await Bun.file(packagejsonPath).json();

const version = packageJson.version;

if (semver.prerelease(version)) {
  // If the version is a pre-release, we update it
  const newVersion = semver.inc(version, 'prerelease', 'beta');
  console.log(`Updating version from ${version} to ${newVersion}`);
  packageJson.version = newVersion;
  Bun.write(packagejsonPath, JSON.stringify(packageJson, null, 2)).then(() => {
    console.log('package.json updated successfully.');
  });
} else {
  console.log(`Version ${version} is not a pre-release. No update needed.`);
}