import { HashLink } from "react-router-hash-link";

interface Props {
  id: number;
  path: string;
  image: string;
  alt: string;
  name: string;
}

const Selection = ({ ...data }: Props) => {
  return (
    <HashLink
      key={data.id}
      to={data.path}
      className="flex flex--column align--center"
    >
      <img src={data.image} alt={data.alt} className="img img--circle" />
      <span className="selection__name">{data.name}</span>
    </HashLink>
  );
};

export default Selection;
