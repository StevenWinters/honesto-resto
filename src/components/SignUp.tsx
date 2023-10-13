import { Link } from "react-router-dom";
import { signUpData } from "../data/FormData";
import Form from "./Form";

const SignUp = () => {
  return (
    <Form
      heading="Sign Up"
      image="https://static.independent.co.uk/2022/04/04/20/iStock-1198015422.jpg"
      alt="Asteroids Image"
      formData={signUpData}
    >
      <div className="flex justify--center align--center gap--sm input__container">
        <input type="checkbox" />
        <p>
          I agree to the{" "}
          <Link to="/terms-and-conditions">Terms and Conditions</Link>.
        </p>
      </div>
    </Form>
  );
};

export default SignUp;
