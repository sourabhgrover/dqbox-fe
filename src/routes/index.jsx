import { lazy, Suspense } from "react";
import { Outlet, Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";
import ConnectionForm from "../components/Settings/Connections/ConnectionForm";

export const Login = lazy(() => import("../pages/login"));
export const Home = lazy(() => import("../pages/home"));
export const SetTargets = lazy(() => import("../pages/SetTargets"));
export const Settings = lazy(() => import("../pages/Settings"));
export const ControlFlow = lazy(() => import("../pages/ControlFlow"));
export const PageNotFound = lazy(() => import("../pages/page-not-found"));


export default function Router() {
  const routes = useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
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
        { path: 'settings', element: <Settings /> },
        { path: 'set-targets', element: <SetTargets /> },
        { path: 'control-flow', element: <ControlFlow /> },
        { path: 'connection', element: <ConnectionForm /> },
      ],
    },
    {
      path: "/404",
      element: <PageNotFound />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
