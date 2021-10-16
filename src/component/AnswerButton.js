import React from 'react';
import ReactHtmlParser from 'react-html-parser';


const AnswerButton = ({ answer }) => (
    
    <button className='bg-white text p-4 text-gray-600 
    font-semibold rounded shadow'>
      {ReactHtmlParser(answer)}
    </button>
) 

export default AnswerButton