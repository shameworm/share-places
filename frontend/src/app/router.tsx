import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "./layouts/RootLayout";
import { lazy } from "react";

const UserPage = lazy(() =>
  import("~/pages/all-users/ui/UsersPage").then((module) => ({
    default: module.UsersPage,
  })),
);

export const router = createBrowserRouter([
  {
    id: "root",
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
