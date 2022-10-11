import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setAnswerCount, setUserName } from "../../redux/quizSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  useEffect(() => {
    dispatch(setAnswerCount(0));
  }, [dispatch]);

  const login = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("please, enter your full name");
      return;
    }
    if (name.split(" ").length < 2) {
      alert("Please, enter your full name");
      return;
    }
    dispatch(setUserName(name));
    alert(`Welcome ${name}!`);
    navigate("/quiz/1", { replace: true });
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <p className="text-3xl font-bold text-blue-900">
        Welcome to The BeaconBee School Aptitude test
      </p>
      <form className="flex flex-col gap-2 justify-center items-center py-8 px-8">
        <label htmlFor="userName">Please, enter your full name</label>
        <input
          type="text"
          className="w-64 border bg-gray-200 text-gray-700 py-2 px-4 outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={login}
          className="bg-green-700 hover:bg-green-900 duration-300 text-white text-xl font-semibold py-2 px-4 rounded-md"
        >
          Start
        </button>
      </form>
    </div>
  );
};

export default Login;
