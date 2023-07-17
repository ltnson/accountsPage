import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginPage from './page/LoginPage';
import AccountTab, {
  loaderNew,
  loaderFilter,
  loaderFemale,
  loaderMale,
  loaderTab,
} from './page/account/AccountTab';
import AccountAdd from './page/account/AccountAdd';
import Layout from './page/Layout/Layout';
import NotFound from './page/NotFound';
import { checkAuth, checkAuthLoginPage } from './util/auth';
import HomePage from './page/HomePage';
import TodoAddEditForm from './page/todo/TodoAddEditForm';
import TodoQueryTab from './page/todo/TodoQueryTab';
import TodoQueryCartTab from './page/todo/TodoQueryCartTab';
import TodoAxiosTab from './page/todo/TodoAxiosTab';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      loader: checkAuth,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'accounts',
          children: [
            { index: true, loader: loaderNew },
            { path: 'tab', element: <AccountTab />, loader: loaderTab },
            {
              path: 'filter',
              element: <AccountTab />,
              loader: loaderFilter,
            },
            {
              path: 'male',
              element: <AccountTab />,
              loader: loaderMale,
            },
            {
              path: 'female',
              element: <AccountTab />,
              loader: loaderFemale,
            },
            { path: 'add', element: <AccountAdd /> },
            {
              path: 'edit/:idAccount',
              element: <AccountAdd />,
            },
          ],
        },
        {
          path: 'todo-query',
          children: [
            {
              index: true,
              element: <TodoQueryTab />,
            },
            { path: 'add', element: <TodoAddEditForm /> },
            { path: 'edit/:idTodoParams', element: <TodoAddEditForm /> },
          ],
        },
        {
          path: 'todo-query-cart',
          children: [{ index: true, element: <TodoQueryCartTab /> }],
        },
        {
          path: 'todo-axios',
          children: [
            { index: true, element: <TodoAxiosTab /> },
            { path: 'add', element: <TodoAddEditForm /> },
            { path: 'edit/:idTodoParams', element: <TodoAddEditForm /> },
          ],
        },
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
