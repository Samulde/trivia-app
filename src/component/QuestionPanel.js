import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import AnswerButton from './AnswerButton';


const QuestionPanel = ({ data: {question, correct_answer, incorrect_answers }}, handleAnswer) => {
  const shuffledQuestions = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5)

  return (
    <div className="container"> 
      <div className='bg-white text-gray-600 p-10 rounded-lg shadow-md text-center'>
        <h2 className='text-2xl'>
          {ReactHtmlParser(question)}
        </h2>
        
      </div>
      <div className='grid grid-cols-2 gap-6 mt-6'>
        <AnswerButton answer={shuffledQuestions[0]} onClick={handleAnswer} />
        <AnswerButton answer={shuffledQuestions[1]} onClick={handleAnswer} />
        <AnswerButton answer={shuffledQuestions[2]} onClick={handleAnswer} />
        <AnswerButton answer={shuffledQuestions[3]} onClick={handleAnswer} />
      </div>
    </div>
  )
}

export default QuestionPanel;
