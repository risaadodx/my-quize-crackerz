import React from "react";
import "./Question.css";

const Question = ({ q }) => {
  const { question, options } = q;
  return (
    <div>
      <h3>{question.slice(3, -4)}</h3>
      <p className="options">{options}</p>
    </div>
  );
};

export default Question;
