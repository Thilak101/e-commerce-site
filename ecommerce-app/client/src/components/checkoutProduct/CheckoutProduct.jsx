import React from "react";
import "./checkoutProduct.css";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../../slices/basketSlice";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeFromBasket(id));
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="product" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout__rating">
          {Array(rating)
            .fill()
            .map((_, index) => {
              return <span key={index}>⭐</span>;
            })}
        </div>
        <button onClick={remove}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
