import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

const MainNavigation: React.FC = () => {
  return (
    <MainHeader>
      <button className="w-12 h-12 bg-transparent border-none flex flex-col justify-around mr-8 cursor-pointer md:hidden">
        <span className="block w-12 h-[2.5px] bg-[#EEEEEE]"></span>
        <span className="block w-12 h-[2.5px] bg-[#EEEEEE]"></span>
        <span className="block w-12 h-[2.5px] bg-[#EEEEEE]"></span>
      </button>
      <h1 className="text-[#EEEEEE] text-3xl">
        <Link to="/">Your Places</Link>
      </h1>
      <nav className="hidden h-full md:block">
        <NavLinks />
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
