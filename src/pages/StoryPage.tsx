import { useEffect } from "react";
import Facts from "../components/Facts";
import Story from "../components/Story";
import StoryHeader from "../components/StoryHeader";
import { storyFactsData } from "../data/FactsData";
import Theory from "../components/Theory";

const StoryPage = () => {
  useEffect(() => {
    document.title = "Honesto Resto | Story";
  });
  return (
    <>
      <StoryHeader />
      <Story />
      <Theory />
      <Facts factsData={storyFactsData} />
    </>
  );
};

export default StoryPage;
