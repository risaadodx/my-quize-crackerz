import React from "react";
import "./Question.css";
import { EyeIcon } from "@heroicons/react/20/solid";

const Question = ({ q }) => {
  const { question, options } = q;
  return (
    <div className="question">
      <h3>{question.slice(3, -4)}</h3>
      <EyeIcon className="eyeIcon text-blue-500" />
      {options.map((option, index) => (
        <div>
          <input type="radio" />
          {option}
        </div>
      ))}
    </div>
  );
};

export default Question;
