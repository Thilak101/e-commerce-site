import React, { useState } from "react";
import "./order.css";
import shopingCart from "../../assets/shopingCart.png";

const Order = ({ id, items, total, createAt }) => {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="order">
      <img
        src={shopingCart}
        className="order__image"
        alt="shoping cart"
      />
      <div className="order__info">
        <p className="order__title">Order Id: {id}</p>
        <p className="order__price">
          <small>₹</small>
          <strong>{total}</strong>
        </p>
        <div className="order__showProducts">
          <p>Number of product orders: {items.length}</p>
          <button onClick={() => setShowProducts((curr) => !curr)}>
            {showProducts ? "Hide All" : "Show All"}
          </button>
        </div>
        <p>
          Order At:{" "}
          <strong>{new Date(createAt).toString().slice(0, 25)}</strong>
        </p>
        {showProducts && (
          <div className="order__products">
            {items.map((item, index) => {
              return (
                <div key={index} className="order__product">
                  <img src={item.image} alt="product img" />
                  <div className="order__productTop">
                    <h4>{item.title}</h4>
                    <p>
                      <small>₹</small>
                      <strong>{item.price}</strong>
                    </p>
                    <div className="order__rating">
                      {Array(item.rating)
                        .fill()
                        .map((_, index) => {
                          return (
                            <span key={index} role="img" aria-label="rating">
                              ⭐
                            </span>
                          );
                        })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
