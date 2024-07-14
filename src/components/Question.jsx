import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return "bg-gradient-to-r from-pink-500 to-purple-500 text-white";
    } else if (selected === i && selected !== correct) {
      return "bg-red-500 text-white";
    } else if (i === correct) {
      return "bg-green-500 text-white";
    }
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currQues > 8) {
      navigate("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else {
      toast.error("Please select an option first");
    }
  };

  const handleQuit = () => {};

  return (
    <div className="w-full flex flex-col items-center my-3">
      <div className="relative w-[95%] min-h-[350px] flex flex-col items-center justify-around bg-white rounded-2xl p-8 shadow-lg">
        <h1 className="absolute -top-8 w-14 h-14 flex items-center justify-center rounded-full p-3 bg-white text-center">
          {currQues + 1}
        </h1>
        <h2 className="text-xl font-bold mb-4 text-center">
          {questions[currQues].question}
        </h2>
        <div className="w-full flex flex-wrap flex-1 items-center justify-around m-[10px]">
          {options &&
            options.map((i) => (
              <button
                onClick={() => handleCheck(i)}
                className={`w-full md:w-[46%] h-[50px] mb-4 py-[15px] px-[20px] m-[5px] border border-gray-300 rounded-lg focus:outline-none ${
                  selected && handleSelect(i)
                }`}
                key={i}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="flex w-full flex-col md:flex-row items-center gap-2 md:justify-center">
          <Button
            style={{ width: 185 }}
            variant="contained"
            color="secondary"
            size="large"
            href="/"
            onClick={handleQuit}
          >
            Quit
          </Button>
          <Button
            style={{ width: 185 }}
            variant="contained"
            color="primary"
            size="large"
            onClick={handleNext}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
