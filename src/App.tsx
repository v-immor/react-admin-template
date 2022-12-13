import React from 'react'
import { Navigate, RouteObject, useRoutes } from 'react-router-dom'

import BaseLayout from './layouts/BaseLayout'
import Page404 from './pages/404'

import { loadable } from './components/Loadable'

const WelcomePage = loadable(React.lazy(() => import('./pages/welcome')))

const AboutPage = loadable(React.lazy(() => import('./pages/about')))
const DashboardPage = loadable(React.lazy(() => import('./pages/dashboard')))
const AnalysisPage = loadable(React.lazy(() => import('./pages/dashboard/analysis')))
const MonitorPage = loadable(React.lazy(() => import('./pages/dashboard/monitor')))
const WorksplacePage = loadable(React.lazy(() => import('./pages/worksplace')))

const LoginPage = loadable(React.lazy(() => import('./pages/login')))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        element: <Navigate to="/welcome" replace />,
        index: true,
      },
      {
        path: '/welcome',
        element: <WelcomePage />,
      },
      {
        path: '/dashboard',
        children: [
          {
            element: <DashboardPage />,
            index: true,
          },
          {
            path: '/dashboard/analysis',
            element: <AnalysisPage />,
          },
          {
            path: '/dashboard/monitor',
            element: <MonitorPage />,
          },
        ],
      },
      {
        path: '/worksplace',
        element: <WorksplacePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      { path: '*', element: <Navigate to="404" replace /> },
    ],
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: '404',
    element: <Page404 />,
  },
]

function App() {
  const appRoutes = useRoutes(routes)
  return appRoutes
}

export default App
