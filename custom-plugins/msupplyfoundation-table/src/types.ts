export interface Options {
  headerText?: string;
  subHeaderText?: string;
  exportTitle?: string;
}

export type FieldTextAlignment = 'auto' | 'left' | 'right' | 'center';

/** Per-column settings exposed under field Overrides. */
export interface CustomFieldConfig {
  width?: number;
  align?: FieldTextAlignment;
  displayMode?: string;
}
