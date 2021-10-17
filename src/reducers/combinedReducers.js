
import { combineReducers } from "redux";
import allQuestionsReducer from "./allQuestionsReducer";
import currentQuestionReducer from "./currentQuestionReducer";

const combinedReducer = combineReducers({
  allQuestions: allQuestionsReducer,
  currentQuestion: currentQuestionReducer
})


export default combinedReducer;