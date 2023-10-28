import React, { useEffect, useState } from "react";
import "./subtotal.css";
import { useSelector } from "react-redux";
import { getBasket } from "../../slices/basketSlice";
import * as CurrencyFormate from "react-currency-format";
import axios from "../../axios";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const Subtotal = () => {
  const navigate = useNavigate();
  const basket = useSelector(getBasket);
  const [basketTotal, setBasketTotal] = useState(0);

  useEffect(() => {
    const getBasketTotal = () => {
      setBasketTotal(basket.reduce((amount, item) => item.price + amount, 0));
    };
    getBasketTotal();
  }, [basket]);

  const handleCheckout = async () => {
    try {
      const response = await axios.post(
        "/checkout/create-payment-intent",
        {
          total: basketTotal,
          items: basket[0],
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      navigate(`/pay/${response.data.clientSecret}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="subtotal">
      <CurrencyFormate
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} item): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={basketTotal}
        displayType="text"
        thousandSeparator={true}
        prefix="₹"
      />
      <button onClick={handleCheckout}>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
