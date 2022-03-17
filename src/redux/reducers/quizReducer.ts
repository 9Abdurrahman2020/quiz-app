import { quizData } from "../../data/quizData";

const initialState:IState={
    startQuiz: false,
    quizData: quizData,
    currentQuiz: 1,
    selectedOption:{},
    answer:false
}

const quizReducer = (state:IState = initialState, action:quizActionsType) =>{
    switch (action.type) {
        case "startQuiz":
        {
            const newState = {...state}
            newState.startQuiz = true;
            return newState;
        }
        case "setCurrentQuiz":
        {
            const newState = {...state}
            newState.currentQuiz = state.currentQuiz + 1;
            return newState;
        }
        case "previousQuiz":
        {
            const newState = {...state}
            newState.currentQuiz = state.currentQuiz - 1;
            return newState;
        }
        case "setQuizOption":
        {
            const newState = {...state}
            newState.selectedOption[`quiz${action.quizId}`] = action.value;
            const selectedOption = newState.selectedOption;
            window.localStorage.setItem('quizSelectedOptions',JSON.stringify(selectedOption))
            return newState;
        }
        case "answer":
        {
            const newState = {...state};
            newState.answer = true;
            newState.startQuiz = false
            return newState;
        }
        case "retake":
        {
            const newState = {...initialState};
            newState.startQuiz = true
            window.localStorage.setItem('quizSelectedOptions','')
            return newState;
        }
        
        default:
            return state;
    }
}
export default quizReducer;