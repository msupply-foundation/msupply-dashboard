import React, { useState } from 'react';

import { Button } from '@grafana/ui';
import { DownloadIcon } from './DownloadIcon';
import { exportPanel, searchForDashboards } from '../api';

export interface ExportButtonProps {
  dashboardId?: number;
  panelId?: number;
}

export const ExportButton = (props: ExportButtonProps) => {
  const [url, setUrl] = useState('');
  const [fileName, setFileName] = useState('');
  const [anchorRef, setAnchorRef] = useState(null as HTMLAnchorElement | null);
  const [exporting, setExporting] = useState(false);
  const { dashboardId = '', panelId = 1 } = props;

  const download = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setExporting(true);
    searchForDashboards().then(dashboards => {
      const dashboard = dashboards.find(d => d.id === dashboardId);
      if (!dashboard) {
        setExporting(false);
        return;
      }

      exportPanel(dashboard.uid, panelId).then((filename: string) => {
        setFileName(filename);
        setUrl(`/api/plugins/msupply-datasource/resources/download/${filename}`);
        anchorRef?.click();

        setExporting(false);
        setUrl('');
        setFileName('');
      });
    });
  };

  return (
    <>
      <Button onClick={download} disabled={exporting} icon={exporting ? 'fa fa-spinner' : 'download-alt'}>
        Export
        <DownloadIcon color="white" />
      </Button>
      <a style={{ display: 'none' }} download={fileName} href={url} ref={e => setAnchorRef(e)} target="_blank">
        download
      </a>
    </>
  );
};
