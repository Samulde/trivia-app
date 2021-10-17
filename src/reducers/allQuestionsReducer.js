const allQuestionsReducer = (state = [], action) => {

  switch (action.type) {
    case 'LOAD_ALL':
      return action.data
    default:
      return state
  }
}


export const loadQuestions = questions => {
  return {
    type: 'LOAD_ALL',
    data: questions
  }
}

export default allQuestionsReducer;