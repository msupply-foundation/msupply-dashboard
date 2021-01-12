import { getBackendSrv } from '@grafana/runtime';

export const exportPanel = (dashboardID: string, panelID: number) => {
  const params = {
    dashboardID,
    panelID,
  };
  return getBackendSrv().post('api/plugins/msupply-datasource/resources/export-panel', params);
};
