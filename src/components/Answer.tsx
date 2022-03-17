import React from 'react';
import { rightAnswer } from '../data/rightAns';
import { setRetake } from '../redux/actions/quizActionTypes';
import { useAppDispatch, useAppSelector } from '../redux/store';

const Answer = () => {
    const quiz = useAppSelector((state)=> state.quizData);
    const dispatch = useAppDispatch();
    let mark:number = 0;
    const answerMatcher = () =>{
        
        let allAnswer:allAnswer={};

        if(window.localStorage.getItem('quizSelectedOptions')){
            allAnswer = JSON.parse(window.localStorage.getItem('quizSelectedOptions') || '');
            rightAnswer.map( (ans, i) =>{

                const match = (allAnswer[`quiz${i+1}`] === ans)
           
                if(match){
                    mark += 1;
                }
            })
        }
    }
    answerMatcher()
    return (
        <div>
            <h4>You got {mark} out of {quiz.length}</h4>
            <button onClick={ ()=> dispatch(setRetake())}>Retake</button>
        </div>
    );
};

export default Answer;