import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseScore } from '../reducers/scoreReducer';
import { questionIndexIncrement } from '../reducers/currentQuestionReducer';
import { showAnswer } from '../reducers/currentQuestionReducer';


const AnswerButton = ({ answer, textColour }) => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.currentQuestion)

  const handleAnswer = (buttonText) => {
  
    console.log(buttonText)
    console.log(state.correct_answer)

    if ( buttonText === state.correct_answer ) {
      dispatch(increaseScore())
    }
  
    dispatch(showAnswer(buttonText))
    dispatch(questionIndexIncrement())
    console.log(buttonText)
  }

  return (
    <button className={`bg-white text p-4 ${textColour} 
    font-semibold rounded shadow`}
    onClick={() => {handleAnswer(answer)}}>
      {answer}
    </button>
  )
}

export default AnswerButton