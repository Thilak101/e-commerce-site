import React, { useEffect, useState } from "react";
import "./verify.css";
import loader from "../../assets/loader.gif";
import successGif from "../../assets/success.gif";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import { Link } from "react-router-dom";

const Verify = () => {
  const { token } = useParams();

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  const verifyUsr = async () => {
    try {
      const response = await axios.get(`/user/verify/${token}`);
      alert(response.data.msg);
      setSuccess(response.data.success);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    if (token) {
      verifyUsr();
    }
  }, [token]);
 
  if (loading) {
    return (
      <div className="verify__loading">
        <img src={loader} alt="" width={"100px"} />
      </div>
    );
  }

  return (
    <div className="verify">
      <h1>Verified Successfully</h1>
      <img src={successGif} alt="success" className="verified" />
      <Link to={"/login"}>
        <button>Login Now</button>
      </Link>
    </div>
  );
};

export default Verify;
