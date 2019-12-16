import React, { Component } from 'react';
import { PanelProps } from '@grafana/ui';
import { VictoryChart, VictoryBrushContainer, VictoryStack, VictoryBar } from 'victory';

interface Props extends PanelProps {}
interface State {
  selectedDomain?: any;
  zoomDomain?: any;
  graphData?: any;
  mainChartTheme?: any;
  navigatorChartTheme?: any;
  tickValues?: any;
  mainChartBarWidth?: any;
  navigatorChartBarWidth?: any;
  mainChartDomainPadding?: any;
  thresholds?: any;
  highest?: any;
}

const calculateBarWidth = (totalHeight: any, padding: any, domainRange: any, spaceBetweenBars: any) => {
  return (totalHeight - padding.top - padding.bottom) / domainRange - spaceBetweenBars;
};

const getDataAsJsonRows = (series: any) => {
  const returnData: any = [];

  for (let i = 0; i < series.length; i++) {
    returnData[i] = {};
  }

  series.fields.forEach((field: any) => {
    const { values, name: fieldName } = field;
    values.buffer.forEach((value: any, index: number) => (returnData[index][fieldName] = value));
  });
  return returnData;
};

const getMappedData = (dataAsJsonRows: any, mapping: any) => {
  const mapColumns = (singleMapping: any, jsonDataRow: any) => {
    const resultRow: any = {};
    // type script made this all too complex looking, need to make it very safe
    Object.entries(singleMapping).map(([key, value]) => {
      const keyForMapping: any = key;
      const keyForData: any = value;
      resultRow[keyForMapping] = jsonDataRow[keyForData];
    });
    return resultRow;
  };

  let highestValue = 0;
  const mappedData: any = [];

  dataAsJsonRows.forEach((row: any) => {
    let sumValue = 0;
    mapping.forEach((singleMapping: any, index: any) => {
      if (!mappedData[index]) {
        mappedData[index] = [];
      }
      const mappedRow = mapColumns(singleMapping, row);
      sumValue += mappedRow.y;
      mappedData[index].push(mappedRow);
    });
    highestValue = Math.max(sumValue, highestValue);
  });
  // console.log(mappedData);
  // console.log(highestValue);
  // console.timeEnd('getMappedData');
  return { mappedData, highestValue };
};

export class HorizontalBar extends Component<Props, State> {
  state: State;
  requestId: string;
  variableSrv: any;
  dataAsJsonRows: any;
  highestValue: any;
  mappedData: any;
  mapping: any;
  brushDomain: any;
  previousRangeX: any;
  previousRangeY: any;

  constructor(props: any) {
    super(props);
    // const variableSrv = props.injector.get('variableSrv');
    // this.variableSrv = variableSrv;

    this.state = {};
    // console.log('Initial state', this.state);
    this.requestId = '';
    this.state = this.getStateFromProps(props);
    // console.log('State after Props', this.state);
  }

  // shouldComponentUpdate(nextProps: any, nextState: any) {
  //   console.log('thisState: ', this.state);
  //   console.log('nextState: ', nextState);
  //   return this.state.selectedDomain !== nextState.selectedDomain;
  // }

  getBarFill = (type: any) => {
    const foundThreshold = this.state.thresholds.find((threshold: any) => threshold.value === type);
    if (foundThreshold) {
      return foundThreshold.color;
    }
    return 'black';
  };

  updateData = (data: any, mapping: any) => {
    console.log('Updating graph data...');
    const { requestId } = data.request;
    if (this.requestId !== requestId || this.mapping !== mapping) {
      this.requestId = requestId;
      this.mapping = mapping;

      const dataAsJsonRows = getDataAsJsonRows(data.series[0]);

      const { highestValue, mappedData } = getMappedData(dataAsJsonRows, this.mapping);
      this.dataAsJsonRows = dataAsJsonRows;
      this.highestValue = highestValue;
      this.mappedData = mappedData;
    }
  };

