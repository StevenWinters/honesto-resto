import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  className: string;
  path: string;
}

const Button = ({ children, className, path }: Props) => {
  return (
    <Link to={path} className="flex">
      <button className={`btn ${className}`}>{children}</button>
    </Link>
  );
};

export default Button;
