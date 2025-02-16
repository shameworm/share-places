import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "./layouts/RootLayout";
import { lazy } from "react";

const UserPage = lazy(() =>
  import("~/pages/all-users").then((module) => ({
    default: module.UsersPage,
  })),
);

const CreatePlace = lazy(() =>
  import("~/pages/create-place").then((module) => ({
    default: module.CreatePlacePage,
  })),
);

const UserPlaces = lazy(() =>
  import("~/pages/user-places").then((module) => ({
    default: module.UserPlacesPage,
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
          {
            path: "/places/new",
            element: <CreatePlace />,
          },
          {
            path: "/:userId/places",
            element: <UserPlaces />,
          },
        ],
      },
    ],
  },
]);
