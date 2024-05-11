import { createPortal } from "react-dom";

const Backdrop: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return createPortal(
    <div
      onClick={onClick}
      className="fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.40)] z-10"
    ></div>,
    document.getElementById("backdrop-hook")!
  );
};

export default Backdrop;
