import React, { useEffect, useState } from "react";
import "./orders.css";
import axios from "../../axios";
import ads from "../../assets/ads.png";
import { Order } from "../../components";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const { data } = await axios.get("/checkout/orders", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setOrders(data.orders);
    };
    getOrders();
  }, []);

  console.log(orders);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src={ads} alt="ad" className="checkout__ad" />
        {orders.length === 0 ? (
          <div>
            <h2>Your Orders is empty</h2>
            <p>You have not made any orders. First make an order.</p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Orders</h2>
            {orders.map((order, index) => {
             return <Order
                key={index}
                id={order.order_id}
                items={order.items}
                total={order.total}
                createAt={order.createdAt}
              />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
