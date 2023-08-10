import { RouteObject } from "react-router-dom";
import { PATH } from "./path";
import { Home } from "../pages";
import { MainLayout } from "../layouts/MainLayout";

const protectedRoute: RouteObject = {
  element: <MainLayout />,
  children: [
    {
      path: PATH.HOME,
      element: <Home />,
    },
  ],
};

export default protectedRoute;
