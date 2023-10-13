import { theoryData } from "../data/TheoryData";

const Theory = () => {
  return (
    <section className="block block--bold">
      <h2>Theories About The Universe</h2>
      <div className="grid grid--1x3 grid--center gap">
        {theoryData.map((data) => (
          <article
            key={data.id}
            className="flex flex--column align--center box theory"
          >
            <h3>{data.heading}</h3>
            <img src={data.image} alt={data.alt} className="img img--500" />
            <p>{data.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Theory;
