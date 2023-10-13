import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className: string;
}

const Header = ({ children, className }: Props) => {
  return (
    <section
      className={`block flex flex--column justify--center align--center header ${className}`}
    >
      {children}
    </section>
  );
};

export default Header;
