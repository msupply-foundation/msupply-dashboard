import React, { Component } from 'react';
import { PanelProps } from '@grafana/ui';
import { VictoryChart, VictoryTooltip, VictoryStack, VictoryBar, VictoryAxis, VictoryZoomContainer } from 'victory';

interface Props extends PanelProps {}
interface State {
  selectedDomain?: any;
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
    // console.log('resultRow', resultRow);
    return resultRow;
  };

  let highestValue = 0;
  const mappedData: any = [];

  dataAsJsonRows.forEach((row: any) => {
    // console.log('single row:', row);
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
    this.requestId = '';
    this.state = this.getStateFromProps(props);
  }

  getBarFill = (type: any) => {
    const foundThreshold = this.state.thresholds.find((threshold: any) => threshold.value === type);
    if (foundThreshold) {
      return foundThreshold.color;
    }
    return 'black';
  };

  updateData = (data: any, mapping: any) => {
    // console.log('data', data);
    // console.log('mapping', mapping);
    const { requestId } = data.request;
    if (this.requestId !== requestId || this.mapping !== mapping) {
      this.requestId = requestId;
      this.mapping = mapping;

      const dataAsJsonRows = getDataAsJsonRows(data.series[0]);
      // console.log('dataAsJsonRows', dataAsJsonRows);

      const { highestValue, mappedData } = getMappedData(dataAsJsonRows, this.mapping);
      this.dataAsJsonRows = dataAsJsonRows;
      this.highestValue = highestValue;
      this.mappedData = mappedData;
      // console.log(this.mappedData);
    }
  };

  getStateFromProps = (props: any) => {
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
    const mainChartBarWidth = calculateBarWidth(
      mainChartTheme.chart.height,
      mainChartPadding,
      this.previousRangeX,
      mainChartTheme.spaceBetweenBars
    );
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
    };
  };

  UNSAFE_componentWillReceiveProps(props: any) {
    this.setState(this.getStateFromProps(props));
  }

  handleBrush(domain: any) {
    // console.log('Brushing...');
    const x1 = Math.floor(domain.x[0] + 0.5);
    const x2 = Math.floor(domain.x[1] + 0.5);
    // minimyn domain ?
    const newState: any = {};
    const { selectedDomain } = this.state;

    let newRangeX = x2 - x1;
    if (newRangeX > this.brushDomain.maxX || newRangeX < this.brushDomain.minX) {
      newRangeX = this.previousRangeX;
    }
    let x = selectedDomain.x;
    let y = selectedDomain.y;

    if (newRangeX !== this.previousRangeX) {
      this.previousRangeX = newRangeX;
      newState.mainChartBarWidth = calculateBarWidth(
        this.state.mainChartTheme.chart.height,
        this.state.mainChartTheme.chart.padding,
        newRangeX,
        this.state.mainChartTheme.spaceBetweenBars
      );
      newState.mainChartDomainPadding = { x: newState.mainChartBarWidth / 2 };
    }

    if (selectedDomain.x[0] !== domain.x[0] && selectedDomain.x[1] !== domain.x[1]) {
      x = [domain.x[0], domain.x[0] + this.previousRangeX];
    } else if (selectedDomain.x[0] === domain.x[0]) {
      x = [domain.x[0], domain.x[0] + this.previousRangeX];
    } else if (selectedDomain.x[1] === domain.x[1]) {
      x = [domain.x[1] - this.previousRangeX, domain.x[1]];
    }

    const newRangeY = domain.y[1] - domain.y[0];
    if (newRangeY <= this.brushDomain.maxY && newRangeY >= this.brushDomain.minY) {
      this.previousRangeY = newRangeY;
    }

    if (selectedDomain.y[0] !== domain.y[0] && selectedDomain.y[1] !== domain.y[1]) {
      y = [domain.y[0], domain.y[0] + this.previousRangeY];
    } else if (selectedDomain.y[0] === domain.y[0]) {
      y = [domain.y[0], domain.y[0] + this.previousRangeY];
    } else if (selectedDomain.y[1] === domain.y[1]) {
      y = [domain.y[1] - this.previousRangeY, domain.y[1]];
    }

    newState.selectedDomain = { x, y };
    // console.log(newState);
    this.setState(newState);
  }

  render() {
    if (!this.state.graphData) {
      return null;
    }
    console.log(this.state.selectedDomain);
    return (
      <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
        <VictoryChart
          domainPadding={this.state.mainChartDomainPadding}
          theme={this.state.mainChartTheme}
          containerComponent={
            <VictoryZoomContainer
              allowZoom={false}
              allowPan={false}
              responsive={false}
              zoomDomain={this.state.selectedDomain}
              // onZoomDomainChange={this.handleZoom.bind(this)}
            />
          }
        >
          <VictoryAxis
            events={[
              {
                target: 'tickLabels',
                eventHandlers: {
                  onClick: () => {
                    return [
                      {
                        target: 'tickLabels',
                        mutation: (props: any) => {
                          // this.variableSrv.setOptionAsCurrent(this.variableSrv.variables[4], {
                          //   text: this.state.graphData[0][props.datum - 1].x,
                          //   value: this.state.graphData[0][props.datum - 1].x,
                          // });
                          // this.variableSrv.variableUpdated(this.variableSrv.variables[4], true);
                          return null;
                        },
                      },
                    ];
                  },
                },
              },
            ]}
          />
          <VictoryAxis dependentAxis offsetY={25} />
          <VictoryStack>
            {this.state.graphData.map((dataRows: any, index: any) => {
              // console.log(index);
              // console.log(this.state.graphData);
              // console.log(dataRows);
              return (
                <VictoryBar
                  key={index}
                  labelComponent={<VictoryTooltip pointerLength={0} />}
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
                  events={[
                    {
                      childName: 'any',
                      target: 'data',
                      eventHandlers: {
                        onClick: () => {
                          return [
                            {
                              target: 'data',
                              mutation: (props) => {
                                // this.variableSrv.setOptionAsCurrent(this.variableSrv.variables[4], {
                                //   text: props.datum.x,
                                //   value: props.datum.x,
                                // });
                                // this.variableSrv.variableUpdated(this.variableSrv.variables[4], true);
                                return null;
                              },
                            },
                          ];
                        },
                      },
                    },
                  ]}
                  horizontal
                  barWidth={this.state.mainChartBarWidth}
                  data={dataRows}
                />
              );
            })}
          </VictoryStack>
        </VictoryChart>
      </div>
    );
  }
}
