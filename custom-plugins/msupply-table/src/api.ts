import { getBackendSrv } from '@grafana/runtime';

export type DashboardMeta = {
  id: number;
  uid: string;
};

export const exportPanel = (dashboardID: string, panelID: number, query: string) => {
  const params = {
    dashboardID,
    panelID,
    query,
  };
  return getBackendSrv().post('api/plugins/msupply-datasource/resources/export-panel', params);
};

export const searchForDashboards = async (): Promise<DashboardMeta[]> => {
  return getBackendSrv().get('./api/search');
};
