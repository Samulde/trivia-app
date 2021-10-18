import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionPanel from "./component/QuestionPanel";
import Scoreboard from "./component/Scoreboard";
import { loadQuestions } from "./reducers/allQuestionsReducer";
import { loadCurrentQuestion } from "./reducers/currentQuestionReducer";
import SettingForm from "./component/SettingsForm";

const API_URL = 'https://opentdb.com/api.php?amount=3&category=9&difficulty=easy&type=multiple'

function App() {

  const dispatch = useDispatch()
  const questions = useSelector(state => state.allQuestions)
  const appState = useSelector(state => state.appState)

  useEffect( () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        dispatch(loadQuestions(data.results))
        dispatch(loadCurrentQuestion(data.results[0]))
      })

    }, [dispatch])

  // return <SettingForm />
  switch (appState) {
    case 'SCOREBOARD':
      return <Scoreboard />
    case 'TRIVIA':
      return questions.length > 0 
      ? <QuestionPanel /> 
      : <div className='text-3xl text-white font-bold'>Samulde makes trivia. Loading...</div>
    default:
      return <div className='text-3xl text-red-200 font-bold'>An error has occured...</div>
  }
}

export default App;
