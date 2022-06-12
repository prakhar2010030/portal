import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import QuestionPannel from "./components/QuestionPannel";
import axios from "axios";
import "./Test.css";
import { useState } from "react";
const Test = () => {
  const [questions, setQuestions] = useState("no");
  useEffect(() => {
    fetchQuestion();
  }, []);
  const fetchQuestion = async () =>{
    let {data} = await axios.get("https://opentdb.com/api.php?amount=10");
    let question = data.results;
   setQuestions(question);

  // console.log(questions);
  }
  return (
    <div className="test_body">
      <QuestionPannel questions={questions} />
      <Sidebar />
    </div>
  );
};

export default Test;
