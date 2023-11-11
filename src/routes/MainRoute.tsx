import { RouteObject } from "react-router-dom";
import { PATH } from "./path";
import { MainLayout } from "src/layouts/MainLayout";
import {
  Home,
  Region,
  Territory,
  Province,
  Place,
  Posts,
  PostDetail,
  PostDetailPreview,
  UploadPost,
  Profile,
} from "src/pages";
import ScrollToTop from "src/components/ScrollToTop";

export const publicRoute: RouteObject = {
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
          path: `${PATH.REGION}/:id`,
          element: <Region />,
        },
        {
          path: `${PATH.TERRITORY}/:id`,
          element: <Territory />,
        },
        {
          path: `${PATH.PROVINCE}/:id`,
          element: <Province />,
        },
        {
          path: `${PATH.PLACE}/:id`,
          element: <Place />,
        },
        {
          path: PATH.POSTS,
          element: <Posts />,
        },
        {
          path: PATH.POST_DETAIL,
          element: <PostDetail />,
        },
      ],
    },
  ],
};

export const protectedRoute: RouteObject = {
  element: <MainLayout />,
  children: [
    {
      element: <ScrollToTop />,
      children: [
        {
          path: PATH.POST_DETAIL_PREVIEW,
          element: <PostDetailPreview />,
        },
        {
          path: PATH.UPLOAD_POST,
          element: <UploadPost />,
        },
        {
          path: PATH.PROFILE,
          element: <Profile />,
        },
      ],
    },
  ],
};
