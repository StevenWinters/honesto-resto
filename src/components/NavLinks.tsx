import { Link } from "react-router-dom";
import { navLinksData } from "../data/NavLinksData";

interface Props {
  onToggleMenu: () => void;
}

const NavLinks = ({ onToggleMenu }: Props) => {
  return (
    <ul className="flex align--center gap nav__lists">
      {navLinksData.map((link) => (
        <li key={link.id} className="nav__list">
          <Link
            to={link.path}
            className="nav__link"
            onClick={() => onToggleMenu()}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
