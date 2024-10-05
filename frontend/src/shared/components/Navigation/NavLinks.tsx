import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { RootState } from '../../store';
import { authActions } from '../../store/authSlice';

const NavLinks: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <ul className="m-0 p-0 w-full h-full bg-transparent border-none flex flex-col justify-center items-center mr-8 cursor-pointer md:flex-row">
      <li className="m-4 md:my-0 md:mx-2">
        <NavLink
          to="/"
          className={(navData) =>
            `border-2 border-solid border-transparent py-2 px-4 hover:bg-[#31363F] hover:border-[#76ABAE] hover:rounded-full  hover:text-white duration-200 ${
              navData.isActive
                ? 'bg-[#76ABAE] border-[#76ABAE] rounded-full text-[#31363F]'
                : 'text-[#EEEEEE]'
            } `
          }
        >
          All Users
        </NavLink>
      </li>
      {isLoggedIn && (
        <li className="m-4 md:my-0 md:mx-2">
          <NavLink
            to="/u1/places"
            className={(navData) =>
              `border-2 border-solid border-transparent py-2 px-4 hover:bg-[#31363F] hover:border-[#76ABAE] hover:rounded-full  hover:text-white duration-200 ${
                navData.isActive
                  ? 'bg-[#76ABAE] border-[#76ABAE] rounded-full text-[#31363F]'
                  : 'text-[#EEEEEE]'
              } `
            }
          >
            My Places
          </NavLink>
        </li>
      )}
      {isLoggedIn && (
        <li className="m-4 md:my-0 md:mx-2">
          <NavLink
            to="/places/new"
            className={(navData) =>
              `border-2 border-solid border-transparent py-2 px-4 hover:bg-[#31363F] hover:border-[#76ABAE] hover:rounded-full  hover:text-white duration-200 ${
                navData.isActive
                  ? 'bg-[#76ABAE] border-[#76ABAE] rounded-full text-[#31363F]'
                  : 'text-[#EEEEEE]'
              } `
            }
          >
            New Place
          </NavLink>
        </li>
      )}
      {isLoggedIn && (
        <li className="m-4 md:my-0 md:mx-2">
          <NavLink
            to="../"
            onClick={handleLogout}
            className={`border-2 border-solid border-transparent py-2 px-4 hover:bg-[#31363F] hover:border-[#76ABAE] text-white duration-200`}
          >
            Logout
          </NavLink>
        </li>
      )}
      {!isLoggedIn && (
        <li className="m-4 md:my-0 md:mx-2">
          <NavLink
            to="/auth?mode=login"
            className={(navData) =>
              `border-2 border-solid border-transparent py-2 px-4 hover:bg-[#31363F] hover:border-[#76ABAE] hover:rounded-full  hover:text-white duration-200 ${
                navData.isActive
                  ? 'bg-[#76ABAE] border-[#76ABAE] rounded-full text-[#31363F]'
                  : 'text-[#EEEEEE]'
              } `
            }
          >
            Authenticate
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
