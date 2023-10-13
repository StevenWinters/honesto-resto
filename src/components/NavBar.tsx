import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "./Button";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavSideBar from "./NavSideBar";
import { IconContext } from "react-icons";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrollToggle, setScrollToggle] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleScroll(e));
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollToggle]);

  const handleScroll = (e: any) => {
    const window = e.currentTarget;
    if (window.scrollY >= 1) return setScrollToggle(true);
    setScrollToggle(false);
  };

  return (
    <header>
      <nav
        className={`flex justify--between align--center nav__bar ${
          scrollToggle && "active"
        }`}
      >
        <div className="flex align--center gap nav__container">
          <Logo />
          <NavLinks onToggleMenu={() => setToggleMenu(!toggleMenu)} />
        </div>
        <div className="flex align--center gap nav__container">
          <Link to="/sign-in" className="link--sign-in">
            Sign In
          </Link>
          <Button className="btn--outline" path="/sign-up">
            Sign Up
          </Button>
        </div>
        {toggleMenu ? (
          <span
            className="nav__close"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <IconContext.Provider value={{ className: "icon" }}>
              <AiOutlineClose size={25} />
            </IconContext.Provider>
          </span>
        ) : (
          <HamburgerMenu onToggleMenu={() => setToggleMenu(!toggleMenu)} />
        )}
        <NavSideBar
          toggleMenu={toggleMenu}
          onToggleMenu={() => setToggleMenu(!toggleMenu)}
        />
      </nav>
    </header>
  );
};

export default NavBar;
