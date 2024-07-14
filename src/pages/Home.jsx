import React, { useState } from "react";
import { Button, MenuItem, TextField } from "@mui/material";
import Categories from "../Data/Categories";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      toast.error("Please fill in all fields.");
      return;
    }

    fetchQuestions(category, difficulty);
    navigate("/quiz");
  };

  return (
    <>
      <div className="flex justify-start flex-col-reverse items-center md:flex-row md:items-stretch">
        <div className="w-full md:w-[45%] pt-[20px] flex flex-col items-center font-normal">
          <span className="font-medium text-3xl">Quiz Settings</span>
          <div className="flex flex-col p-[20px] w-full gap-5 flex-[0.8] justify-evenly">
            <TextField
              onChange={(e) => setName(e.target.value)}
              label="Enter Your Name"
              variant="outlined"
            />
            <TextField
              select
              label="Select Category"
              variant="outlined"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              {Categories.map((cat) => (
                <MenuItem key={cat.value} value={cat.value}>
                  {cat.category}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              select
              label="Select Difficulty"
              variant="outlined"
              onChange={(e) => setDifficulty(e.target.value)}
              value={difficulty}
            >
              <MenuItem key="easy" value="easy">
                Easy
              </MenuItem>
              <MenuItem key="medium" value="medium">
                Medium
              </MenuItem>
              <MenuItem key="hard" value="hard">
                Hard
              </MenuItem>
            </TextField>

            <Button
              onClick={handleSubmit}
              variant="contained"
              color="secondary"
              size="large"
            >
              Start Quiz
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
