import { Link } from "react-router-dom";
import { navLinksData } from "../data/NavLinksData";

interface Props {
  toggleMenu: boolean;
  onToggleMenu: () => void;
}

const NavSideBar = ({ toggleMenu, onToggleMenu }: Props) => {
  return (
    <aside className={`nav__sidebar ${toggleMenu && "active"}`}>
      <div className="flex flex--column justify--between sidebar__container">
        <ul>
          {navLinksData.map((link) => (
            <li key={link.id}>
              <Link to={link.path} onClick={() => onToggleMenu()}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <Link to="/sign-in" onClick={() => onToggleMenu()}>
            <button className="btn btn--primary btn--scale">Sign In</button>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default NavSideBar;
