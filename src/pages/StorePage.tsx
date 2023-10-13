import { useEffect } from "react";
import Store from "../components/Store";
import StoreHeader from "../components/StoreHeader";

const StorePage = () => {
  useEffect(() => {
    document.title = "Honesto Resto | Store";
  });
  return (
    <>
      <StoreHeader />
      <Store />
    </>
  );
};

export default StorePage;
