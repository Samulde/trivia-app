import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseScore } from '../reducers/scoreReducer';
import { questionIndexIncrement } from '../reducers/currentQuestionReducer';
import { showAnswer } from '../reducers/currentQuestionReducer';
import { addHistory } from './questionHistoryReducer';

const AnswerButton = ({ answer, textColour }) => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.currentQuestion)

  const handleAnswer = (buttonText) => {
  
    console.log(buttonText)
    console.log(state.correct_answer)

    const historyItem = {
      question: state.question,
      correctAnswer: state.correct_answer,
      answers: state.answers,
      answerClicked: buttonText
    }

    console.log(historyItem)

    if ( (buttonText === state.correct_answer) && (!state.showAnswers) ) {
      dispatch(increaseScore())
    }
  
    if (!state.showAnswers) {
      dispatch(addHistory(historyItem))
    }
    
    dispatch(showAnswer(buttonText))
    dispatch(questionIndexIncrement())
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