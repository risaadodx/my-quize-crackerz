import React from "react";
import { useLoaderData } from "react-router-dom";
import hero from "../../hero.jpg";
import Topic from "../Topic/Topic";
import "./Topics.css";

const Topics = () => {
  const topicsData = useLoaderData();
  const topics = topicsData.data;
  console.log(topics);
  return (
    <div>
      <div>
        <h1 className="hero-title">Lern Web Development By Quize</h1>
        <img className="hero-img" src={hero} alt="" />
      </div>
      <div className="topics">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Topics;
