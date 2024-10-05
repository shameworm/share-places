import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};
const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`${className}`}>{children}</div>;
};

export default Card;
