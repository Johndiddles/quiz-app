import { createSlice } from "@reduxjs/toolkit";
import quiz from "../data/quiz.json";
const initialState = {
  userName: "",
  quiz,
  questionCount: 1,
  answerCount: 0,
  isEnded: false,
  timeLeft: 30,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setUserName: {
      reducer(state, action) {
        state.userName = action.payload;
      },
      prepare(userName) {
        return {
          payload: userName,
        };
      },
    },
    setQuestionCount: {
      reducer(state, action) {
        state.questionCount = action.payload;
      },
      prepare(userName) {
        return {
          payload: userName,
        };
      },
    },
    setAnswerCount: {
      reducer(state, action) {
        state.answerCount = action.payload;
      },
      prepare(userName) {
        return {
          payload: userName,
        };
      },
    },
    setIsEnded: {
      reducer(state, action) {
        state.isEnded = true;
      },
      prepare(isEnded) {
        return {
          payload: isEnded,
        };
      },
    },
    setTimeLeft: {
      reducer(state, action) {
        state.timeLeft = action.payload;
      },
      prepare(timeLeft) {
        return {
          payload: timeLeft,
        };
      },
    },
  },
});

export const {
  setAnswerCount,
  setUserName,
  setQuestionCount,
  setIsEnded,
  setTimeLeft,
} = quizSlice.actions;

export const getQuiz = (state) => state.quiz.quiz;
export const getUserName = (state) => state.quiz.userName;
export const getAnswerCount = (state) => state.quiz.answerCount;
export const getQuestionCount = (state) => state.quiz.questionCount;
export const getIsEnded = (state) => state.quiz.isEnded;
export const getTimeLeft = (state) => state.quiz.timeLeft;

export default quizSlice.reducer;
