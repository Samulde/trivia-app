import React from 'react';

const NextButton = ({ handleNextQuestion }) => (
  <button className={`ml-auto text-white mt-6 
    bg-blue-400 p-4 font-semibold rounded shadow`}
    onClick={handleNextQuestion}>Next Question</button>
)

export default NextButton;