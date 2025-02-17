import { Logo } from "~/shared/ui/logo";
import { MobileSheet } from "./MobileSheet";
import { NavLinks } from "./NavLinks";

export function TopBarWidget() {
  return (
    <header className="flex items-center justify-between">
      <span className="text-sm md:text-xl">
        <Logo />
      </span>
      <nav className="flex flex-row items-center justify-between gap-2 md:gap-4">
        <NavLinks />
        <MobileSheet />
      </nav>
    </header>
  );
}
