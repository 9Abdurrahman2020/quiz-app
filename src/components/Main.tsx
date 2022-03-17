import React from 'react';
import { useDispatch } from 'react-redux';
import { startQuiz } from '../redux/actions/quizActionTypes';
import { useAppSelector } from '../redux/store';
import Answer from './Answer';
import Quiz from './Quiz';

const Main = () => {
    const isQuizStart = useAppSelector((state)=> state.startQuiz);
    const answer = useAppSelector((state)=> state.answer);
    const dispatch = useDispatch();
    return (
    <div className='main-container'>
      {
        answer ? <Answer/> : isQuizStart ? <Quiz/> :<button onClick={ ()=>dispatch(startQuiz())} >Start Quiz</button>
      }
    </div>
    );
};

export default Main;