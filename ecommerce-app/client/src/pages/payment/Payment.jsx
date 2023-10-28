import React from "react";
import "./payment.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams, Navigate } from "react-router-dom";
import { PaymentForm } from "../../components";

const stripePromise = loadStripe(
  "pk_test_51NkPSmSBWZox5vkyySk8gRxOcVQ4y5n0cdAX669pRqTRIlJ6NrJqS38kKUFCMUxYhzSooZUXXvNUgtsjrADZ6f3E00g4DRweYp"
);

const Payment = () => {
  const { id } = useParams();

  const options = {
    clientSecret: id,
    appearance: {
      theme: "stripe",
    },
  };

  if (!id) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="payment">
      <Elements options={options} stripe={stripePromise}>
        <PaymentForm secretKey={id} />
      </Elements>
    </div>
  );
};

export default Payment;
