import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { v4 } from "uuid";
import {
  getAnswerCount,
  getQuiz,
  setAnswerCount,
  setIsEnded,
} from "../../redux/quizSlice";
import SingleOption from "../SingleOption/SingleOption.component";

const SingleQuestion = ({ currentQuestion, currentCount }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const correctCount = useSelector(getAnswerCount);
  const questions = useSelector(getQuiz);
  const [value, setValue] = useState("");
  const { question, choices } = currentQuestion;

  //** CHECK ANSWER AND NAVIGATE TO THE NEXT QUESTION  */
  const handleNext = (e) => {
    e.preventDefault();

    //** IF ANSWER IS CORRECT, INCREMENT correctCount */
    if (value === currentQuestion?.answer) {
      dispatch(setAnswerCount(correctCount + 1));
    }

    //** IF QUESTION IS THE LAST, NAVIGATE TO RESULTS PAGE */
    if (+currentCount === questions.length) {
      dispatch(setIsEnded());
      navigate("/results", { replace: true });
      return;
    }

    navigate(`/quiz/${+currentCount + 1}`, { replace: true }); //** NAVIGATE TO NEXT QUESTION */
  };

  return (
    <form className="flex flex-col gap-2">
      <p>{question}</p>
      <>
        {Object.keys(choices)?.length > 0 &&
          Object.keys(choices)?.map((option) => (
            <SingleOption
              key={v4()}
              option={option}
              choices={choices}
              handleSelection={(e) => setValue(e.target.value)}
            />
          ))}
      </>
      <button
        onClick={handleNext}
        className="bg-green-700 hover:bg-green-900 text-white font-semibold text-xl w-fit px-4 py-2 rounded-md"
      >
        Next
      </button>
    </form>
  );
};

export default SingleQuestion;
