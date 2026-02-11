import { PanelPlugin } from '@grafana/data';
import { TablePanel } from './components/TablePanel';

export const plugin = new PanelPlugin(TablePanel).setPanelOptions(builder =>
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
);
