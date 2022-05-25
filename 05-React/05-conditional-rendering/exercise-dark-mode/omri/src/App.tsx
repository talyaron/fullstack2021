import './view/styles/global.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './view/components/Header';
import Card from './view/components/Card';
//https://opentdb.com/api.php?amount=10&type=multiple - trivia API

interface Question {
  question: string
  answers:Array<Answer>
}

interface Answer {
  answer: string,
  correct: boolean
}

function App() {

  const [questions, setQuestions] = useState<Array<Question>>([]);
  const [answers, setAnswers] = useState<Array<Answer>>([]);

  function uid() {
    return Math.random().toString(36).slice(-6);
  }

  // async function handleGetQuestins() {
  //   try {
  //     const { data } = await axios.get(
  //       'https://opentdb.com/api.php?amount=10&type=multiple'
  //     );
  //     const { results } = data;
  //     console.log(results);
  //     const tempQuestions: Array<Question> = [];
  //     results.forEach((result: any) => {
  //       const obj: Question = { question: result.question };
  //       tempQuestions.push(obj);
  //       setQuestions(tempQuestions);
  //      // console.log(tempQuestions)
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  async function handleGetQuestins() {
    try {
      const { data } = await axios.get(
        'https://opentdb.com/api.php?amount=10&type=multiple'
      );
      const { results} = data;
      // console.log(results)
      const tempQuestions: Array<Question> = [];
      const tempAnswers: Array<Answer> = [];
      results.forEach((result: any) => {
        // let tempAns:Answer = {answer:result.correct_answer, correct:true}
        // tempAnswers.push(tempAns);
        // result.incorrect_answers.forEach((answer:any) => {
        //   tempAns = {answer:answer, correct:false}
        //   tempAnswers.push(tempAns);
        //   setAnswers(tempAnswers)
        // })
        const obj: Question = { question: result.question, answers: tempAnswers };
        tempQuestions.push(obj);
        setQuestions(tempQuestions);
      });
      console.log(tempQuestions)
    } catch (error) {
      console.error(error);
    }
  }



  useEffect(() => {
    handleGetQuestins();
  }, [])


  return (
    <div className="App">
      <div className="App__header">
        <Header />
      </div>
      <div className="App_cards">
        <Card questions={questions} />
      </div>
    </div>
  );
}

export default App;

