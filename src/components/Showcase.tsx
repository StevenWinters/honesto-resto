import Button from "./Button";
import Header from "./Header";
import HeroImage from "../assets/backgrounds/earth-background.gif";

const Showcase = () => {
  return (
    <Header className="header--dark">
      <div className="flex flex--column align--center container--sm">
        <h2 className="headline">
          Embark On a Culinary Odyssey Beyond the Stars
        </h2>
        <p className="p--lg">
          Discover the wonders and mysteries of the outer space as you dine-in
          in our restaurant.
        </p>
        <img src={HeroImage} alt="" className="img header__image" />
        <Button className="btn--accent" path="/story">
          Learn More
        </Button>
      </div>
    </Header>
  );
};

export default Showcase;
