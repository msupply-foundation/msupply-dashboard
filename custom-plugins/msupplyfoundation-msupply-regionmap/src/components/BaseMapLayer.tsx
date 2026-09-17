import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import '@maplibre/maplibre-gl-leaflet';
import type { StyleSpecification } from 'maplibre-gl';

import 'maplibre-gl/dist/maplibre-gl.css';

/**
 * Basemap rendered with MapLibre GL, added as a layer inside the existing
 * Leaflet map (via @maplibre/maplibre-gl-leaflet) so all the GeoJSON region
 * drawing, tooltips and click handling stay on Leaflet.
 *
 * Replaces the previous CartoDB raster TileLayer, which started requiring an
 * API key and rendered an "API KEY REQUIRED" watermark over the map.
 *
 * Tiles are Esri's key-free Gray Canvas basemaps, declared as an inline
 * MapLibre style. Two notes on why it's raster rather than vector:
 *   - Hosted vector styles (MapTiler, Stadia, ...) need their own API key,
 *     which is what we're getting away from.
 *   - The key-free vector option (OpenFreeMap) does not currently render in
 *     this bundle: the style, TileJSON, sprites and glyphs all load, and the
 *     WebGL canvas initialises, but no .pbf tiles are ever requested and the
 *     canvas stays transparent. Suspect the maplibre-gl web worker under the
 *     plugin's webpack config. Left as a follow-up.
 *
 * Esri's Gray Canvas carries only minimal country/ocean labels, all in Latin
 * script, which avoids the mixed-script problem of standard OSM raster tiles
 * (those bake each area's own script into the image - one map showed English,
 * Devanagari, Urdu and Chinese together, unchangeable client-side).
 * Region names come from the data, via the tooltips.
 */
const ESRI_ATTRIBUTION = 'Tiles &copy; <a href="https://www.esri.com/">Esri</a>';

const basemapStyle = (isLight: boolean): StyleSpecification => ({
  version: 8,
  sources: {
    base: {
      type: 'raster',
      // Esri uses {z}/{y}/{x} order, not {z}/{x}/{y}.
      tiles: [
        `https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_${
          isLight ? 'Light' : 'Dark'
        }_Gray_Base/MapServer/tile/{z}/{y}/{x}`,
      ],
      tileSize: 256,
      attribution: ESRI_ATTRIBUTION,
    },
  },
  layers: [{ id: 'base', type: 'raster', source: 'base' }],
});

interface BaseMapLayerProps {
  /** true when Grafana is on a light theme */
  isLight: boolean;
}

export const BaseMapLayer: React.FC<BaseMapLayerProps> = ({ isLight }) => {
  const map = useMap();

  useEffect(() => {
    // maplibreGL is attached to L by the @maplibre/maplibre-gl-leaflet import.
    const layer = (L as any).maplibreGL({
      style: basemapStyle(isLight),
      attribution: ESRI_ATTRIBUTION,
    });

    layer.addTo(map);

    return () => {
      map.removeLayer(layer);
    };
  }, [map, isLight]);

  return null;
};
