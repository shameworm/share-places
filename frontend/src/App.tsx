import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import RootLayout from './shared/pages/Root';
import ErrorPage from './shared/pages/Error';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';

import { useSelector } from 'react-redux';
import { RootState } from './shared/store/index';

const App: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const protectedRoutes = [
    {
      path: 'places/new',
      element: <NewPlace />,
    },
    {
      path: 'places/:placeId',
      element: <UpdatePlace />,
    },
  ];

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Users /> },
        {
          path: ':userId/places',
          element: <UserPlaces />,
        },
        {
          path: '/auth',
          element: <Auth />,
        },
        isLoggedIn ? protectedRoutes[0] && protectedRoutes[1] : {},
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
