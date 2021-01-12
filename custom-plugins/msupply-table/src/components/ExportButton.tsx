import React, { useState } from 'react';

import { Button } from '@grafana/ui';
import { exportPanel } from '../api';

export interface ExportButtonProps {
  dashboardId?: string;
  panelId?: number;
}

export const ExportButton = (props: ExportButtonProps) => {
  const [url, setUrl] = useState('');
  const [fileName, setFileName] = useState('');
  const [anchorRef, setAnchorRef] = useState(null as HTMLAnchorElement | null);

  const download = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    exportPanel('JnP8GqTGz', 6).then((data: string) => {
      setFileName('test.xlsx');

      // Download the data as a file
      //const blob = new Blob([data]);

      /* eslint no-console: ["error", { allow: ["info", "error"] }] */
      console.info(data);
      const fileDownloadUrl = URL.createObjectURL(data);
      setUrl(fileDownloadUrl);
      anchorRef?.click();

      URL.revokeObjectURL(fileDownloadUrl); // free up storage--no longer needed.
      setUrl('');
      setFileName('');
    });
  };

  return (
    <>
      <Button onClick={download}>Export</Button>
      <a style={{ display: 'none' }} download={fileName} href={url} ref={e => setAnchorRef(e)}>
        download
      </a>
    </>
  );
};
