import { PanelPlugin } from '@grafana/ui';
import { SimpleOptions, defaults } from './types';
import { HorizontalBar } from './HorizontalBar';
import { HorizontalBarEdit } from './HorizontalBarEdit';

export const plugin = new PanelPlugin<SimpleOptions>(HorizontalBar).setDefaults(defaults).setEditor(HorizontalBarEdit);
