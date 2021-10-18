const allQuestionsReducer = (state = [], action) => {

  switch (action.type) {
    case 'LOAD_ALL':
      return action.data
    case 'RESET-QUESTIONS':
      return state = []
    default:
      return state
  }
}

export const resetQuestions = () => {
  return {
    type: 'RESET-QUESTIONS'
  }
}

export const loadQuestions = questions => {
  return {
    type: 'LOAD_ALL',
    data: questions
  }
}

export default allQuestionsReducer;