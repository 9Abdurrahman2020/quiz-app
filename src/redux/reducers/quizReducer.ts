
const initialState:IState={
    startQuiz: false
}

const quizReducer = (state:IState = initialState, action:quizActionsType) =>{
    switch (action.type) {
        case "startQuiz":
        const newState = {...state}
        newState.startQuiz = true;
        return newState;
        default:
            return state;
    }
}
export default quizReducer;