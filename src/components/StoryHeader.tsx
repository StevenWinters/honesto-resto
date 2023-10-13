import Header from "./Header";

const StoryHeader = () => {
  return (
    <Header className="header--dark">
      <h1>Our Story</h1>
      <p className="tagline">Learn more about our food and culture.</p>
      <img
        src="https://scitechdaily.com/images/Vast-Universe-Art-Concept.jpg"
        alt="Universe Image"
        className="img header__image"
      />
    </Header>
  );
};

export default StoryHeader;
