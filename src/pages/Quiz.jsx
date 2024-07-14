import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import Question from "../components/Question";

const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [questions, currQues]);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  if (!questions || questions.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress color="inherit" size={150} thickness={1} />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center md:items-start ">
        <span className=" text-3xl font-bold border-2 border-blue-400 shadow-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-2 px-4 mx-5 rounded-lg transform transition duration-500 hover:scale-105">
          Welcome, {name}
        </span>
        {questions ? (
          <>
            <div className="w-full flex flex-col justify-between uppercase m-[10px] md:flex-row justify-center items-center">
              <span className="p-3">{questions[currQues].category}</span>
              <span className=" bg-orange-400 border-2 py-4 px-8 m-5 rounded-lg text-white">
                Score : {score}
              </span>
            </div>

            <div className=" m-auto">
              <Question
                currQues={currQues}
                setCurrQues={setCurrQues}
                questions={questions}
                options={options}
                correct={questions[currQues]?.correct_answer}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            </div>
          </>
        ) : (
          <CircularProgress
            className="m-[100]"
            color="inherit"
            size={150}
            thickness={1}
          />
        )}
      </div>
    </>
  );
};

export default Quiz;
