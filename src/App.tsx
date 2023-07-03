import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginPage from './page/LoginPage';
import AccountTab, {
  loaderFilter,
  loaderPartner,
  loaderVinova,
  loaderTab,
} from './page/AccountTab';
import AccountAdd from './page/AccountAdd';
import Layout from './page/Layout/Layout';
import NotFound from './page/NotFound';
import { checkAuth, checkAuthLoginPage } from './util/auth';
import AccountTabTable from './components/account/account-tab/AccountTabTable';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      loader: checkAuth,
      children: [
        { index: true, element: <AccountTab /> },
        {
          path: 'accounts',
          element: <AccountTab />,
          children: [
            { index: true, element: <AccountTabTable /> },
            { path: 'tab', element: <AccountTabTable />, loader: loaderTab },
            {
              path: 'filter',
              element: <AccountTabTable />,
              loader: loaderFilter,
            },
            {
              path: 'vinova',
              element: <AccountTabTable />,
              loader: loaderVinova,
            },
            {
              path: 'partner',
              element: <AccountTabTable />,
              loader: loaderPartner,
            },
          ],
        },
        { path: 'accounts/add', element: <AccountAdd /> },
        { path: 'accounts/edit/:idAccount', element: <AccountAdd /> },
      ],
    },
    { path: '/login', element: <LoginPage />, loader: checkAuthLoginPage },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
