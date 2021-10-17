import ReactHtmlParser from 'react-html-parser';

const initialState = {
  currentIndex: 0,
  showAnswers: false,
  question: '',
  correct_answer: '',
  answers: []
}


const currentQuestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT':
      return {
        ...state,
        currentIndex: state.currentIndex + 1
      }
    
    case 'LOAD':

      const parsedAnswers = action.data.answers
        .map((answer) => ReactHtmlParser(answer)[0])


      return {
          currentIndex: state.currentIndex,
          showAnswers: state.showAnswers,
          question: action.data.question,
          correct_answer: action.data.correct_answer,
          answers: parsedAnswers
        }
  
    case 'REVEAL-ON': 
        return {
          ...state,
          showAnswers: true
        }

    case 'REVEAL-OFF':
      return {
        ...state,
        showAnswers: false
      }    

    default:
      return state
  }
}

export const showAnswer = () => {
  return {
    type: 'REVEAL-ON'
  }
}

export const hideAnswer = () => {
  return {
    type: 'REVEAL-OFF'
  }
}

export const questionIndexIncrement = () => {
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