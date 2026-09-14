/* All raster assets are cropped from the reference screenshots so the
   prototype matches them. Replace files in src/assets with originals
   (same names) when final artwork is available. */
const files = import.meta.glob('../assets/*.{png,jpg}', { eager: true, import: 'default' });
const img = {};
for (const [path, url] of Object.entries(files)) img[path.split('/').pop().replace(/\.(png|jpg)$/, '')] = url;
export default img;
