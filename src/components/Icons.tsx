import { IconContext } from "react-icons";
import { iconLinks } from "../data/IconLinks";

const Icons = () => {
  return (
    <IconContext.Provider value={{ className: "icon" }}>
      {iconLinks.map((icon) => (
        <a key={icon.id} href={icon.path}>
          {icon.icon}
        </a>
      ))}
    </IconContext.Provider>
  );
};

export default Icons;
