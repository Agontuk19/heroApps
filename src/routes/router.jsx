import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/root/Root';
import Home from '../pages/Home/Home';
import AllApps from '../pages/AllApps/AllApps';
import AppDetails from '../pages/AppDetails/AppDetails';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import InstallApps from '../pages/InstallApps/InstallApps';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            path: '/',
            Component: Home
        },
        {
            path: '/allApps',
            Component: AllApps
        },
        {
          path: '/appDetails/:id',
          loader: () => fetch('/apps.json'),
          Component: AppDetails
        },
        {
          path: '/installApps',
          loader: () => fetch('/apps.json'),
          Component: InstallApps
        },
        {
          path: '*',
          Component: ErrorPage
        }
    ]
  }
]);

export default router;