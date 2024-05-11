import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};
const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`relative m-0 shadow rounded-2xl overflow-hidden bg-white ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
