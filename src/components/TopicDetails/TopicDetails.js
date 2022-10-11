import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const TopicDetails = () => {
  const topicData = useLoaderData();
  const topic = topicData.data;
  console.log(topic);
  return (
    <div>
      <h1>Quize of {topic.name}</h1>
      {topic.questions.map((q) => (
        <Question key={q.id} q={q}></Question>
      ))}
    </div>
  );
};

export default TopicDetails;
