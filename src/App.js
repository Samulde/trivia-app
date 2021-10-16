import { useState, useEffect } from "react";
import QuestionPanel from "./component/QuestionPanel";

const API_URL = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'

function App() {

  const [questions, setQuestions] = useState([])

  useEffect( () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {setQuestions(data.results)})
  }, [])


  const handleAnswer = (answer) => {
    console.log('Test')
  };

  return questions.length > 0 ? (
    <QuestionPanel data={questions[0]} handleAnswer={handleAnswer}/>
  ) : <div className='text-3xl text-white font-bold'>Loading...</div>;
}

export default App;
