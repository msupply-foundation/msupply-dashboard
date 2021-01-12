import React, { Component } from 'react';

import { Select } from '@grafana/ui';
import {
  DataFrame,
  DataQuery,
  DataQueryRequest,
  FieldMatcherID,
  getFrameDisplayName,
  PanelProps,
  SelectableValue,
} from '@grafana/data';
import { Options } from './types';
import { css } from 'emotion';
import { config } from '@grafana/runtime';
import { TableSortByFieldState } from '@grafana/ui';
import { ExportButton, Table } from './components';

interface Props extends PanelProps<Options> {}

export class TablePanel extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  onColumnResize = (fieldDisplayName: string, width: number) => {
    const { fieldConfig } = this.props;
    const { overrides } = fieldConfig;

    const matcherId = FieldMatcherID.byName;
    const propId = 'custom.width';

    // look for existing override
    const override = overrides.find(o => o.matcher.id === matcherId && o.matcher.options === fieldDisplayName);

    if (override) {
      // look for existing property
      const property = override.properties.find(prop => prop.id === propId);
      if (property) {
        property.value = width;
      } else {
        override.properties.push({ id: propId, value: width });
      }
    } else {
      overrides.push({
        matcher: { id: matcherId, options: fieldDisplayName },
        properties: [{ id: propId, value: width }],
      });
    }

    this.props.onFieldConfigChange({
      ...fieldConfig,
      overrides,
    });
  };

  onSortByChange = (sortBy: TableSortByFieldState[]) => {
    this.props.onOptionsChange({
      ...this.props.options,
      sortBy,
    });
  };

  onChangeTableSelection = (val: SelectableValue<number>) => {
    this.props.onOptionsChange({
      ...this.props.options,
      frameIndex: val.value || 0,
    });

    // Force a redraw -- but no need to re-query
    this.forceUpdate();
  };

  renderTable(frame: DataFrame, width: number, height: number, request?: DataQueryRequest<DataQuery>) {
    const { options } = this.props;

    return (
      <div>
        <Table
          height={height}
          width={width}
          data={frame}
          noHeader={!options.showHeader}
          resizable={true}
          initialSortBy={options.sortBy}
          onSortByChange={this.onSortByChange}
          onColumnResize={this.onColumnResize}
        />
        {options.showExport && (
          <div className={tableStyles.buttonWrapper}>
            <ExportButton
              dashboardId={request?.dashboardId}
              options={options}
              panelId={request?.panelId}
              query={frame.meta?.executedQueryString}
            />
          </div>
        )}
      </div>
    );
  }

  getCurrentFrameIndex() {
    const { data, options } = this.props;
    const count = data.series?.length;
    return options.frameIndex > 0 && options.frameIndex < count ? options.frameIndex : 0;
  }

  render() {
    const { data, height, options, width } = this.props;
    const count = data.series?.length;
    const hasFields = data.series[0]?.fields.length;

    if (!count || !hasFields) {
      return <div>No data</div>;
    }

    if (count > 1) {
      const inputHeight = config.theme.spacing.formInputHeight;
      const padding = options.showExport ? 8 * 2 : 46;
      const currentIndex = this.getCurrentFrameIndex();
      const names = data.series.map((frame, index) => {
        return {
          label: getFrameDisplayName(frame),
          value: index,
        };
      });

      return (
        <div className={tableStyles.wrapper}>
          {this.renderTable(data.series[currentIndex], width, height - inputHeight - padding, data.request)}
          <div className={tableStyles.selectWrapper}>
            <Select options={names} value={names[currentIndex]} onChange={this.onChangeTableSelection} />
          </div>
        </div>
      );
    }

    const tableHeight = height - (options.showExport ? 42 : 12);

    return this.renderTable(data.series[0], width, tableHeight, data.request);
  }
}

const tableStyles = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  `,
  buttonWrapper: css`
    padding-right: 10px;
    text-align: right;
    width: 100%;
  `,
  selectWrapper: css`
    padding: 8px;
  `,
};
