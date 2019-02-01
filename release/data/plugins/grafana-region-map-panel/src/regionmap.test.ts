import RegionMap from './regionmap';
import DataBuilder from '../test/data_builder';
import * as _ from 'lodash';

describe('regionMap', () => {
  let regionMap;
  let ctrl;

  beforeEach(() => {
    setupregionMapFixture();
  });

  describe('when a regionMap is created', () => {
    it('should add Leaflet to the map div', () => {
      expect(document.getElementsByClassName('leaflet-container')[0]).not.toBe(null);
    });
  });

  describe('when the data has one point', () => {
    beforeEach(() => {
      ctrl.data = new DataBuilder()
        .withCountryAndValue('SE', 1)
        .withDataRange(1, 1, 0)
        .build();
      ctrl.panel.circleMaxSize = '10';
      regionMap.drawPolygons();
    });

    it('should draw one circle on the map', () => {
      expect(regionMap.polygons.length).toBe(1);
      expect(regionMap.polygons[0]._latlng.lat).toBe(60);
      expect(regionMap.polygons[0]._latlng.lng).toBe(18);
    });

    it('should create a circle with max circle size', () => {
      expect(regionMap.polygons[0].options.radius).toBe(10);
    });

    it('should create a circle popup with the data point value', () => {
      expect(regionMap.polygons[0]._popup._content).toBe('Sweden: 1');
    });
  });

  describe('when the data has two points', () => {
    beforeEach(() => {
      ctrl.data = new DataBuilder()
        .withCountryAndValue('SE', 1)
        .withCountryAndValue('IE', 2)
        .withDataRange(1, 2, 1)
        .build();
      ctrl.panel.circleMinSize = '2';
      ctrl.panel.circleMaxSize = '10';
      regionMap.drawPolygons();
    });

    it('should draw two circles on the map', () => {
      expect(regionMap.polygons.length).toBe(2);
    });

    it('should create a circle with min circle size for smallest value size', () => {
      expect(regionMap.polygons[0].options.radius).toBe(2);
    });

    it('should create a circle with max circle size for largest value size', () => {
      expect(regionMap.polygons[1].options.radius).toBe(10);
    });

    it('should create two circle popups with the data point values', () => {
      expect(regionMap.polygons[0]._popup._content).toBe('Sweden: 1');
      expect(regionMap.polygons[1]._popup._content).toBe('Ireland: 2');
    });
  });

  describe('when units option is set', () => {
    beforeEach(() => {
      ctrl.data = new DataBuilder()
        .withCountryAndValue('SE', 1)
        .withCountryAndValue('IE', 2)
        .withDataRange(1, 2, 1)
        .build();
      ctrl.panel.circleMinSize = '2';
      ctrl.panel.circleMaxSize = '10';
      ctrl.panel.unitSingular = 'error';
      ctrl.panel.unitPlural = 'errors';
      regionMap.drawPolygons();
    });

    it('should create a circle popup using the singular unit in the label', () => {
      expect(regionMap.polygons[0]._popup._content).toBe('Sweden: 1 error');
    });

    it('should create a circle popup using the plural unit in the label', () => {
      expect(regionMap.polygons[1]._popup._content).toBe('Ireland: 2 errors');
    });
  });

  describe('when the data has three points', () => {
    beforeEach(() => {
      ctrl.data = new DataBuilder()
        .withCountryAndValue('SE', 1)
        .withCountryAndValue('IE', 2)
        .withCountryAndValue('US', 3)
        .withDataRange(1, 3, 2)
        .withThresholdValues([2])
        .build();
      ctrl.panel.circleMinSize = '2';
      ctrl.panel.circleMaxSize = '10';
      regionMap.drawPolygons();
    });

    it('should draw three circles on the map', () => {
      expect(regionMap.polygons.length).toBe(3);
    });

    it('should create a circle with min circle size for smallest value size', () => {
      expect(regionMap.polygons[0].options.radius).toBe(2);
    });

    it('should create a circle with circle size 6 for mid value size', () => {
      expect(regionMap.polygons[1].options.radius).toBe(6);
    });

    it('should create a circle with max circle size for largest value size', () => {
      expect(regionMap.polygons[2].options.radius).toBe(10);
    });

    it('should set red color on values under threshold', () => {
      expect(regionMap.polygons[0].options.color).toBe('red');
    });

    it('should set blue color on values equal to or over threshold', () => {
      expect(regionMap.polygons[1].options.color).toBe('blue');
      expect(regionMap.polygons[2].options.color).toBe('blue');
    });

    it('should create three circle popups with the data point values', () => {
      expect(regionMap.polygons[0]._popup._content).toBe('Sweden: 1');
      expect(regionMap.polygons[1]._popup._content).toBe('Ireland: 2');
      expect(regionMap.polygons[2]._popup._content).toBe('United States: 3');
    });
  });

  describe('when the data has empty values and hideEmpty is true', () => {
    beforeEach(() => {
      ctrl.data = new DataBuilder()
        .withCountryAndValue('SE', 1)
        .withCountryAndValue('IE', 2)
        .withCountryAndValue('US', null)
        .withDataRange(1, 3, 2)
        .withThresholdValues([2])
        .build();
      ctrl.panel.hideEmpty = true;
      regionMap.drawPolygons();
    });

    it('should draw three circles on the map', () => {
      expect(regionMap.polygons.length).toBe(2);
    });
  });

  describe('when the data has empty values and hideEmpty is true', () => {
    beforeEach(() => {
      ctrl.data = new DataBuilder()
        .withCountryAndValue('SE', 1)
        .withCountryAndValue('IE', 2)
        .withCountryAndValue('US', 0)
        .withDataRange(1, 3, 2)
        .withThresholdValues([2])
        .build();
      ctrl.panel.hideZero = true;
      regionMap.drawPolygons();
    });

    it('should draw three circles on the map', () => {
      expect(regionMap.polygons.length).toBe(2);
    });
  });

  describe('when the data is updated but not locations', () => {
    beforeEach(() => {
      ctrl.panel.circleMinSize = '2';
      ctrl.panel.circleMaxSize = '10';

      ctrl.data = new DataBuilder()
        .withCountryAndValue('SE', 1)
        .withCountryAndValue('IE', 2)
        .withCountryAndValue('US', 3)
        .withDataRange(1, 3, 2)
        .withThresholdValues([2])
        .build();

      regionMap.drawPolygons();

      ctrl.data = new DataBuilder()
        .withCountryAndValue('SE', 3)
        .withCountryAndValue('IE', 2)
        .withCountryAndValue('US', 1)
        .withDataRange(1, 3, 2)
        .withThresholdValues([2])
        .build();

      regionMap.drawPolygons();
    });

    it('should create three circle popups with updated data', () => {
      expect(regionMap.polygons[0]._popup._content).toBe('Sweden: 3');
      expect(regionMap.polygons[1]._popup._content).toBe('Ireland: 2');
      expect(regionMap.polygons[2]._popup._content).toBe('United States: 1');
    });

    it('should set red color on values under threshold', () => {
      expect(regionMap.polygons[2].options.color).toBe('red');
    });

    it('should set blue color on values equal to or over threshold', () => {
      expect(regionMap.polygons[0].options.color).toBe('blue');
      expect(regionMap.polygons[1].options.color).toBe('blue');
    });
  });

  describe('when the number of locations changes', () => {
    beforeEach(() => {
      ctrl.panel.circleMinSize = '2';
      ctrl.panel.circleMaxSize = '10';

      ctrl.data = new DataBuilder()
        .withCountryAndValue('SE', 1)
        .withCountryAndValue('IE', 2)
        .withCountryAndValue('US', 3)
        .withDataRange(1, 3, 2)
        .withThresholdValues([2])
        .build();

      regionMap.drawPolygons();

      ctrl.data = new DataBuilder()
        .withCountryAndValue('SE', 2)
        .withDataRange(1, 1, 0)
        .withThresholdValues([2])
        .build();

      regionMap.drawPolygons();
    });

    it('should create one circle popups with updated data', () => {
      expect(regionMap.polygons[0]._popup._content).toBe('Sweden: 2');
    });

    it('should set blue color on values equal to or over threshold', () => {
      expect(regionMap.polygons[0].options.color).toBe('blue');
    });
  });

  describe('when one threshold is set', () => {
    beforeEach(() => {
      ctrl.data = new DataBuilder().withThresholdValues([2]).build();
      regionMap.createLegend();
    });

    it('should create a legend with two legend values', () => {
      expect(regionMap.legend).toBeDefined();
      expect(regionMap.legend._div.outerHTML).toBe(
        '<div class="info legend leaflet-control">' +
          '<div class="legend-item">' +
          '<i style="background:red"></i> &lt; 2</div><div class="legend-item"><i style="background:blue"></i> 2+</div>' +
          '</div>'
      );
    });
  });

  describe('when legend removed', () => {
    beforeEach(() => {
      ctrl.data = new DataBuilder().withThresholdValues([2]).build();
      regionMap.createLegend();
      regionMap.removeLegend();
    });

    it('should remove the legend from the regionMap', () => {
      expect(regionMap.legend).toBe(null);
    });
  });

  describe('when two thresholds are set', () => {
    beforeEach(() => {
      ctrl.data = new DataBuilder().withThresholdValues([2, 4]).build();
      regionMap.createLegend();
    });

    it('should create a legend with three legend values', () => {
      expect(regionMap.legend).toBeDefined();
      expect(regionMap.legend._div.outerHTML).toBe(
        '<div class="info legend leaflet-control"><div class="legend-item">' +
          '<i style="background:red"></i> &lt; 2</div><div class="legend-item"><i style="background:blue"></i> 2–4</div>' +
          '<div class="legend-item"><i style="background:green"></i> 4+</div></div>'
      );
    });
  });

  describe('when three thresholds are set', () => {
    beforeEach(() => {
      ctrl.data = new DataBuilder().withThresholdValues([2, 4, 6]).build();
      regionMap.createLegend();
    });

    it('should create a legend with four legend values', () => {
      expect(regionMap.legend).toBeDefined();
      expect(regionMap.legend._div.outerHTML).toBe(
        '<div class="info legend leaflet-control"><div class="legend-item">' +
          '<i style="background:red"></i> &lt; 2</div><div class="legend-item"><i style="background:blue"></i> 2–4</div>' +
          '<div class="legend-item"><i style="background:green"></i> 4–6</div>' +
          '<div class="legend-item"><i style="background:undefined"></i> 6+</div></div>'
      );
    });
  });

  afterEach(() => {
    const fixture: HTMLElement = document.getElementById('fixture')!;
    document.body.removeChild(fixture);
  });

  function setupregionMapFixture() {
    const fixture = '<div id="fixture" class="mapcontainer"></div>';
    document.body.insertAdjacentHTML('afterbegin', fixture);

    ctrl = {
      panel: {
        mapCenterLatitude: 0,
        mapCenterLongitude: 0,
        initialZoom: 1,
        colors: ['red', 'blue', 'green'],
      },
      tileServer: 'CartoDB Positron',
    };
    regionMap = new RegionMap(ctrl, document.getElementsByClassName('mapcontainer')[0]);
    regionMap.createMap();
  }
});
