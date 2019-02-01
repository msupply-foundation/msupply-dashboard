import { MetricsPanelCtrl } from 'grafana/app/plugins/sdk';
import * as _ from 'lodash';
import DataFormatter from './data_formatter';
import './css/region-map-panel.css';
import $ from 'jquery';
import './css/leaflet.css';
import RegionMap from './regionmap';

const panelDefaults = {
  maxDataPoints: 1,
  mapCenter: '(0°, 0°)',
  mapCenterLatitude: 0,
  mapCenterLongitude: 0,
  initialZoom: 1,
  valueName: 'total',
  circleMinSize: 2,
  circleMaxSize: 30,
  locationData: 'countries',
  thresholds: '0,10',
  colors: ['rgba(245, 54, 54, 0.9)', 'rgba(237, 129, 40, 0.89)', 'rgba(50, 172, 45, 0.97)'],
  unitSingle: '',
  unitPlural: '',
  showLegend: true,
  mouseWheelZoom: false,
  esMetric: 'Count',
  decimals: 0,
  hideEmpty: false,
  hideZero: false,
  stickyLabels: false,
  tableQueryOptions: {
    queryType: 'geojson',
    geojsonField: 'geojson',
    latitudeField: 'latitude',
    longitudeField: 'longitude',
    metricField: 'metric',
  },
};

const mapCenters = {
  '(0°, 0°)': { mapCenterLatitude: 0, mapCenterLongitude: 0 },
  'North America': { mapCenterLatitude: 40, mapCenterLongitude: -100 },
  Europe: { mapCenterLatitude: 46, mapCenterLongitude: 14 },
  'West Asia': { mapCenterLatitude: 26, mapCenterLongitude: 53 },
  'SE Asia': { mapCenterLatitude: 10, mapCenterLongitude: 106 },
  'Last GeoHash': { mapCenterLatitude: 0, mapCenterLongitude: 0 },
};

export default class RegionMapCtrl extends MetricsPanelCtrl {
  static templateUrl = 'partials/module.html';

  dataFormatter: DataFormatter;
  locations: any;
  tileServer: string;
  saturationClass: string;
  map: any;
  series: any;
  data: any;
  mapCenterMoved: boolean;

  /** @ngInject **/
  constructor($scope: any, $injector: any, contextSrv: any) {
    super($scope, $injector);

    this.setMapProvider(contextSrv);
    _.defaults(this.panel, panelDefaults);

    this.dataFormatter = new DataFormatter(this);

    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('data-received', this.onDataReceived.bind(this));
    this.events.on('panel-teardown', this.onPanelTeardown.bind(this));
    this.events.on('data-snapshot-load', this.onDataSnapshotLoad.bind(this));

    this.loadLocationDataFromFile();
  }

  setMapProvider = (contextSrv: any) => {
    this.tileServer = contextSrv.user.lightTheme ? 'CartoDB Positron' : 'CartoDB Dark';
    this.setMapSaturationClass();
  };

  setMapSaturationClass = () => {
    if (this.tileServer === 'CartoDB Dark') {
      this.saturationClass = 'map-darken';
    } else {
      this.saturationClass = '';
    }
  };

  loadLocationDataFromFile = (reload?: boolean) => {
    if (this.map && !reload) {
      return;
    }

    if (this.panel.snapshotLocationData) {
      this.locations = this.panel.snapshotLocationData;
      return;
    }

    if (this.panel.locationData !== 'table') {
      $.getJSON(
        'public/plugins/grafana-region-map-panel/data/' + this.panel.locationData + '.json'
      ).then(this.reloadLocations.bind(this));
    }
  };

  reloadLocations = (res: any) => {
    this.locations = res;
    this.refresh();
  };

  showTableGeojsonOptions = () => {
    return (
      this.panel.locationData === 'table' && this.panel.tableQueryOptions.queryType === 'geojson'
    );
  };

