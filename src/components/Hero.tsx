import { IconContext } from "react-icons";
import { AiOutlineArrowRight } from "react-icons/ai";
import HeroImage from "../assets/backgrounds/honesto-background.jpg";
import Button from "./Button";
import Header from "./Header";

const Hero = () => {
  return (
    <Header className="header--dark">
      <h1>Honesto Resto</h1>
      <p className="headline">A Space-Theme Restaurant</p>
      <p className="tagline">"Basta Honesto, Ikaw ang paborito"</p>
      <img src={HeroImage} alt="" className="img header__image" />
      <div className="flex gap">
        <Button className="flex align--center btn--primary" path="/menu">
          View Menu
          <IconContext.Provider value={{ className: "icon icon--arrow-right" }}>
            <AiOutlineArrowRight size={20} />
          </IconContext.Provider>
        </Button>
        <Button className="flex align--center btn--accent" path="/sign-up">
          Sign Up
        </Button>
      </div>
    </Header>
  );
};

export default Hero;
