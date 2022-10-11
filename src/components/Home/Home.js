import React from "react";
import Header from "../Header/Header";
import hero from "../../hero.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <h1 className="hero-title">Lern Web Development By Quize</h1>
      <img className="hero-img" src={hero} alt="" />
    </div>
  );
};

export default Home;