  showTableCoordinateOptions = () => {
    return (
      this.panel.locationData === 'table' &&
      this.panel.tableQueryOptions.queryType === 'coordinates'
    );
  };

  onPanelTeardown = () => {
    if (this.map) {
      this.map.remove();
    }
  };

  onInitEditMode = () => {
    this.addEditorTab(
      'RegionMap',
      'public/plugins/grafana-region-map-panel/partials/editor.html',
      2
    );
  };

  onDataReceived = (dataList: any) => {
    if (!dataList) {
      return;
    }

    if (this.dashboard.snapshot && this.locations) {
      this.panel.snapshotLocationData = this.locations;
    }

    const data = [];

    if (this.panel.locationData === 'table') {
      const tableData = dataList.map(DataFormatter.tableHandler.bind(this));
      this.dataFormatter.setTableValues(tableData, data);
    }
    this.data = data;

    this.updateThresholdData();

    if (this.data.length && this.panel.mapCenter === 'Last GeoHash') {
      this.centerOnLastGeoHash();
    } else {
      this.render();
    }
  };

  centerOnLastGeoHash = () => {
    const last: any = _.last(this.data);
    mapCenters[this.panel.mapCenter].mapCenterLatitude = last.locationLatitude;
    mapCenters[this.panel.mapCenter].mapCenterLongitude = last.locationLongitude;
    this.setNewMapCenter();
  };

  onDataSnapshotLoad = (snapshotData: any) => {
    this.onDataReceived(snapshotData);
  };

  setNewMapCenter = () => {
    if (this.panel.mapCenter !== 'custom') {
      this.panel.mapCenterLatitude = mapCenters[this.panel.mapCenter].mapCenterLatitude;
      this.panel.mapCenterLongitude = mapCenters[this.panel.mapCenter].mapCenterLongitude;
    }
    this.mapCenterMoved = true;
    this.render();
  };

  setZoom = () => {
    this.map.setZoom(this.panel.initialZoom || 1);
  };

  toggleLegend = () => {
    if (!this.panel.showLegend) {
      this.map.removeLegend();
    }
    this.render();
  };

  toggleMouseWheelZoom = () => {
    this.map.setMouseWheelZoom();
    this.render();
  };

  toggleStickyLabels = () => {
    this.map.clearCircles();
    this.render();
  };

  changeThresholds = () => {
    this.updateThresholdData();
    this.map.legend.update();
    this.render();
  };

  updateThresholdData = () => {
    this.data.thresholds = this.panel.thresholds.split(',').map(strValue => {
      return Number(strValue.trim());
    });
    while (_.size(this.panel.colors) > _.size(this.data.thresholds) + 1) {
      // too many colors. remove the last one.
      this.panel.colors.pop();
    }
    while (_.size(this.panel.colors) < _.size(this.data.thresholds) + 1) {
      // not enough colors. add one.
      const newColor = 'rgba(50, 172, 45, 0.97)';
      this.panel.colors.push(newColor);
    }
  };

  changeLocationData = () => {
    this.loadLocationDataFromFile(true);
  };

  link = (scope: any, elem: any, attrs: any, ctrl: any) => {
    ctrl.events.on('render', () => {
      render();
      ctrl.renderingCompleted();
    });

    const render = () => {
      if (!ctrl.data) {
        return;
      }

      const mapContainer = elem.find('.mapcontainer');

      if (mapContainer[0].id.indexOf('{{') > -1) {
        return;
      }

      if (!ctrl.map) {
        const map = new RegionMap(ctrl, mapContainer[0]);
        map.createMap();
        ctrl.map = map;
      }
      ctrl.map.resize();

      if (ctrl.mapCenterMoved) {
        ctrl.map.panToMapCenter();
      }

      if (!ctrl.map.legend && ctrl.panel.showLegend) {
        ctrl.map.createLegend();
      }

      // ctrl.map.drawPolygons();
      ctrl.map.drawGeoJSONs();
    };
  };
}
