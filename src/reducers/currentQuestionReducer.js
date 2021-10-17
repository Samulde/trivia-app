const initialState = {
  currentIndex: 0,
  currentQuestion: null
}


const currentQuestionReducer = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case 'NEXT':
      return {
        ...state,
        currentIndex: state.currentIndex + 1
      }
    
    case 'LOAD':
      return {
          currentIndex: state.currentIndex,
          question: action.data.question,
          correct_answer: action.data.correct_answer,
          answers: action.data.answers
        }
  
    default:
      return state
  }
}


export const nextQuestionActionCreator = () => {
  return {
    type: 'NEXT'
  }
}

export const loadCurrentQuestion = (question) => {
  return {
    type: 'LOAD',
    data: {...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers
          ].sort(() => Math.random() - 0.5)}
  }
}



export default currentQuestionReducer;