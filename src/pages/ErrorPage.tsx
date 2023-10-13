import { useEffect } from "react";
import Button from "../components/Button";

const ErrorPage = () => {
  useEffect(() => {
    document.title = "Honesto Resto | Error";
  });
  return (
    <section className="flex flex--column justify--center align--center block error">
      <h1>404</h1>
      <p className="headline">Page Not Found</p>
      <p className="p--lg">
        The page you might be looking for may be renamed, removed, or may have
        never been existed on this planet.
      </p>

      <Button className="btn--primary" path="/">
        Go Back To Home
      </Button>
    </section>
  );
};

export default ErrorPage;
