import React, { Component } from 'react';
import { PanelProps } from '@grafana/ui';
import { VictoryChart, VictoryTooltip, VictoryStack, VictoryBar, VictoryAxis, VictoryBrushContainer, VictoryContainer } from 'victory';

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
  thresholdStrings?: any;
  highest?: any;
  selectedLetter: string;
  selectedItemsCount: number;
  showNavigator: boolean;
}

const calculateBarWidth = (totalHeight: any, padding: any, domainRange: any, spaceBetweenBars: any) => {
  // console.log("Calculating bar width...");
  // console.log('Total height: ', totalHeight);
  // console.log('Padding: ', padding);
  // console.log('Domain Range: ', domainRange);
  // console.log('Space between bars: ', spaceBetweenBars);
  // console.log("Returning: ", (totalHeight - padding.top - padding.bottom) / domainRange - spaceBetweenBars);
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
  return { mappedData, highestValue };
};

//Component for Pagination functionality
type PaginateProps = {
  selectedLetter: string;
  selectedItemsCount: number;
  updateDomain: any;
  selectedDomain: any;
  showNavigator: boolean;
};
type StateProps = {
  selectedLetter: string;
  selectedItemsCount: number;
  showNavigator: boolean;
};
class PaginateSelector extends React.Component<PaginateProps, StateProps> {
  letters: string[];
  constructor(props: any) {
    super(props);

    const letters: string[] = [];
    for (let i = 65; i <= 90; i++) {
      letters.push(String.fromCharCode(i));
    }

    this.letters = letters;

    this.state = {
      selectedLetter: this.props.selectedLetter,
      selectedItemsCount: this.props.selectedItemsCount,
      showNavigator: this.props.showNavigator,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event: any) {
    if (event.target.id === 'letter-select') {
      this.setState({ selectedLetter: event.target.value });
      this.props.updateDomain(event);
    }
    if (event.target.id === 'item-display-select') {
      this.setState({ selectedItemsCount: event.target.value });
      this.props.updateDomain(event);
    }
    if (event.target.id === 'show-navigator') {
      this.setState({ showNavigator: !this.state.showNavigator });
      this.props.updateDomain(event);
    }
  }

  handleClick(event: any) {
    this.props.updateDomain(event);
  }

  render() {
    //STYLING FOR THIS SECTION NEEDS IMPROVEMENT IF ITS TO BE IMPLEMENTED
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <label className="gf-form-label template-variable" style={{ marginLeft: 10, marginRight: 10 }}>
          Jump to:{' '}
        </label>
        <select id="letter-select" style={{ width: 50 }} value={this.state.selectedLetter} onChange={this.handleChange}>
          {this.letters.map((letter: string, index: number) => (
            <option value={letter} key={index}>
              {letter}
            </option>
          ))}
        </select>
        <button id="jump-up" className="btn btn-primary" style={{ marginLeft: 10, marginRight: 10 }} onClick={this.handleClick}>
          Up
        </button>
        <button id="jump-down" className="btn btn-primary" style={{ marginLeft: 10, marginRight: 10 }} onClick={this.handleClick}>
          Down
        </button>
        <label className="gf-form-label template-variable">Items to show: </label>
        <select
          className="browser-default custom-select"
          id="item-display-select"
          style={{ width: 50 }}
          value={this.state.selectedItemsCount}
          onChange={this.handleChange}
        >
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        {/* <span style={{ marginLeft: 30, marginRight: 10 }}>Show Navigator</span>
        <input id="show-navigator" type="checkbox" checked={this.state.showNavigator} onChange={this.handleChange} /> */}
      </div>
    );
  }
}

