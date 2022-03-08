import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { locationService } from '@grafana/runtime';
import { configureStore } from 'app/store/configureStore';
import TestProvider from '../../../../test/helpers/TestProvider';
import { NavBarNext } from './NavBarNext';

jest.mock('app/core/services/context_srv', () => ({
  contextSrv: {
    sidemenu: true,
    user: {},
    isSignedIn: false,
    isGrafanaAdmin: false,
    isEditor: false,
    hasEditPermissionFolders: false,
  },
}));

const setup = () => {
  const store = configureStore();

  return render(
    <Provider store={store}>
      <TestProvider>
        <Router history={locationService.getHistory()}>
          <NavBarNext />
        </Router>
      </TestProvider>
    </Provider>
  );
};

describe('Render', () => {
  it('should render component', async () => {
    setup();
    const sidemenu = await screen.findByTestId('sidemenu');
    expect(sidemenu).toBeInTheDocument();
  });

  it('should not render when in kiosk mode', async () => {
    setup();

    locationService.partial({ kiosk: 'full' });
    const sidemenu = screen.queryByTestId('sidemenu');
    expect(sidemenu).not.toBeInTheDocument();
  });
});
