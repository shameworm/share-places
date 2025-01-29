import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "./layouts/RootLayout";

export const router = createBrowserRouter([
  {
    id: "root",
    children: [
      {
        element: <RootLayout />,
      },
    ],
  },
]);
