import React, { useState } from 'react';

import { Button } from '@grafana/ui';
import { exportPanel, searchForDashboards } from '../api';

export interface ExportButtonProps {
  dashboardId?: number;
  options?: any;
  panelId?: number;
  query?: string;
}

export const ExportButton = (props: ExportButtonProps) => {
  const [url, setUrl] = useState('');
  const [fileName, setFileName] = useState('');
  const [anchorRef, setAnchorRef] = useState(null as HTMLAnchorElement | null);
  const [exporting, setExporting] = useState(false);
  const { options = {}, dashboardId = '', panelId = 1, query = '' } = props;
  const { exportTitle } = options;

  const handleError = () => {
    setExporting(false);
  };

  const download = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setExporting(true);
    searchForDashboards().then(dashboards => {
      const dashboard = dashboards.find(d => d.id === dashboardId);
      if (!dashboard) {
        setExporting(false);
        return;
      }

      exportPanel(dashboard.uid, panelId, query).then((filename: string) => {
        setFileName(filename);
        setUrl(`/api/plugins/msupply-datasource/resources/download/${filename}`);
        anchorRef?.click();

        setExporting(false);
        setUrl('');
        setFileName('');
      }, handleError);
    }, handleError);
  };

  return (
    <>
      <Button onClick={download} disabled={exporting} icon={exporting ? 'fa fa-spinner' : 'cloud-download'}>
        {exportTitle}
      </Button>
      <a style={{ display: 'none' }} download={fileName} href={url} ref={e => setAnchorRef(e)} target="_blank">
        download
      </a>
    </>
  );
};
