import { HashLink } from "react-router-hash-link";
import { menuData } from "../data/MenuData";

const Menu = () => {
  return (
    <section className="block block--dark flex flex--wrap justify--center align--center gap--lg">
      {menuData.map((data) => (
        <HashLink key={data.id} to={data.path} className="menu__container">
          <img src={data.image} alt={data.alt} className="img img--500" />
          <div className="flex justify--center align--center menu__overlay">
            <h2>{data.name}</h2>
          </div>
        </HashLink>
      ))}
    </section>
  );
};

export default Menu;
