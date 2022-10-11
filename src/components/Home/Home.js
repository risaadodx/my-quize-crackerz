import React from "react";
import Topics from "../Topics/Topics";
import hero from "../../hero.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <h1 className="hero-title">Lern Web Development By Quize</h1>
      <img className="hero-img" src={hero} alt="" />
    </div>
  );
};

export default Home;
