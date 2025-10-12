// https://github.com/spicetify/spicetify-creator/blob/main/packages/spicetify-creator/src/scripts.ts
// export default async (settings: IExtensionSettings, outDirectory: string, watch: boolean, esbuildOptions: any, minify: boolean, inDirectory: string) => {
import build from 'spicetify-creator/dist/buildExtension';
import autoprefixer from 'autoprefixer';
import { externalGlobalPlugin } from 'esbuild-plugin-external-global'
import packageJson from '../package.json';
import fs from 'fs';
const postCssPlugin = require("esbuild-plugin-postcss2");

const nameId = `volume-profiles-${packageJson.version}`
const id = nameId.replace(/[\-\.]/g, 'D');
const esbuildOptions = {
  platform: 'browser',
  external: ['react', 'react-dom'],
  bundle: true,
  globalName: id,
  plugins: [
    postCssPlugin.default({
      plugins: [autoprefixer],
      modules: {
        generateScopedName: `[name]__[local]___[hash:base64:5]_${id}`
      },
    }),
    externalGlobalPlugin({
      'react': 'Spicetify.React',
      'react-dom': 'Spicetify.ReactDOM',
    })
  ],
}


if (fs.existsSync('./dist')) {
  fs.rmSync('./dist', { recursive: true });
}
build({nameId: nameId}, "./dist", false, esbuildOptions, true, "./src");
const manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf-8'));
manifest.main = `dist/${nameId}.js`;
fs.writeFileSync('manifest.json', JSON.stringify(manifest, null, 2));