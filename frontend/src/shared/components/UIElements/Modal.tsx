import { Transition } from "@headlessui/react";
import { useEffect, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";

import Backdrop from "./Backdrop";

const Modal: React.FC<{
  children: ReactNode;
  onClose: () => void;
  show: boolean;
}> = ({ children, onClose, show }) => {
  const dialog = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const modal = dialog.current;
    if (modal) modal.showModal();

    return () => {
      if (modal) modal.close();
    };
  }, []);

  return createPortal(
    <Transition
      show={show}
      enter="transition-opacity ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-in duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <dialog className="modal" ref={dialog} onClose={onClose}>
        <Backdrop onClick={onClose} />
        {children}
      </dialog>
    </Transition>,
    document.getElementById("modal-hook")!,
  );
};

export default Modal;
