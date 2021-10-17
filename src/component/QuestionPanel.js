import React from 'react'
import AnswerButton from './AnswerButton';
import NextButton from "./NextButton";
import { useSelector } from 'react-redux';

const QuestionPanel = () => {
    
  const state = useSelector(state => state.currentQuestion)

  return (
    <div className="flex flex-col"> 
      <div className='bg-white text-gray-600 p-10 rounded-lg shadow-md text-center'>
        <h2 className='text-2xl'>
          {state.question}
        </h2>
        
      </div>
      <div className='grid grid-cols-2 gap-6 mt-6'>
        {state.answers.map((choice, idx) => {
          const textColour = state.showAnswers 
            ? choice === state.correct_answer 
              ? 'text-green-500' 
              : 'text-red-500'
            : 'text-gray-600'


          return(
            <AnswerButton key={idx} answer={choice} 
              textColour={textColour}/>)}
          )
        }
        </div>
        {state.showAnswers && <NextButton />}
    </div>
  )
}

export default QuestionPanel;
