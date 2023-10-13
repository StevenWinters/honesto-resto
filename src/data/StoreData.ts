import Meals1 from "../assets/banners/beef-broccoli.jpg";
import Meals2 from "../assets/banners/tuna-pasta.png";
import SideDish1 from "../assets/banners/eggplant-ensalada.jpg";
import Desserts1 from "../assets/banners/coffee-jelly.jpg";
import Beverages1 from "../assets/banners/nestea-lemon.jpg";
import Beverages2 from "../assets/banners/orange-juice.jpg";

export const selectionData = [
  {
    id: 1,
    image: Meals1,
    alt: "Meals Image",
    path: "/store#meals",
    name: "Meals",
  },
  {
    id: 2,
    image: SideDish1,
    alt: "Side Dish Image",
    path: "/store#side-dish",
    name: "Side Dish",
  },
  {
    id: 3,
    image: Desserts1,
    alt: "Desserts Image",
    path: "/store#desserts",
    name: "Desserts",
  },
  {
    id: 5,
    image: Beverages1,
    alt: "Beverages Image",
    path: "/store#beverages",
    name: "Beverages",
  },
];
export const storeData = [
  {
    id: 1,
    sectionId: "meals",
    section: "Meals",
    items: [
      {
        id: 1,
        image: Meals1,
        alt: "Beef Broccoli Image",
        price: 55,
        description:
          "This features thinly sliced beef and broccoli that is stir-fried in a savory brown sauce.",
        name: "Beef Broccoli w/ Rice",
      },
      {
        id: 2,
        image: Meals2,
        alt: "Tuna Pasta Image",
        price: 40,
        description:
          "A long, flat, pasta combined with canned tuna, which is coated with a creamy, velvety sauce.",
        name: "Tuna Pasta",
      },
    ],
  },
  {
    id: 2,
    sectionId: "side-dish",
    section: "Side Dish",
    items: [
      {
        id: 1,
        image: SideDish1,
        alt: "Eggplant Ensalada Image",
        price: 10,
        description:
          "A delicious and refreshing salad made primarily with grilled or roasted eggplants.  This is combined with ingredients of tomatoes, onions, and green or bell peppers to add color and texture.",
        name: "Eggplant Ensalada",
      },
    ],
  },
  {
    id: 3,
    sectionId: "desserts",
    section: "Desserts",
    items: [
      {
        id: 1,
        image: Desserts1,
        alt: "Coffee Jelly Image",
        price: 10,
        description:
          "A delightful dessert or beverage that combines coffee-flavored gelatin with a sweet and creamy element.  The gelatin is cut into cubes or chunks, providing a visual contrast to the creamy component.",
        name: "Coffee Jelly",
      },
    ],
  },
  {
    id: 4,
    sectionId: "beverages",
    section: "Beverages",
    items: [
      {
        id: 1,
        image: Beverages1,
        alt: "Nesta Lemon Image",
        price: 15,
        description:
          "A beverage known for its refreshing lemon flavor.  It is clear and transparent, with no visible pulp or particles.",
        name: "Ice Tea",
      },
      {
        id: 2,
        image: Beverages2,
        alt: "Orange Juice Image",
        price: 15,
        description:
          "A beverage made from the juice of freshly squezed oranges.",
        name: "Orange Juice",
      },
    ],
  },
];
