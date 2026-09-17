import { PanelPlugin } from '@grafana/data';
import { TableCellDisplayMode } from '@grafana/ui';
import { TablePanel } from './components/TablePanel';
import { CustomFieldConfig, Options } from './types';

export const plugin = new PanelPlugin<Options, CustomFieldConfig>(TablePanel)
  // Opts the panel into Grafana's standard field config, which is what provides
  // Standard options (unit, decimals, min/max), Value mappings, Thresholds and
  // per-field Overrides in the options pane. Without this the pane only shows
  // the panel options below.
  .useFieldConfig({
    useCustomConfig: (builder) => {
      builder
        .addNumberInput({
          path: 'width',
          name: 'Column width',
          settings: {
            placeholder: 'auto',
            min: 20,
            max: 300,
          },
          shouldApply: () => true,
        })
        .addRadio({
          path: 'align',
          name: 'Column alignment',
          settings: {
            options: [
              { label: 'auto', value: null },
              { label: 'left', value: 'left' },
              { label: 'center', value: 'center' },
              { label: 'right', value: 'right' },
            ],
          },
          defaultValue: null,
        })
        .addSelect({
          path: 'displayMode',
          name: 'Cell display mode',
          description: 'Color text, background, show as gauge, etc',
          settings: {
            options: [
              { value: TableCellDisplayMode.Auto, label: 'Auto' },
              { value: TableCellDisplayMode.ColorText, label: 'Color text' },
              { value: TableCellDisplayMode.ColorBackground, label: 'Color background' },
              { value: TableCellDisplayMode.Gauge, label: 'Gauge' },
              { value: TableCellDisplayMode.JSONView, label: 'JSON View' },
              { value: TableCellDisplayMode.Image, label: 'Image' },
            ],
          },
        });
    },
  })
  .setPanelOptions((builder) =>
    builder
      .addTextInput({
        path: 'headerText',
        name: 'Excel Header',
        defaultValue: 'My Report',
      })
      .addTextInput({
        path: 'subHeaderText',
        name: 'Sub Header',
        defaultValue: '',
      })
      .addTextInput({
        path: 'exportTitle',
        name: 'Export button title',
        description: 'The title of the export button, so it can be translated',
        defaultValue: 'Export Excel',
      })
  );