  getStateFromProps = (props: any) => {
    // console.log('props', props);
    const mainChartTheme = JSON.parse(props.options.mainChartTheme);
    const navigatorChartTheme = JSON.parse(props.options.navigatorChartTheme);

    const { mapping, brushDomain } = JSON.parse(props.options.otherSettings);

    const mainChartPadding = mainChartTheme.chart.padding;
    const navigatorPadding = navigatorChartTheme.chart.padding;

    this.brushDomain = brushDomain;

    this.updateData(props.data, mapping);

    const { mappedData: graphData, highestValue } = this;
    if (!this.brushDomain.minY) {
      this.brushDomain.minY = highestValue;
    }
    if (!this.brushDomain.maxY) {
      this.brushDomain.maxY = highestValue;
    }

    const minX = Math.min(graphData[0].length, this.brushDomain.minX);
    const minY = Math.min(highestValue, this.brushDomain.minY);

    const initialDomain = {
      x: [graphData[0].length - (minX + 0.5), graphData[0].length + 0.5],
      y: [0, minY],
    };

    this.previousRangeX = initialDomain.x[1] - initialDomain.x[0];
    this.previousRangeY = initialDomain.y[1] - initialDomain.y[0];
    const mainChartBarWidth = calculateBarWidth(mainChartTheme.chart.height, mainChartPadding, this.previousRangeX, mainChartTheme.spaceBetweenBars);
    const mainChartDomainPadding = { x: mainChartBarWidth / 2 };
    const navigatorChartBarWidth = calculateBarWidth(
      navigatorChartTheme.chart.height,
      navigatorPadding,
      graphData[0].length,
      navigatorChartTheme.spaceBetweenBars
    );
    navigatorChartTheme.chart.domainPadding = { x: navigatorChartBarWidth / 2 };

    const tickValues = [];
    let i = 0;
    // const increment = Math.floor(highest / 10);

    for (; i < highestValue; i += 1) {
      tickValues.push(i);
    }

    // graphData

    return {
      barRatio: 9,
      mainChartTheme,
      navigatorChartTheme,
      graphData,
      tickValues,
      mainChartBarWidth,
      navigatorChartBarWidth,
      thresholds: this.props.options.thresholds,
      mainChartDomainPadding,
      selectedDomain: initialDomain,
      zoomDomain: initialDomain,
    };
  };

  componentWillReceiveProps(props: any) {
    this.setState(this.getStateFromProps(props));
  }

  handleBrush(domain: any, props: any) {
    console.log('Brushing');
    this.setState({ zoomDomain: domain });
  }

  handleBrushEnd(domain: any, props: any) {
    console.log('Brush end');
    this.setState({ selectedDomain: domain });
  }

  render() {
    if (!this.state.graphData) {
      return null;
    }
    // console.log(this.state.graphData);
    return (
      <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
        {this.state.graphData[0].length > this.brushDomain.minX && (
          <VictoryChart
            theme={this.state.navigatorChartTheme}
            containerComponent={
              <VictoryBrushContainer
                responsive={false}
                // brushDimension="y"
                brushDomain={this.state.zoomDomain}
                defaultBrushArea="disable"
                allowResize={false}
                brushStyle={this.state.navigatorChartTheme.chart.brushStyle}
                handleStyle={this.state.navigatorChartTheme.chart.handleStyle}
                // onBrushDomainChange={this.handleBrush.bind(this)}
                // onBrushDomainChangeEnd={this.handleBrushEnd.bind(this)}
              />
            }
          >
            <VictoryStack>
              {this.state.graphData.map((dataRows: any, index: any) => {
                console.log('Rendering Navigator Stack...');
                // console.log('brushDomain', this.brushDomain);
                // console.log('selectedDomain', this.state.selectedDomain);
                // console.log(index);xxxw
                // console.log(dataRows);
                return (
                  <VictoryBar
                    key={index}
                    labelComponent={<div />}
                    barWidth={this.state.navigatorChartBarWidth}
                    horizontal
                    style={{
                      data: {
                        fill: ({ datum }) => {
                          return this.getBarFill(datum.threshold);
                        },
                        // stroke: ({ datum }) => {
                        //   return this.variableSrv.variables[4].current.text === datum.x ? 'grey' : 'none';
                        // },
                        fillOpacity: 0.6,
                        // strokeWidth: ({ datum }) => {
                        //   return this.variableSrv.variables[4].current.text === datum.x ? 2 : 0;
                        // },
                      },
                    }}
                    data={dataRows}
                  />
                );
              })}
            </VictoryStack>
          </VictoryChart>
        )}
      </div>
    );
  }
}
