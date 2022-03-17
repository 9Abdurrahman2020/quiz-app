export const startQuiz = ():startQuiz =>{
    return{
        type:"startQuiz"
    }
}
export const setCurrentQuiz = ():setCurrentQuiz =>{
    return{
        type:"setCurrentQuiz"
    }
}
export const previousQuiz = ():previousQuiz =>{
    return {
        type:"previousQuiz"
    }
}
export const setQuizOption = (value:string,quizId:string):setQuizOption =>{
    return{
        type:"setQuizOption",
        quizId,
        value
    }
}
export const setAnswer = ():answer =>{
    return{
        type:"answer"
    }
}
export const setRetake = ():setRetake =>{
    return {
        type:"retake"
    }
}