import { NavLink } from "react-router-dom";
import { useAuthStore } from "~/features/auth";
import { Button } from "~/shared/ui/button";

interface NavLinksProps {
  isMobile?: boolean;
}

export function NavLinks({ isMobile = false }: NavLinksProps) {
  const buttonClass = isMobile ? "w-full " : "text-lg";
  const buttonVariant = isMobile ? "secondary" : "link";
  const { isLoggedIn, logout } = useAuthStore();

  const links = [
    { to: "/", label: "All users" },
    isLoggedIn && { to: "/u1/places", label: "My places" },
    isLoggedIn && { to: "/places/new", label: "Add Place" },
    !isLoggedIn && { to: "/auth", label: "Authenticate" },
  ].filter((link): link is { to: string; label: string } => Boolean(link));

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
      {isLoggedIn && (
        <li>
          <Button
            variant="outline"
            className={`${buttonClass}  gap-4`}
            onClick={logout}
          >
            Logout
          </Button>
        </li>
      )}
    </ul>
  );
}
