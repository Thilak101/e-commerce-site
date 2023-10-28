import React from "react";
import "./product.css";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../slices/basketSlice";

const Product = ({ id, title, image, price, rating }) => {
  const dispatch = useDispatch();

  const addToBas = () => {
    dispatch(
      addToBasket({
        id,
        title,
        image,
        price,
        rating,
      })
    );
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => {
              return <span key={index}>⭐</span>;
            })}
        </div>
      </div>
      <img src={image} alt="product_image" />
      <button onClick={addToBas}>Add to basket</button>
    </div>
  );
};

export default Product;
