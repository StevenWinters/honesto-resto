interface FactsData {
  id: number;
  heading: string;
  description: string;
  image: string;
  alt: string;
}

interface Props {
  factsData: FactsData[];
}

const Facts = ({ factsData }: Props) => {
  return (
    <div className="block block--dark">
      <h2>Fun Facts</h2>
      <div className="grid grid--1x2 grid--center container">
        {factsData.map((data) => (
          <article
            key={data.id}
            className="flex flex--column justify--center align--center box box--bold facts"
          >
            <h3>{data.heading}</h3>
            <img src={data.image} alt={data.alt} className="img img--350" />
            <p>{data.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Facts;
