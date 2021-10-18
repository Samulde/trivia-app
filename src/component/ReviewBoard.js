import React from 'react';
import { useSelector } from 'react-redux';
import ReviewCard from './ReviewCard';

const ReviewBoard = () => {
  // const dispatch = useDispatch()
  const history = useSelector(state => state.history)

  console.log(history)
  return (
    history.map((review, idx) => <ReviewCard review={review} key={idx}/>)
  )
}

export default ReviewBoard;