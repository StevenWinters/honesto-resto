import Header from "./Header";

const StoreHeader = () => {
  return (
    <Header className="header--dark store__header">
      <h1>Store</h1>
      <img
        src="https://wallpapers.com/images/featured/solar-system-c688izfbh9p16x9z.jpg"
        alt="Solar System Header Image"
        className="img header__image"
      />
    </Header>
  );
};

export default StoreHeader;
