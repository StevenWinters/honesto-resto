import { useEffect } from "react";
import Statistics from "../components/Statistics";

const StatisticsPage = () => {
  useEffect(() => {
    document.title = "Honesto Resto | Statistics";
  });
  return (
    <>
      <Statistics />
    </>
  );
};

export default StatisticsPage;
