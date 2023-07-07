import React from 'react'
const LazyHome = React.lazy(() => import('../pages/Home'))
const LazyDashboard = React.lazy(() => import('../pages/Dashboard'))
const LazyProjects = React.lazy(() => import('../pages/Projects'))
const LazyNotFound = React.lazy(() => import('../pages/NotFound'))

interface RouteConfig {
  path?: string
  name?: string
  Component: React.LazyExoticComponent<React.FC>
  exact?: boolean
}

const routes: RouteConfig[] = [
  {
    path: '/:page?/:postID?',
    name: 'Home',
    Component: LazyHome,
    exact: true,
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    Component: LazyDashboard,
  },
  {
    path: '/Projects',
    name: 'Projects',
    Component: LazyProjects,
  },
  { name: 'NotFound', Component: LazyNotFound },
]

export default routes
