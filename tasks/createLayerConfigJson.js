const escapeJSON = require('escape-json-node');

const layerConfigs = {
  'terrain': {
    label: 'Terrain',
    url: 'https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png',
    minimapLayerUrl: 'https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png',
    config: {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
    },
    containerClass: 'with-base-layer-streets',
    maxZoom: 18
  },
  'toner': {
    label: 'Toner',
    url: 'https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',
    minimapLayerUrl: 'https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',
    config: {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
    },
    containerClass: 'with-base-layer-streets',
    maxZoom: 18
  }
};

/* eslint-disable */
console.log(escapeJSON(JSON.stringify(layerConfigs)).replace(new RegExp('"', 'g'), '\\"'));
/* eslint-enable */