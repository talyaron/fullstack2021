import './view/styles/global.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './view/components/Header';
import Card from './view/components/Card';
import Score from './view/components/Score';
//https://opentdb.com/api.php?amount=10&type=multiple - trivia API

interface Question {
  question: string
  answers: Array<Answer>
  id:string
}

interface Answer {
  answer: string,
  correct: boolean
}

function App() {

  const [questions, setQuestions] = useState<Array<Question>>([]);
  const [answers, setAnswers] = useState<Array<Answer>>([]);
  const [score, setScore] = useState<number>(0);
  const [trueAns, setTrueAns] = useState<boolean>(false)

  function uid() {
    return Math.random().toString(36).slice(-6);
  }


  async function handleGetQuestins() {
    try {
      const { data } = await axios.get(
        'https://opentdb.com/api.php?amount=10&type=multiple'
      );
      const { results } = data;
      const tempQuestions: Array<Question> = [];
      results.forEach((result: any) => {
        let tempAns: Answer = { answer: result.correct_answer, correct: true }
        const tempAnswers: Array<Answer> = [];
        tempAnswers.push(tempAns);
        result.incorrect_answers.forEach((answer: any) => {
          tempAns = { answer: answer, correct: false }
          tempAnswers.push(tempAns);
          setAnswers(tempAnswers)
        })
        const obj: Question = { question: result.question, answers: tempAnswers, id:uid() };
        tempQuestions.push(obj);
        setQuestions(tempQuestions);
      });
    } catch (error) {
      console.error(error);
    }
  }



  useEffect(() => {
    handleGetQuestins();
  }, [])


  return (
    <div className="App">
        <Header />
        <Score questions={questions} score={score}  />
        <Card questions={questions} answers={answers} setScore={setScore} score={score} 
        trueAns={trueAns} setTrueAns={setTrueAns} />
    </div>
  );
}

export default App;

