import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};
const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="relative m-0 shadow rounded-md p-0 overflow-hidden bg-white">
      {children}
    </div>
  );
};

export default Card;
