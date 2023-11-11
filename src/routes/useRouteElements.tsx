import { Suspense } from "react";
import { Navigate, Outlet, RouteObject, useRoutes } from "react-router-dom";
import { Login, Page404, SignUp } from "src/pages";
import { LoadingModule } from "../components/Loading";
import { protectedRoute, publicRoute } from "./MainRoute";
import { PATH } from "./path";
import { LOCAL_STORAGE } from "src/constants/local_storage";

const PublicRouter = () => {
  return <Outlet />;
};

const ProtectRouter = () => {
  const role = localStorage.getItem(LOCAL_STORAGE.UserRole);
  console.log(role);
  if (!role) {
    return <Navigate to={PATH.NOT_FOUND} />;
  }
  return <Outlet />;
};

const userRoutes: RouteObject[] = [
  {
    element: <PublicRouter />,
    children: [{ ...publicRoute }],
  },
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
    element: <SignUp />,
  },
];

export default function useRouteElements() {
  const router = useRoutes(userRoutes);
  return <Suspense fallback={<LoadingModule />}>{router}</Suspense>;
}
