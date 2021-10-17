const allQuestionsReducer = (state = [], action) => {

  switch (action.type) {
    case 'LOAD_ALL':
      console.log(action.data)
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