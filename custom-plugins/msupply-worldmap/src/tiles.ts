// Esri Canvas basemaps. They need no API key. The reference layer adds the
// place labels on top of the base layer.
const esri = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas';
const attribution = 'Tiles &copy; <a href="https://www.esri.com">Esri</a>';

const layer = (name: string) => ({
  url: `${esri}/${name}/MapServer/tile/{z}/{y}/{x}`,
  attribution,
  maxZoom: 16,
});

export const tileServers = {
  light: { base: layer('World_Light_Gray_Base'), labels: layer('World_Light_Gray_Reference') },
  dark: { base: layer('World_Dark_Gray_Base'), labels: layer('World_Dark_Gray_Reference') },
};
