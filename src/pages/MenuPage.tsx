import { useEffect } from "react";
import Menu from "../components/Menu";
import MenuFeatures from "../components/MenuFeatures";
import MenuHeader from "../components/MenuHeader";

const MenuPage = () => {
  useEffect(() => {
    document.title = "Honesto Resto | Menu";
  });
  return (
    <>
      <MenuHeader />
      <Menu />
      <MenuFeatures />
    </>
  );
};

export default MenuPage;
