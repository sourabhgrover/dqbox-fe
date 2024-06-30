import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from '../layouts/dashboard';
// import PageNotFound from '../pages/page-not-found';

// import DashboardLayout from 'src/layouts/dashboard';

// export const IndexPage = lazy(() => import('src/pages/app'));
// export const BlogPage = lazy(() => import('src/pages/blog'));
// export const UserPage = lazy(() => import('src/pages/user'));
export const Login = lazy(() => import('../pages/login'));
// export const Dashboard = lazy(() => import('../pages/Dashboard'));
export const Home = lazy(() => import('../pages/home'));
// export const ProductsPage = lazy(() => import('src/pages/products'));
export const PageNotFound = lazy(() => import('../pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
const routes = useRoutes([
    // {
    //     path: '/',
    //     element: <Login />,
    // },
    {
      path: '/login',
      element: <Login />,
    },
  //   {
  //     path: '/dashboard',
  //     // element: <Dashboard />,
  //     element: <DashboardLayout />,
  // },
  {
    element: (
      <DashboardLayout>
        <Suspense>
          <Outlet />
        </Suspense>
      </DashboardLayout>
    ),
    children: [
      { element: <Home />, index: true },
      // { path: 'user', element: <UserPage /> },
      // { path: 'products', element: <ProductsPage /> },
      // { path: 'blog', element: <BlogPage /> },
    ],
  },
    {
      path: '/404',
      element: <PageNotFound />,
    },
    {
      path: '*',
      element: <PageNotFound />,
    }
  ]);

  return routes;
}
