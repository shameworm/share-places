import { NavLinks } from "./NavLinkts";

export function TopBarWidget() {
  //   const hamburger = (
  //     <div className="flex w-10 cursor-pointer flex-col gap-3 text-3xl text-primary">
  //       {[1, 2, 3].map((item) => (
  //         <div className="h-1 w-full rounded-sm bg-primary" key={item} />
  //       ))}
  //     </div>
  //   );

  return (
    <header className="flex items-center justify-between">
      <span className="text-xl">Your Places</span>
      <nav className="flex flex-row items-center justify-between gap-2 md:gap-4">
        <NavLinks />
      </nav>
    </header>
  );
}
