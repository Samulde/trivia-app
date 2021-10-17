import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import AnswerButton from './AnswerButton';
import NextButton from "./NextButton";
import { useSelector, useDispatch } from 'react-redux';
import { nextQuestionActionCreator } from '../reducers/currentQuestionReducer';


const QuestionPanel = ({ data: {question, correct_answer, answers }, 
    handleAnswer, showAnswers, handleNextQuestion}) => {
    
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  const testStore = (event) => {
    console.log(event)
    dispatch(nextQuestionActionCreator())
    console.log('This button is working')

  }

  return (
    <div className="flex flex-col"> 
      <div className='bg-white text-gray-600 p-10 rounded-lg shadow-md text-center'>
        <h2 className='text-2xl'>
          {ReactHtmlParser(question)}
        </h2>
        
      </div>
      <div className='grid grid-cols-2 gap-6 mt-6'>
        {answers.map((choice, idx) => {
          const textColour = showAnswers 
            ? choice === correct_answer 
              ? 'text-green-500' 
              : 'text-red-500'
            : 'text-gray-600'


          return(
            <AnswerButton key={idx} answer={choice} handleAnswer={handleAnswer} 
              textColour={textColour}/>)}
          )
        }
        </div>
        {showAnswers && <NextButton handleNextQuestion={handleNextQuestion}/>}
        <button onClick={testStore}>I exist to do nothing</button>
    </div>
  )
}

export default QuestionPanel;
