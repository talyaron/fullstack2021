import './view/styles/global.scss';
import { useState } from 'react';
import axios from 'axios';
import Header from './view/components/Header';
import Card from './view/components/Card';
//https://opentdb.com/api.php?amount=10 - trivia API

interface questions {
  question: string,
  answers: Array<string>
}

function App() {

  const [questions, setQuestions] = useState<Array<questions>>([]);

  function uid() {
    return Math.random().toString(36).slice(-6);
  }

  async function handleGetQuestions() {
    try {
      const { data } = await axios.get(
        'https://opentdb.com/api.php?amount=10&type=multiple'
      );
      const { results } = data;
      // console.log(results);
       results.map(result => {
        const obj = {question:result.question};
        console.log(obj);
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <div className="App__header">
        <Header />
      </div>
      <div className="App_cards">
        <button onClick={handleGetQuestions}>Start</button>
        {/* <Card /> */}
      </div>
    </div>
  );
}

export default App;
//questions = {questions} setQuestios = {setQuestions}