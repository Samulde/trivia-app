import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetQuestions } from '../reducers/allQuestionsReducer';
import { setAppStateTrivia } from '../reducers/appStateReducer';
import { resetHistory } from './questionHistoryReducer';
import ReviewBoard from './ReviewBoard';


const Scoreboard = () => {

  const state = useSelector(state => state.score)
  const dispatch = useDispatch()

  const handleAgain = () => {
    dispatch(setAppStateTrivia())
    dispatch(resetHistory())
    dispatch(resetQuestions())

  }

  return (
    <div>
      <h1 className='text-3xl text-white font-bold'>
        Your score is {state}.
      </h1>

      <div className="grid grid-cols-3 gap-3 mt-6 shadow">
        <button className="bg-white p-4 rounded hover:underline hover:text-red-700">Review</button>
        <button className="bg-white p-4 rounded hover:underline hover:text-red-700"
          onClick={handleAgain}>
            Again
        </button>
        <button className="bg-white p-4 rounded hover:underline hover:text-red-700">Change Category</button>
      </div>
      <ReviewBoard />
    </div>

  )
}


export default Scoreboard