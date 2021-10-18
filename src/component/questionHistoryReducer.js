
const questionHistoryReducer = (state = [], action) => {

  console.log(state, action)
  switch (action.type){
    case 'ADD-HISTORY':
      return state.concat(action.data)
    case 'RESET-HISTORY':
      return []
    default:
      return state
  }
}


export const addHistory = (question) => {
  return {
    type: 'ADD-HISTORY',
    data: question
  }
}


export const resetHistory = () => {
  return {
    type: 'RESET-HISTORY'
  }
}


export default questionHistoryReducer;