import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
