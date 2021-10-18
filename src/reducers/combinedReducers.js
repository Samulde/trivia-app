
import { combineReducers } from "redux";
import allQuestionsReducer from "./allQuestionsReducer";
import appStateReducer from "./appStateReducer";
import currentQuestionReducer from "./currentQuestionReducer";
import scoreReducer from "./scoreReducer";
import questionHistoryReducer from "../component/questionHistoryReducer";

const combinedReducer = combineReducers({
  allQuestions: allQuestionsReducer,
  currentQuestion: currentQuestionReducer,
  score: scoreReducer,
  appState: appStateReducer,
  history: questionHistoryReducer
})


export default combinedReducer;