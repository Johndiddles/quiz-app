import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { getAnswerCount, getQuiz, getUserName } from "../../redux/quizSlice";

const Result = () => {
  const userName = useSelector(getUserName);
  const score = useSelector(getAnswerCount);
  const questions = useSelector(getQuiz);

  //** DISABLE BACK BUTTON */
  useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = function () {
      window.history.pushState(null, "", window.location.href);
    };
  }, []);

  return (
    <>
      {userName === "" ? (
        <Navigate to="/" replace={true} />
      ) : (
        <div className="flex flex-col justify-center items-center gap-16">
          <p className="text-blue-900 font-bold text-4xl">{userName}</p>
          <p className="text-2xl">
            You got{" "}
            <span className="font-bold text-green-800 text-2xl">{score}</span>{" "}
            out of{" "}
            <span className="font-bold text-green-800 text-2xl ">
              {questions?.length}
            </span>{" "}
            correctly
          </p>
          <button
            className="bg-green-700 hover:bg-green-900 py-2 px-4 rounded-md text-white font-bold"
            onClick={() => (window.location.href = "/")}
          >
            Back to home
          </button>
        </div>
      )}
    </>
  );
};

export default Result;
