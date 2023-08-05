import { createBrowserRouter } from "react-router-dom";
import { PATH } from "./path";
import { Home, Login, Register } from "../pages";
import { MainLayout } from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: PATH.HOME,
        element: <Home />,
      },
    ],
  },
  {
    path: PATH.LOGIN,
    element: <Login />,
  },
  {
    path: PATH.REGISTER,
    element: <Register />,
  },
]);

export default router;
