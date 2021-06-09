import { getBackendSrv } from '@grafana/runtime';

export type DashboardMeta = {
  id: number;
  uid: string;
};

export const exportPanel = (dashboardID: string, panelID: number, query: string, title: string) => {
  const params = {
    dashboardID,
    panelID,
    query,
    title,
  };
  return getBackendSrv().post('api/plugins/msupplyfoundation-datasource/resources/export-panel', params);
};

export const searchForDashboards = async (): Promise<DashboardMeta[]> => {
  return getBackendSrv().get('./api/search');
};
