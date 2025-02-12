import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "./layouts/RootLayout";
import { lazy } from "react";

const UserPage = lazy(() =>
  import("~/pages/all-users").then((module) => ({
    default: module.UsersPage,
  })),
);

const ErrorPage = lazy(() =>
  import("~/pages/error").then((module) => ({
    default: module.ErrorPage,
  })),
);

export const router = createBrowserRouter([
  {
    id: "root",
    errorElement: <ErrorPage />,
    children: [
      {
        element: <RootLayout />,
        children: [
          {
            index: true,
            element: <UserPage />,
          },
        ],
      },
    ],
  },
]);
