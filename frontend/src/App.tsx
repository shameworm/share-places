import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import RootLayout from "./shared/pages/Root";
import ErrorPage from "./shared/pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Users /> },
      {
        path: "places/new",
        element: <NewPlace />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
