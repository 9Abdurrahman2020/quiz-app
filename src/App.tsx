import React, { useState } from 'react';
import { Provider } from 'react-redux';
import "../src/scss/style.css";
import Quiz from './components/Quiz';
import store from './redux/store';

function App() {
const [startQuiz, setStartQuiz] = useState(false)
  return (
    <Provider store={store}>
    <div className='main-container'>
      {
        startQuiz ? <Quiz/> :<button onClick={ ()=>setStartQuiz(true)}>Start Quiz</button>
      }
    </div>
    </Provider>
    
  );
}

export default App;
