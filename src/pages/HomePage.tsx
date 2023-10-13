import { useEffect } from "react";
import Hero from "../components/Hero";
import RestoFeatures from "../components/RestoFeatures";
import Showcase from "../components/Showcase";
import Facts from "../components/Facts";
import { homeFactsData } from "../data/FactsData";

const HomePage = () => {
  useEffect(() => {
    document.title = "Honesto Resto | A Space-Theme Restaurant";
  });
  return (
    <>
      <Hero />
      <RestoFeatures />
      <Showcase />
      <Facts factsData={homeFactsData} />
    </>
  );
};

export default HomePage;
