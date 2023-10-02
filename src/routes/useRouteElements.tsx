import { Suspense } from "react";
import { LoadingModule } from "../components/Loading";
import { Navigate, Outlet, RouteObject, useRoutes } from "react-router-dom";
import protectedRoute from "./MainRoute";
import { PATH } from "./path";
import { Login, Page404, Register } from "src/pages";

const ProtectRouter = () => {
  return <Outlet />;
};

const userRoutes: RouteObject[] = [
  {
    element: <ProtectRouter />,
    children: [{ ...protectedRoute }],
  },
  {
    path: PATH.ROOT,
    element: <Navigate to={PATH.NOT_FOUND} />,
  },
  {
    path: PATH.DEFAULT,
    element: <Navigate to={PATH.HOME} />,
  },
  {
    path: PATH.NOT_FOUND,
    element: <Page404 />,
  },
  {
    path: PATH.LOGIN,
    element: <Login />,
  },
  {
    path: PATH.REGISTER,
    element: <Register />,
  },
];

export default function useRouteElements() {
  const router = useRoutes(userRoutes);

  return <Suspense fallback={<LoadingModule />}>{router}</Suspense>;
}
