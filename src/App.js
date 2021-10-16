import { useState, useEffect } from "react";
import QuestionPanel from "./component/QuestionPanel";
import Scoreboard from "./component/Scoreboard";

const API_URL = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'

function App() {

  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [endGame, setEndGame] = useState(false)
  const [showAnswers, setShowsAnswers] = useState(false)

  useEffect( () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const shuffledData = data.results.map((question) => (
          {
            ...question,
            answers: [
              question.correct_answer,
              ...question.incorrect_answers
            ].sort(()=> Math.random() - 0.5)
          }))

        setQuestions(shuffledData)
      })
    }, [])

  const handleAnswer = (answer) => {
    

    if(!showAnswers){
      if (answer === questions[currentQuestionIndex].correct_answer) {
        setScore(score + 1)
      }
    }
    setShowsAnswers(true)

  };

  const handleNextQuestion = () => {
    const newIndex = currentQuestionIndex + 1
    setCurrentQuestionIndex(newIndex)

    if (newIndex === questions.length){
      setEndGame(true)
    }

    setShowsAnswers(false)

  }

  return endGame ? <Scoreboard score={score} /> : 
      questions.length > 0 ? (
      <QuestionPanel 
        showAnswers={showAnswers}
        data={questions[currentQuestionIndex]} 
        handleAnswer={handleAnswer}
        handleNextQuestion={handleNextQuestion} />
    ) : <div className='text-3xl text-white font-bold'>Samulde makes trivia. Loading...</div>;
}

export default App;
