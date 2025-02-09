import { NavLink } from "react-router-dom";
import { Button } from "~/shared/ui/button";

interface NavLinksProps {
  isMobile?: boolean;
}

export function NavLinks({ isMobile = false }: NavLinksProps) {
  return (
    <ul
      className={`${
        isMobile
          ? "flex flex-col gap-4"
          : "hidden lg:flex lg:flex-row lg:items-center lg:gap-4"
      }`}
    >
      <li>
        <NavLink to="/">
          <Button variant="link">All users</Button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/1/places">
          <Button variant="link">My places</Button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/places/new">
          <Button variant="link">Add Place</Button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/auth">
          <Button variant="link">Authenticate</Button>
        </NavLink>
      </li>
      <li>
        <Button variant="outline">Logout</Button>
      </li>
    </ul>
  );
}
