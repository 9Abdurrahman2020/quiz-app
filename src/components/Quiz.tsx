import AOS from "aos";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import React from 'react';
import { setAnswer, setCurrentQuiz, setQuizOption } from '../redux/actions/quizActionTypes';
import { useAppDispatch, useAppSelector } from '../redux/store';
// ..
AOS.init();

const Quiz = () => {
    const dispatch = useAppDispatch()
    const quiz = useAppSelector((state)=> state.quizData);
    const currentQuiz = useAppSelector((state)=> state.currentQuiz);
    const filteredQuiz = quiz.filter( q => q.quizId === currentQuiz);
    
    const onSubmitHandler = (e: React.SyntheticEvent) =>{
        e.preventDefault();
        if(currentQuiz<quiz.length){
            dispatch(setCurrentQuiz())
        }
        else if(quiz.length === currentQuiz){
            dispatch(setAnswer())
        }
    }
    const optionHandler = (op:string) =>{
        dispatch(setQuizOption(op,`${currentQuiz}`))
    }
    return (
        <div style={{margin:"auto 25px"}}>
            <h3>QUESTIONS  {`${currentQuiz}/${quiz.length}`}</h3>
            <div>
                <h1>{filteredQuiz[0].name}</h1>
                <form onSubmit={ onSubmitHandler}>
                    {
                        filteredQuiz[0].options.map( (op,i) =>{
                            const delay = i+1;
                    return(
                        <div data-aos="zoom-in" data-aos-delay={`${delay*50}`} data-aos-duration={`${delay*150}`} onClick={ ()=> optionHandler(op) } key={op} className="single-option">
                            <input type="radio" name={`quizId${currentQuiz}`} id={op} required />
                            <label style={{width:"100%"}} htmlFor={op}>
                            { op }
                            </label>
                        </div>
                        )
                    })
                    }
                {
                    currentQuiz<quiz.length && <button type='submit'>Next</button>
                }
                {
                    quiz.length === currentQuiz && <button type='submit'>See Answer</button>
                }
                </form>
                            
            </div>
        </div>
    );
};

export default Quiz;