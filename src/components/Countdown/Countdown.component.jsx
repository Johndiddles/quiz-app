import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { setIsEnded } from "../../redux/quizSlice";

const CountDown = () => {
  const dispatch = useDispatch();

  const [seconds, setSeconds] = useState(90);

  useEffect(() => {
    const runTime = setTimeout(() => setSeconds((prev) => prev - 1), 1000);

    if (seconds <= 0) {
      clearTimeout(runTime);
      dispatch(setIsEnded());
    }

    return () => clearTimeout(runTime);
  }, [seconds, dispatch]);

  const formattedTime = useMemo(() => {
    let min;
    let sec;

    min = (seconds % 3600) / 60;
    sec = (seconds % 3600) % 60;

    return (
      <p className="font-bold text-6xl text-red-900 self-end">
        {parseInt(min) < 10 ? `0${parseInt(min)}` : parseInt(min)} :{" "}
        {parseInt(sec) < 10 ? `0${parseInt(sec)}` : parseInt(sec)}
      </p>
    );
  }, [seconds]);

  return <div className="timeWrapper">{formattedTime}</div>;
};

export default CountDown;
