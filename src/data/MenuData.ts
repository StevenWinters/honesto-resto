import Meals from "../assets/banners/beef-broccoli.jpg";
import SideDish from "../assets/banners/eggplant-ensalada.jpg";
import Desserts from "../assets/banners/coffee-jelly.jpg";
import Beverages from "../assets/banners/nestea-lemon.jpg";

export const menuData = [
  {
    id: 1,
    image: Meals,
    alt: "Meals Image",
    path: "/store#meals",
    name: "Meals",
  },
  {
    id: 2,
    image: SideDish,
    alt: "Side Dish Image",
    path: "/store#side-dish",
    name: "Side Dish",
  },
  {
    id: 3,
    image: Desserts,
    alt: "Desserts Image",
    path: "/store#desserts",
    name: "Desserts",
  },
  {
    id: 4,
    image: Beverages,
    alt: "Beverages Image",
    path: "/store#beverages",
    name: "Beverages",
  },
];
