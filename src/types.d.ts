interface IState{
    startQuiz: boolean,
    quizData: quizData[],
    currentQuiz: number,
    selectedOption: any,
    answer:boolean
}
interface startQuiz{
    type:"startQuiz",
}
interface setCurrentQuiz{
    type:"setCurrentQuiz",
}
interface previousQuiz{
    type:"previousQuiz",
}
interface answer{
    type:"answer"
}
interface setRetake{
    type:"retake"
}
interface setQuizOption{
    type:"setQuizOption",
    quizId: string,
    value: string
}
interface quizData{
    name: string,
    options: string[],
    quizId: number
}
interface allAnswer{
    [key:string]:string,
}
type quizActionsType = startQuiz | setCurrentQuiz | previousQuiz | setQuizOption | answer | setRetake;