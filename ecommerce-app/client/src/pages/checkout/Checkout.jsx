import React from "react";
import "./checkout.css";
import { useSelector } from "react-redux";
import { getBasket } from "../../slices/basketSlice";
import ads from "../../assets/ads.png";
import { CheckoutProduct, Subtotal } from "../../components";

const Checkout = () => {
  const basket = useSelector(getBasket);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src={ads} alt="advertisement" />
        {basket.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>
              You have no items in your basket. To buy or more items, click "Add
              to basket" next to the item
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your shopping basket</h2>
            {basket.map((item, index) => (
              <CheckoutProduct
                key={index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
