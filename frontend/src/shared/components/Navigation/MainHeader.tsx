import { ReactNode } from "react";

interface MainHeaderProps {
  children: ReactNode;
}

const MainHeader: React.FC<MainHeaderProps> = ({ children }) => {
  return (
    <header className="w-full h-16 flex items-center fixed top-0 left-0 bg-[#222831] shadow-sm px-4 py-0 z-[5] md:justify-between rounded-b-[0.900px]">
      {children}
    </header>
  );
};

export default MainHeader;
