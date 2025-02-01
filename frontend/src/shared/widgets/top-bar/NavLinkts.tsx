import { NavLink } from "react-router-dom";
import { Button } from "~/shared/ui/button";

export function NavLinks() {
  return (
    <ul className="flex justify-between items-center gap-4 ">
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
