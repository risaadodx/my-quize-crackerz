import React from "react";
import "./Question.css";
import { EyeIcon } from "@heroicons/react/20/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Question = ({ q }) => {
  const { question, options, correctAnswer } = q;
  const notify = () => toast(correctAnswer);
  return (
    <div className="question">
      <h3>{question.slice(3, -4)}</h3>
      <EyeIcon onClick={notify} className="eyeIcon text-blue-500" />
      <ToastContainer />
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
