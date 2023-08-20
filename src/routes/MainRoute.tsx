import { RouteObject } from "react-router-dom";
import { PATH } from "./path";
import { Home, Place, Province, Region, Territory } from "../pages";
import { MainLayout } from "../layouts/MainLayout";
import ScrollToTop from "../components/ScrollToTop";

const protectedRoute: RouteObject = {
  element: <MainLayout />,
  children: [
    {
      element: <ScrollToTop />,
      children: [
        {
          path: PATH.HOME,
          element: <Home />,
        },
        {
          path: PATH.REGION,
          element: <Region />,
        },
        {
          path: PATH.TERRITORY,
          element: <Territory />,
        },
        {
          path: PATH.PROVINCE,
          element: <Province />,
        },
        {
          path: PATH.PLACE,
          element: <Place />,
        },
      ],
    },
  ],
};

export default protectedRoute;
