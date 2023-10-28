import React from "react";
import "./home.css";
import amazonCover from "../../assets/amazonCover.png";
import { Product } from "../../components";
import laptop from "../../assets/laptop.png";
import pant from "../../assets/pant.png";
import watch from "../../assets/watch.png";
import shirt from "../../assets/shirt.png";
import headset from "../../assets/headset.png";

const Home = () => {
  return (
    <div className="home">
      <img src={amazonCover} alt="cover" width={"100%"} className="home__image" />
      <div className="home__row">
        <Product
          id={"12345123"}
          title={"Laptop"}
          image={laptop}
          price={64000}
          rating={2}
        />
        <Product
          id={"12345127"}
          title={"Laptop"}
          image={laptop}
          price={64000}
          rating={2}
        />
        <Product
          id={"12345678"}
          title={"shirt"}
          image={shirt}
          price={600}
          rating={5}
        />
        <Product
          id={"12349121"}
          title={"pant"}
          image={pant}
          price={6400}
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id={"123458"}
          title={"shirt"}
          image={shirt}
          price={600}
          rating={5}
        />
        <Product
          id={"1349121"}
          title={"pant"}
          image={pant}
          price={6400}
          rating={4}
        />
        <Product
          id={"1284512"}
          title={"watch"}
          image={watch}
          price={698}
          rating={3}
        />
        <Product
          id={"1284593"}
          title={"headset"}
          image={headset}
          price={2000}
          rating={3}
        />
      </div>
      <div className="home__row">
        <Product
          id={"12845123"}
          title={"watch"}
          image={watch}
          price={698}
          rating={3}
        />
        <Product
          id={"12845993"}
          title={"headset"}
          image={headset}
          price={2000}
          rating={3}
        />
        <Product
          id={"12845123"}
          title={"watch"}
          image={watch}
          price={698}
          rating={3}
        />
        <Product
          id={"12845993"}
          title={"headset"}
          image={headset}
          price={2000}
          rating={3}
        />
      </div>
    </div>
  );
};

export default Home;
