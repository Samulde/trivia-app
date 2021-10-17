const initialState = 'TRIVIA'

const appStateReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'CHANGE-STATE':
      return action.data
    default:
      return state
  }
}

export const setAppStateTrivia = () => {
  return {
      type: 'CHANGE-STATE',
      data: 'TRIVIA'
  }
}

export const setAppStateScoreboard = () => {
  return {
    type: 'CHANGE-STATE',
    data: 'SCOREBOARD'
  }
}


export default appStateReducer;