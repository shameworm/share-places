import { NavLink } from "react-router-dom";
import { Button } from "~/shared/ui/button";

interface NavLinksProps {
  isMobile?: boolean;
}

export function NavLinks({ isMobile = false }: NavLinksProps) {
  const buttonClass = isMobile ? "w-full " : "text-lg";
  const buttonVariant = isMobile ? "secondary" : "link";

  const links = [
    { to: "/", label: "All users" },
    { to: "/1/places", label: "My places" },
    { to: "/places/new", label: "Add Place" },
    { to: "/auth", label: "Authenticate" },
  ];

  return (
    <ul
      className={`${
        isMobile
          ? "flex flex-col gap-4"
          : "hidden lg:flex lg:flex-row lg:items-center lg:gap-4"
      }`}
    >
      {links.map(({ to, label }) => (
        <li key={to}>
          <NavLink to={to}>
            <Button variant={buttonVariant} className={`${buttonClass} gap-4`}>
              {label}
            </Button>
          </NavLink>
        </li>
      ))}
      <li>
        <Button variant="outline" className={`${buttonClass}  gap-4`}>
          Logout
        </Button>
      </li>
    </ul>
  );
}
