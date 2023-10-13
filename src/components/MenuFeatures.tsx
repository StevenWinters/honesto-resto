import { foodQualitiesData } from "../data/FoodQualitiesData";
import Features from "./Features";

const MenuFeatures = () => {
  return (
    <Features data={foodQualitiesData} className="qualities">
      Food Qualities
    </Features>
  );
};

export default MenuFeatures;
