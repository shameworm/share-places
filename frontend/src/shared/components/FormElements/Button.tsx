import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  to?: string;
  size?: string;
  inverse?: boolean;
  type?: "button" | "submit" | "reset";
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
  type,
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
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
