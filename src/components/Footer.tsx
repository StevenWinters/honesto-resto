import { Link } from "react-router-dom";
import Button from "./Button";
import { footerData } from "../data/FooterData";
import Icons from "./Icons";

const Footer = () => {
  return (
    <footer>
      <div className="block block--dark">
        <div className="container">
          <div className="flex justify--between align--center footer__container">
            <h4>Honesto Resto</h4>
            <Button className="btn--outline" path="/sign-up">
              Sign Up
            </Button>
          </div>
          <div className="grid grid--1x4 grid--center container--sm">
            {footerData.map((data) => (
              <div
                key={data.id}
                className="flex flex--column footer__container"
              >
                <h4>{data.heading}</h4>
                <ul>
                  {data.children.map((item) => (
                    <li key={item.id}>
                      <Link to={item.path}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex justify--center align--center gap">
            <Icons />
          </div>
        </div>
      </div>
      <div className="flex justify--center align--center sub__footer">
        <p>Copyright &copy; 2023. Powered by the PWU ICT/HE/ABM Students.</p>
      </div>
    </footer>
  );
};

export default Footer;
