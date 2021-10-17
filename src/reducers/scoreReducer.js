const initialScore = 0

const scoreReducer = (state = initialScore, action) => {

  switch (action.type) {
    case 'RESET':
      return 0
    
    case 'INCREASE':
      return state + 1

    default:
      return state
  }
}


export const resetScore = () => {
  return {
    type: 'RESET'
  }
}

export const increaseScore = () => {
  return {
    type: 'INCREASE'
  }
}

export default scoreReducer;