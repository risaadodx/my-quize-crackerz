import React from "react";
import "./Topic.css";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, logo, name, total } = topic;
  return (
    <div className="topic">
      <img
        style={{ width: "100%", backgroundColor: "blueviolet" }}
        src={logo}
        alt=""
      />
      <h2>{name}</h2>
      <div className="topic-item">
        <p>Quize: {total}</p>
        <Link className="link-btn" to={`/topic/${id}`}>
          Start
        </Link>
      </div>
    </div>
  );
};

export default Topic;
