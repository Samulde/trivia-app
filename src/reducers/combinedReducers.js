
import { combineReducers } from "redux";
import allQuestionsReducer from "./allQuestionsReducer";
import appStateReducer from "./appStateReducer";
import currentQuestionReducer from "./currentQuestionReducer";
import scoreReducer from "./scoreReducer";

const combinedReducer = combineReducers({
  allQuestions: allQuestionsReducer,
  currentQuestion: currentQuestionReducer,
  score: scoreReducer,
  appState: appStateReducer
})


export default combinedReducer;