import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/amazonLogo.png";
import axios from "../../axios";
import { useDispatch } from "react-redux";
import { handleLogin } from "../../slices/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (e) => {
    e.preventDefault();
    const response = await axios.post("/user/login", {
      email,
      password,
    });
    localStorage.setItem("token", response.data.token);

    dispatch(handleLogin(response.data.token));
    navigate("/");
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/user/signup", {
        email,
        password,
      });
      alert(response?.data?.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="login__logo" />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form action="">
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login__signInButton" onClick={login}>
            Sign In
          </button>
          <p>
            By signing-in you agree to Amazon's conditions of Use & Sale. see
            our privacy Noticy, our Cookies Notice and our Internet-Based Ads
            Notice.
          </p>
          <button className="login__registerButton" onClick={register}>
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
