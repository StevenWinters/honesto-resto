import { useEffect } from "react";
import SignIn from "../components/SignIn";

const SignInPage = () => {
  useEffect(() => {
    document.title = "Honesto Resto | Sign In";
  });
  return (
    <>
      <SignIn />
    </>
  );
};

export default SignInPage;
