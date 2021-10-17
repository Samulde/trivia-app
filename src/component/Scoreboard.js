import React from 'react';
import { useSelector } from 'react-redux';


const Scoreboard = () => {

  const state = useSelector(state => state.score)

  return (
    <h1 className='text-3xl text-white font-bold'>
      Your score is {state}.
    </h1>
  )
}


export default Scoreboard