import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router";
import CountDown from "../../components/Countdown/Countdown.component";
import SingleQuestion from "../../components/SingleQuestion/SingleQuestion.component";
import {
  getIsEnded,
  getQuiz,
  getTimeLeft,
  getUserName,
} from "../../redux/quizSlice";

const Quiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const questions = useSelector(getQuiz);
  const isEnded = useSelector(getIsEnded);
  const timeLeft = useSelector(getTimeLeft);
  const userName = useSelector(getUserName);

  //** DISABLE BACK BUTTON */
  useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = function () {
      window.history.pushState(null, "", window.location.href);
    };
  }, []);

  //** END QUIZ IF ISENDED === TRUE */
  useEffect(() => {
    if (isEnded) {
      navigate("/results", { replace: true });
    }
  }, [isEnded, timeLeft, navigate]);

  //** GET QUESTION BY COUNT */
  const currentQuestion = useMemo(() => {
    return questions.find((question) => question.id === +id);
  }, [questions, id]);

  return (
    <>
      {userName === "" ? (
        <Navigate to="/" />
      ) : (
        <>
          <CountDown />
          <div className="w-full flex flex-col p-8 gap-4">
            <p className="text-3xl font-bold text-blue-900">Question {id}</p>

            <div>
              <SingleQuestion
                currentQuestion={currentQuestion}
                currentCount={id}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Quiz;
