import { useState, useEffect } from "react";
import QuestionPanel from "./component/QuestionPanel";
import Scoreboard from "./component/Scoreboard";

const API_URL = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'

function App() {

  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [endGame, setEndGame] = useState(false)

  useEffect( () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {setQuestions(data.results)})
  }, [])


  const handleAnswer = (answer) => {
    const newIndex = currentQuestionIndex + 1
    setCurrentQuestionIndex(newIndex)

    if (answer === questions[currentQuestionIndex].correct_answer) {
      setScore(score + 1)
    }

    if (newIndex === questions.length){
      setEndGame(true)
    }
  };

  return endGame ? <Scoreboard score={score} /> : 
      questions.length > 0 ? (
      <QuestionPanel 
        data={questions[currentQuestionIndex]} 
        handleAnswer={handleAnswer} />

    ) : <div className='text-3xl text-white font-bold'>Loading...</div>;
}

export default App;
