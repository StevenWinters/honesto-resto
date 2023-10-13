import { ReactNode } from "react";
import Button from "./Button";

interface FormData {
  id: number;
  label: string;
  name: string;
  inputType: string;
}

interface Props {
  heading: string;
  image: string;
  alt: string;
  formData: FormData[];
  children?: ReactNode;
}

const Form = ({ heading, image, alt, formData, children }: Props) => {
  return (
    <section className="block flex justify--center align--center form">
      <img src={image} alt={alt} className="img" />
      <div className="container">
        <form className="form__container">
          <h4>{heading}</h4>
          {formData.map((data) => (
            <div key={data.id} className="input__container">
              <label htmlFor={data.name}>{data.label}</label>
              <input
                type={data.inputType}
                id={data.name}
                className="input input--outline"
              />
            </div>
          ))}
          {children}
          <div className="flex justify--center align--center input__container">
            <Button className="btn--accent" path="/">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
