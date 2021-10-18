import React from 'react';
import greenTick from '../img/green_tick.png'
import redCross from '../img/red_cross.png'
const ReviewCard = ({ review }) => {

  console.log(review)
  return (
    <div className="bg-white flex mt-6 p-4 rounded-lg shadow">
      <div className="mr-4">
        <p className="font-bold">
          {review.question}
        </p>

        <p className="mt-2">
          You guessed: {review.answerClicked} <br />
          Correct answer: {review.correctAnswer}
        </p>
      </div>

      {review.correctAnswer === review.answerClicked 
      ? <img src={greenTick} alt="A green tick for a correct answer"
          className="obtain-contain w-10 h-10 ml-auto"/>
      : <img src={redCross} alt="A red cross because you wrong" 
          className="obtain-contain w-10 h-10 ml-auto" />
      }
      
    </div>
  )
}

export default ReviewCard;