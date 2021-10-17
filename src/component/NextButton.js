import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCurrentQuestion } from '../reducers/currentQuestionReducer';
import { hideAnswer } from '../reducers/currentQuestionReducer';
import { setAppStateScoreboard } from '../reducers/appStateReducer';
const NextButton = () => {

  const dispatch = useDispatch()
  const questions = useSelector(state => state.allQuestions)
  const currentIndex = useSelector(state => state.currentQuestion.currentIndex)

  const handleNextQuestion = () => {

    if (currentIndex >= questions.length) {
      dispatch(setAppStateScoreboard())
    } else {
      dispatch(loadCurrentQuestion(questions[currentIndex]))
      dispatch(hideAnswer())
    }
  }

  return (
    <button className={`ml-auto text-white mt-6 
    bg-blue-400 p-4 font-semibold rounded shadow`}
    onClick={handleNextQuestion}>Next Question</button>
  )
}

export default NextButton;