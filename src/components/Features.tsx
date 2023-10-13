interface Data {
  id: number;
  heading: string;
  description: string;
  image: string;
  alt: string;
}

interface Props {
  children: string;
  className?: string;
  data: Data[];
}

const Features = ({ children, className, data }: Props) => {
  return (
    <section className={`block block--dark features ${className}`}>
      <div className="container">
        <h2>{children}</h2>
        {data.map((feature) => (
          <article
            key={feature.id}
            className="grid grid--1x2 grid--center align--center feature__container"
          >
            <div className="feature__description">
              <h3>{feature.heading}</h3>
              <p>{feature.description}</p>
            </div>
            <div className="flex justify--center align--center feature__image">
              <img src={feature.image} alt={feature.alt} className="img" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Features;
