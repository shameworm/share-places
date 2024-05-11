import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  to?: string;
  size?: string;
  inverse?: boolean;
  danger?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  to,
  inverse,
  danger,
  size,
  children,
  onClick,
  ...props
}) => {
  if (to) {
    return (
      <Link
        to={to}
        className={`button button_${size || "default"} ${
          inverse && "button_inverse"
        } ${danger && "button_danger"}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`button button_${size || "default"} ${
        inverse && "button_inverse"
      } ${danger && "button_danger"}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
