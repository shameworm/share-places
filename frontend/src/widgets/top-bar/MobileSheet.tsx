import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "~/shared/ui/sheet";
import { NavLinks } from "./NavLinks";
import { Logo } from "~/shared/ui/logo";

export function MobileSheet() {
  const hamburger = (
    <div className="flex w-10 cursor-pointer flex-col gap-3 text-3xl text-primary lg:hidden">
      {[1, 2, 3].map((item) => (
        <div className="h-1 w-full rounded-sm bg-primary" key={item} />
      ))}
    </div>
  );

  return (
    <Sheet>
      <SheetTrigger>{hamburger}</SheetTrigger>
      <SheetContent side="right">
        <SheetHeader className="text-left my-8">
          <Logo />
        </SheetHeader>
        <NavLinks isMobile />
      </SheetContent>
    </Sheet>
  );
}
