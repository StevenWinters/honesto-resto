interface Props {
  onToggleMenu: () => void;
}

const HamburgerMenu = ({ onToggleMenu }: Props) => {
  return (
    <div className="hamburger__menu" onClick={() => onToggleMenu()}>
      <span className="hamburger__bar"></span>
      <span className="hamburger__bar"></span>
      <span className="hamburger__bar"></span>
    </div>
  );
};

export default HamburgerMenu;
