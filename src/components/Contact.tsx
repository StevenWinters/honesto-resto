import { contactData } from "../data/FormData";
import Form from "./Form";

const Contact = () => {
  return (
    <Form
      heading="Contact Us"
      image="https://static.independent.co.uk/2021/10/04/17/newFile-6.jpg"
      alt="Comets Image"
      formData={contactData}
    />
  );
};

export default Contact;
