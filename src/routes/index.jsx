import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';
// import PageNotFound from '../pages/page-not-found';

// import DashboardLayout from 'src/layouts/dashboard';

// export const IndexPage = lazy(() => import('src/pages/app'));
// export const BlogPage = lazy(() => import('src/pages/blog'));
// export const UserPage = lazy(() => import('src/pages/user'));
export const Login = lazy(() => import('../pages/login'));
// export const ProductsPage = lazy(() => import('src/pages/products'));
export const PageNotFound = lazy(() => import('../pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
const routes = useRoutes([
    {
        path: '/',
        element: <Login />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/404',
      element: <PageNotFound />,
    }
  ]);

  return routes;
}
