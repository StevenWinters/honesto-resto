import { useEffect } from "react";
import SignUp from "../components/SignUp";

const SignUpPage = () => {
  useEffect(() => {
    document.title = "Honesto Resto | Sign Up";
  });
  return (
    <>
      <SignUp />
    </>
  );
};

export default SignUpPage;
