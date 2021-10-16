import React from 'react';
import ReactHtmlParser from 'react-html-parser';


const AnswerButton = ({ answer, handleAnswer, textColour }) => {

  return (
    <button className={`bg-white text p-4 ${textColour} 
    font-semibold rounded shadow`}
    onClick={() => {handleAnswer(answer)}}>
      {ReactHtmlParser(answer)}
    </button>
  )
}

export default AnswerButton