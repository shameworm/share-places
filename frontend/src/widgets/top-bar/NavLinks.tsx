import { NavLink } from "react-router-dom";
import { useAuthStore } from "~/features/auth";
import { Button } from "~/shared/ui/button";
import { SheetClose } from "~/shared/ui/sheet";

interface NavLinksProps {
  isMobile?: boolean;
}

export function NavLinks({ isMobile = false }: NavLinksProps) {
  const { userId, token, logout } = useAuthStore();
  const buttonClass = isMobile ? "w-full " : "text-lg";
  const buttonVariant = isMobile ? "secondary" : "link";

  const links = [
    { to: "/", label: "All users" },
    userId && token && { to: `/${userId}/places`, label: "My places" },
    userId && token && { to: "/places/new", label: "Add Place" },
    !userId && !token && { to: "/auth", label: "Authenticate" },
  ].filter((link): link is { to: string; label: string } => Boolean(link));

  return (
    <ul
      className={`${
        isMobile
          ? "flex flex-col gap-4"
          : "hidden lg:flex lg:flex-row lg:items-center lg:gap-4"
      }`}
    >
      {links.map(({ to, label }) => {
        const button = (
          <Button variant={buttonVariant} className={`${buttonClass} gap-4`}>
            {label}
          </Button>
        );

        return (
          <li key={to}>
            <NavLink to={to}>
              {isMobile ? <SheetClose asChild>{button}</SheetClose> : button}
            </NavLink>
          </li>
        );
      })}
      {userId && token && (
        <li>
          {isMobile ? (
            <SheetClose asChild>
              <Button
                variant="outline"
                className={`${buttonClass} gap-4`}
                onClick={logout}
              >
                Logout
              </Button>
            </SheetClose>
          ) : (
            <Button
              variant="outline"
              className={`${buttonClass} gap-4`}
              onClick={logout}
            >
              Logout
            </Button>
          )}
        </li>
      )}
    </ul>
  );
}
