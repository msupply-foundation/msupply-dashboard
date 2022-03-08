import { DataSourcePlugin } from '@grafana/data';
import Datasource from './datasource';

import LokiCheatSheet from './components/LokiCheatSheet';
import LokiQueryEditorByApp from './components/LokiQueryEditorByApp';
import { LokiAnnotationsQueryCtrl } from './LokiAnnotationsQueryCtrl';
import { ConfigEditor } from './configuration/ConfigEditor';

export const plugin = new DataSourcePlugin(Datasource)
  .setQueryEditor(LokiQueryEditorByApp)
  .setConfigEditor(ConfigEditor)
  .setQueryEditorHelp(LokiCheatSheet)
  .setAnnotationQueryCtrl(LokiAnnotationsQueryCtrl);
