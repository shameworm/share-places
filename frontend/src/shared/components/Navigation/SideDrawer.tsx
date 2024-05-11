import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { Transition } from "@headlessui/react";

interface SideDrawerProps {
  children: ReactNode;
  isOpen: boolean;
  onClick: () => void;
}
const SideDrawer: React.FC<SideDrawerProps> = ({
  children,
  isOpen,
  onClick,
}) => {
  return createPortal(
    <Transition
      show={isOpen}
      enter="transition-transform ease-in-out duration-500"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transition-transform ease-in-out duration-500"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      <aside
        className="fixed left-0 top-0 z-[100] h-screen w-3/4 bg-[#10141a] shadow-sm"
      >
        <span onClick={onClick}>{children}</span>
      </aside>
    </Transition>,
    document.getElementById("drawer-hook")!
  );
};

export default SideDrawer;
