import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/Navigation/MainNavigation';

const RootLayout: React.FC = () => {
  return (
    <>
      <MainNavigation />
      <main className="mt-20">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
