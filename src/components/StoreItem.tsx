import { ModalData } from "../context/StoreContext";

const StoreItem = ({ ...item }: ModalData) => {
  return (
    <div className="flex flex--column align--center store__card">
      <img src={item.image} alt={item.alt} className="img" />
      <div className="store__description">
        <h4>{item.name}</h4>
        <div className="flex justify--between align--center store__container">
          <span>&#8369;{item.price}</span>
          <a href="https://forms.gle/v6WwZD9XCzrMsg5E6" target="_blank">
            <button className="btn btn--accent">Order</button>
          </a>
        </div>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default StoreItem;
