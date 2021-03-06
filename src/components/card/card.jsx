// redux
import { useDispatch } from "react-redux";
import { addFood, showModal, modalCard } from "../../store/item/item-action";

import "./card.css";


export default function CardItem({ label, image, calories, totalWeight, totalTime, ingredients, ingredientLines}) {

  const item = { label, image, calories, totalWeight, totalTime, ingredients, ingredientLines };
  const dispatch = useDispatch();

  const getDatesOpenModal = () => {
    dispatch(modalCard({...item}))
    dispatch(showModal(true))
  }

  return (
    <div className="card">
      <div className="products_info">
        <div onClick={() => dispatch(modalCard({...item}))}>
          <div className="card_img" onClick={() => dispatch(showModal(true))}>
            <img src={image} alt="product-image" />
          </div>
        </div>
        <div className="card_label">
          <h3>{label}</h3>
        </div>
        <div className="card_text_price">
          <div className="card_product_text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, soluta. Maiores, inventore. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="card_product_prices">
            <p>{new Intl.NumberFormat('en-US', {style: 'decimal'}).format(totalWeight.toFixed(2)/10)} sum</p>
            <button onClick={getDatesOpenModal}>Select</button>
          </div>
        </div>
      </div>
    </div>
  );
}