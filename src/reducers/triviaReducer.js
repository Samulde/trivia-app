const triviaReducer = (state = [2], action ) => {
    console.log(action)
    switch (action.type) {
      case 'SUBMIT':
        return [action.data]
      default:
        console.log('I am here')
    }
}

export const submitAnswer = ( someText ) => {

  return {
    type: 'SUBMIT',
    data: someText 
  }
}

export default triviaReducer