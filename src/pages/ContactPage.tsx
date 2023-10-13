import { useEffect } from "react";
import Contact from "../components/Contact";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Honesto Resto | Contact";
  });
  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;
