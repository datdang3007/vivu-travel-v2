import { Suspense } from "react";
import { LoadingModule } from "../components/Loading";
import { Outlet, RouteObject, useRoutes } from "react-router-dom";
import protectedRoute from "./MainRoute";
import { PATH } from "./path";
import { Login, Register } from "../pages";

const ProtectRouter = () => {
  return <Outlet />;
};

const userRoutes: RouteObject[] = [
  {
    element: <ProtectRouter />,
    children: [{ ...protectedRoute }],
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
