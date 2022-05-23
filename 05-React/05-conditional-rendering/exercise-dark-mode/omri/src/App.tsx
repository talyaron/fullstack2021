import './view/styles/global.scss';
import { useState } from 'react';
import axios from 'axios';
import Header from './view/components/Header';
import Card from './view/components/Card';
//https://opentdb.com/api.php?amount=10&type=multiple - trivia API

interface questions {
  question: string
}

interface answers {
  answer:string,
  correct: boolean
}

function App() {

  const [questions, setQuestions] = useState<Array<questions>>([]);
  const [answers,setAnswers] = useState<Array<answers>>([]);

  function uid() {
    return Math.random().toString(36).slice(-6);
  }
  

  return (
    <div className="App">
      <div className="App__header">
        <Header />
      </div>
      <div className="App_cards">
        <Card questions={questions} setQuestions={setQuestions}/>
      </div>
    </div>
  );
}

export default App;

