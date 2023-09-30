import { RouteObject } from "react-router-dom";
import { PATH } from "./path";
import {
  Home,
  Place,
  PostDetail,
  PostDetailPreview,
  Posts,
  Province,
  Region,
  Territory,
  UploadPost,
} from "@/pages";
import { MainLayout } from "@/layouts/MainLayout";
import ScrollToTop from "@/components/ScrollToTop";

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
        {
          path: PATH.POSTS,
          element: <Posts />,
        },
        {
          path: PATH.POST_DETAIL,
          element: <PostDetail />,
        },
        {
          path: PATH.POST_DETAIL_PREVIEW,
          element: <PostDetailPreview />,
        },
        {
          path: PATH.UPLOAD_POST,
          element: <UploadPost />,
        },
      ],
    },
  ],
};

export default protectedRoute;
