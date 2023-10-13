import { signInData } from "../data/FormData";
import Form from "./Form";

const SignIn = () => {
  return (
    <Form
      heading="Sign In"
      image="https://cdn.hswstatic.com/gif/how-big-does-a-meteor-have-to-be-to-make-it-to-the-ground.jpg"
      alt="Meteors Image"
      formData={signInData}
    />
  );
};

export default SignIn;
