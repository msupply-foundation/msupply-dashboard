import React from 'react';
import { PanelEditorProps, Button, PanelOptionsGrid, PanelOptionsGroup, ThresholdsEditor } from '@grafana/ui';

// move defaults to another files
const defaultNavigatorChartTheme = {
  '//': 'spaceBetwenBars and brushStyle are not standard Victory Chart fields',
  spaceBetweenBars: 2,
  chart: {
    brushStyle: {
      stroke: 'transparent',
      fill: 'orange',
      fillOpacity: 0.7,
    },
    handleStyle: {
      stroke: 'transparent',
      fill: 'none',
    },
    width: 100,
    height: 600,
    padding: {
      left: 0,
      top: 25,
      right: 0,
      bottom: 0,
    },
  },
  axis: {
    tickValues: [],
    style: {
      axis: {
        fill: 'transparent',
        stroke: 'none',
      },
      grid: {
        fill: 'none',
        stroke: 'none',
      },
    },
  },
};

const defaultMainChartTheme = {
  '//': 'spaceBetwenBars is not standard Victory Charts field',
  spaceBetweenBars: 1,
  chart: {
    width: 600,
    height: 600,
    padding: {
      left: 250,
      top: 50,
      right: 50,
      bottom: 40,
    },
  },
  axis: {
    style: {
      axis: {
        fill: 'transparent',
        stroke: '#90A4AE',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      axisLabel: {
        textAnchor: 'middle',
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: 'normal',
        fill: '#455A64',
        stroke: 'transparent',
        strokeWidth: 0,
      },
      grid: {
        fill: 'none',
        stroke: '#ECEFF1',
        strokeDasharray: '10, 5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        pointerEvents: 'painted',
      },
      ticks: {
        fill: 'transparent',
        size: 5,
        stroke: '#90A4AE',
        strokeWidth: 1,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      tickLabels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: 'normal',
        fill: '#455A64',
        stroke: 'transparent',
        strokeWidth: 0,
      },
    },
  },
  independentAxis: {
    style: {
      grid: {
        fill: 'none',
        stroke: 'none',
      },
    },
  },
  bar: {
    style: {
      data: {
        fill: '#455A64',
        padding: 8,
        strokeWidth: 0,
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: 'normal',
        padding: 8,
        fill: '#455A64',
        stroke: 'transparent',
        strokeWidth: 0,
      },
    },
  },
};
const defaultOtherSettings = {
  mapping: [
    {
      x: 'item_name',
      y: 'criticalcount',
      threshold: 'criticalthreshold',
      label: 'criticallabel',
    },
    {
      x: 'item_name',
      y: 'lowcount',
      threshold: 'lowthreshold',
      label: 'lowlabel',
    },
    {
      x: 'item_name',
      y: 'normalcount',
      threshold: 'normalthreshold',
      label: 'normallabel',
    },
    {
      x: 'item_name',
      y: 'overcount',
      threshold: 'overthreshold',
      label: 'overlabel',
    },
  ],
  brushDomain: {
    minX: 15,
    maxX: 40,
    minY: 10,
    maxY: 100,
  },
};

interface State {
  mainChartTheme?: any;
  navigatorChartTheme?: any;
  thresholds?: any;
  otherSettings: any;
}

const verifyOrDefault = (jsonString: any, defaultJson: any) => {
  let result = JSON.stringify(defaultJson, null, 2);
  try {
    const parsedJson = JSON.parse(jsonString);
    if (Object.entries(parsedJson).length > 0) {
      result = jsonString;
    }
  } catch (e) {}
  return result;
};

export class HorizontalBarEdit extends React.Component<PanelEditorProps> {
  state: State;
  constructor(props: any) {
    super(props);
    this.state = {
      mainChartTheme: verifyOrDefault(this.props.options.mainChartTheme, defaultMainChartTheme),
      otherSettings: verifyOrDefault(this.props.options.otherSettings, defaultOtherSettings),
      navigatorChartTheme: verifyOrDefault(this.props.options.navigatorChartTheme, defaultNavigatorChartTheme),
      thresholds: this.props.options.thresholds,
    };
  }

  onNavigatorChartThemeChange = ({ target }: any) => {
    this.setState({ navigatorChartTheme: target.value });
  };

  onMainChartThemeChange = ({ target }: any) => {
    this.setState({ mainChartTheme: target.value });
  };

  onThresholdsChanged = (thresholds: any) => {
    this.setState({ thresholds });
  };

  onOtherSettingsChange = ({ target }: any) => {
    this.setState({ otherSettings: target.value });
  };

  onRefreshClick = () => {
    try {
      let mainChartTheme = JSON.parse(this.state.mainChartTheme);
      mainChartTheme = JSON.stringify(mainChartTheme, null, 2);
      let navigatorChartTheme = JSON.parse(this.state.navigatorChartTheme);
      navigatorChartTheme = JSON.stringify(navigatorChartTheme, null, 2);
      let otherSettings = JSON.parse(this.state.otherSettings);
      otherSettings = JSON.stringify(otherSettings, null, 2);

      this.props.onOptionsChange({
        ...this.props.options,
        mainChartTheme,
        navigatorChartTheme,
        otherSettings,
        thresholds: this.state.thresholds,
      });

      this.setState({ mainChartTheme, navigatorChartTheme, otherSettings });
    } catch (e) {
      console.log('error parsing json', e);
      // TODO show in UI that json parse failed
    }
  };

  render() {
    return (
      <>
        <Button onClick={this.onRefreshClick}>Refresh</Button>
        <PanelOptionsGrid>
          <PanelOptionsGroup title="Main Chart Theme">
            <textarea cols={50} rows={15} onChange={this.onMainChartThemeChange} value={this.state.mainChartTheme} />
          </PanelOptionsGroup>
          <PanelOptionsGroup title="Navigator Chart Theme">
            <textarea
              cols={50}
              rows={15}
              onChange={this.onNavigatorChartThemeChange}
              value={this.state.navigatorChartTheme}
            />
          </PanelOptionsGroup>
          <PanelOptionsGroup title="Other Settings">
            <textarea cols={50} rows={15} onChange={this.onOtherSettingsChange} value={this.state.otherSettings} />
          </PanelOptionsGroup>
          <ThresholdsEditor onChange={this.onThresholdsChanged} thresholds={this.state.thresholds} />
        </PanelOptionsGrid>
      </>
    );
  }
}