//Main chart component
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

    // this.state = {};
    // console.log('Initial state', this.state);
    this.requestId = '';
    this.state = this.getStateFromProps(props);
    this.updateDomainFromSelectors = this.updateDomainFromSelectors.bind(this);
    // console.log('State after Props', this.state);
  }

  getBarFill = (type: any) => {
    const foundThreshold = this.state.thresholds.find((threshold: any) => threshold.value === type);
    if (foundThreshold) {
      return foundThreshold.color;
    }
    return 'black';
  };

  stockLabelString = (item: string, threshold: number, count: number) => {
    const numStr = count === 1 ? ' facility ' : ' facilities ';
    const conditionStr = this.state.thresholdStrings[threshold];
    return item + '\n' + count + numStr + conditionStr;
  };

  updateData = (data: any, mapping: any) => {
    // console.log('Updating graph data....');
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
    // console.log('Generating graphdata...');
    const { mappedData: graphData, highestValue } = this;
    console.log('graphData = ', graphData);
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

    const mainChartBarWidth = calculateBarWidth(
      mainChartTheme.chart.height,
      mainChartPadding,
      initialDomain.x[1] - initialDomain.x[0],
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

    //Strings for labels based on thresholds
    const thresholdMappings = {
      1: 'out of stock',
      2: 'low stock',
      3: 'normal stock',
      4: 'over stock',
    };

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
      thresholdStrings: thresholdMappings,
      mainChartDomainPadding,
      selectedDomain: initialDomain,
      zoomDomain: initialDomain,
      selectedLetter: 'A',
      selectedItemsCount: minX,
      showNavigator: false,
    };
  };

  componentWillReceiveProps(props: any) {
    this.setState(this.getStateFromProps(props));
  }

  // handleZoom(domain: any) {
  //   this.setState({ selectedDomain: domain });
  // }

  handleBrush(domain: any, props: any) {
    console.log('Brushing');
    this.setState({ zoomDomain: domain });
  }

  handleBrushEnd(domain: any, props: any) {
    console.log('Brush end');
    this.setState({ selectedDomain: domain });
  }

  updateDomainFromSelectors(event: any) {
    if (event.target.id === 'show-navigator') {
      this.setState({ showNavigator: !this.state.showNavigator });
      console.log('Updated Navigator');
      return;
    }

    //Values for all events:
    const currentChartHeight = this.state.selectedDomain.x[1] - this.state.selectedDomain.x[0];
    let newDomain: any;
    let newBarWidth: number = this.state.mainChartBarWidth; //default if not changed
    let newChartHeight: number = currentChartHeight; //default if not changed

    //New domain for Letter selection
    if (event.target.id === 'letter-select') {
      const letterIndex = this.state.graphData[0]
        .map((elem: { x: string }) => elem.x[0]) //Array of Item First Letters
        .reverse()
        .findIndex((letter: string) => letter === event.target.value); //Index of selected letter
      // console.log("Letter Index", letterIndex);
      // console.log("Current Domain: ", this.state.selectedDomain);
      // console.log("Current Chart Height: ", currentChartHeight);
      newDomain = {
        x: [this.state.graphData[0].length + 0.5 - (letterIndex + currentChartHeight), this.state.graphData[0].length + 0.5 - letterIndex],
        y: this.state.selectedDomain.y,
      };
    }
    //New domain for Jump Down
    if (event.target.id === 'jump-down') {
      newDomain = {
        x: this.state.selectedDomain.x.map((val: number) => val - currentChartHeight),
        y: this.state.selectedDomain.y,
      };
    }
    //New domain for Jump Up
    if (event.target.id === 'jump-up') {
      newDomain = {
        x: this.state.selectedDomain.x.map((val: number) => val + currentChartHeight),
        y: this.state.selectedDomain.y,
      };
    }
    //New domain for Item count selection
    if (event.target.id === 'item-display-select') {
      newChartHeight = parseFloat(event.target.value);
      newBarWidth = calculateBarWidth(
        this.state.mainChartTheme.chart.height,
        this.state.mainChartTheme.chart.padding,
        newChartHeight,
        this.state.mainChartTheme.spaceBetweenBars
      );
      // console.log('New Bar Width: ', newBarWidth );
      newDomain = {
        x: [this.state.selectedDomain.x[0], this.state.selectedDomain.x[0] + newChartHeight],
        y: this.state.selectedDomain.y,
      };
    }

    //Don't go outside boundaries of data
    if (newDomain.x[1] > this.state.graphData[0].length || newDomain.x[0] < 0) {
      // console.log("Ooops!")
      newDomain.x = [this.state.graphData[0].length + 0.5 - newChartHeight, this.state.graphData[0].length + 0.5];
    }

    // console.log('Current domain: ', this.state.selectedDomain.x);
    // console.log('New domain: ', newDomain.x);

    //Update Domain
    this.setState({
      zoomDomain: newDomain,
      selectedDomain: newDomain,
      mainChartBarWidth: newBarWidth,
    });
  }

  render() {
    if (!this.state.graphData) {
      return null;
    }
    return (
      <>
        <PaginateSelector
          selectedLetter={this.state.selectedLetter}
          selectedItemsCount={this.state.selectedItemsCount}
          selectedDomain={this.state.selectedDomain}
          updateDomain={this.updateDomainFromSelectors}
          showNavigator={this.state.showNavigator}
        />
        <div className="msupply-horizontal-bar" style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
          <VictoryChart
            domainPadding={this.state.mainChartDomainPadding}
            theme={this.state.mainChartTheme}
            containerComponent={
              <VictoryContainer
                // allowZoom={false}
                // allowPan={false}
                responsive={true}
                // zoomDomain={this.state.selectedDomain}
                // onZoomDomainChange={this.handleZoom.bind(this)}
              />
            }
          >
            <VictoryAxis
              style={{ tickLabels: { fontSize: 10 } }}
              tickFormat={t => (t.length > 40 ? t.slice(0, 37) + '. . . ' : t)}
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
                // console.log('Rendering Main Stack...');
                // console.log(index);
                // console.log(this.state.graphData);
                // console.log(dataRows);
                return (
                  <VictoryBar
                    key={index}
                    labelComponent={
                      <VictoryTooltip
                        pointerLength={0}
                        constrainToVisibleArea
                        text={({ datum }) => this.stockLabelString(datum.x, datum.threshold, datum.y)}
                      />
                    }
                    style={{
                      data: {
                        fill: ({ datum }) => {
                          // console.log({ datum });
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
                                mutation: props => {
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
                    data={dataRows.filter(
                      (item: any, index: number) => index > this.state.selectedDomain.x[0] && index < this.state.selectedDomain.x[1]
                    )}
                  />
                );
              })}
            </VictoryStack>
          </VictoryChart>
          {this.state.graphData[0].length > this.brushDomain.minX && this.state.showNavigator && (
            <VictoryChart
              theme={this.state.navigatorChartTheme}
              containerComponent={
                <VictoryBrushContainer
                  responsive={false}
                  brushDomain={this.state.zoomDomain}
                  defaultBrushArea="disable"
                  allowResize={false}
                  brushStyle={this.state.navigatorChartTheme.chart.brushStyle}
                  handleStyle={this.state.navigatorChartTheme.chart.handleStyle}
                  onBrushDomainChange={this.handleBrush.bind(this)}
                  onBrushDomainChangeEnd={this.handleBrushEnd.bind(this)}
                />
              }
            >
              <VictoryStack>
                {this.state.graphData.map((dataRows: any, index: any) => {
                  console.log('Rendering Navigator Stack...');
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
      </>
    );
  }
}
