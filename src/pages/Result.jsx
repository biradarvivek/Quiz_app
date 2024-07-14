import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";
import ClearIcon from "@mui/icons-material/Clear";

const Result = ({ name, score }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  return (
    <>
      <div className="bg-white border-2 border-gray-300 shadow-lg rounded-lg w-full md:w-1/2 lg:w-1/3 flex items-center flex-col mx-auto md:mx-0 md:ml-40 mt-5 text-center p-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal">Result</h1>
        <div className="m-7">
          <img
            className="w-24 md:w-32 lg:w-40"
            src="https://static-00.iconduck.com/assets.00/slightly-smiling-face-emoji-emoji-2048x2048-00r9o7wl.png"
            alt="emoji"
          />
        </div>
        <div className="text-xl md:text-2xl lg:text-3xl">Your Score</div>
        <div className="text-lg md:text-xl lg:text-2xl mb-5">{score}/10</div>
        <div className="text-lg md:text-xl lg:text-2xl flex items-center justify-center gap-2">
          <CheckTwoToneIcon />
          Correct Answers: {score}
        </div>
        <div className="text-lg md:text-xl lg:text-2xl flex items-center justify-center gap-2 mb-7">
          <ClearIcon /> Incorrect Answers: {10 - score}
        </div>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          className="mt-5"
          href="/"
        >
          Go to Home
        </Button>
      </div>
    </>
  );
};

export default Result;
