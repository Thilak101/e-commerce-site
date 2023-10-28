import React, { useEffect } from "react";
import "./header.css";
import {
  LocalGasStationRounded,
  Search,
  ShoppingBasket,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser, handleLogin, logout } from "../../slices/userSlice";
import amazonLogo from "../../assets/amazonLogo.png";
import { useNavigate } from "react-router-dom";
import { getBasket } from "../../slices/basketSlice";

const Header = () => {
  const user = useSelector(getUser);
  const basket = useSelector(getBasket);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token && !user) {
      dispatch(handleLogin(token));
    }
  }, []);

  const login = () => {
    if (user) {
      dispatch(logout());
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="header">
      <Link to={"/"}>
        <img className="header__logo" src={amazonLogo} alt="logo" />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <Search className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div className="header__option" onClick={login}>
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to={"/orders"} className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to={"/"} class="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to={"/checkout"} className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
