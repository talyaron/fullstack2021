// import { useState, useEffect } from 'react';

interface CardProps {
  questions: Array<questions>,
  answers: Array<Answer>,
  setScore: Function,
  score: number
}
interface Answer {
  answer: string,
  correct: boolean
}

interface questions {
  question: string
  answers: Array<Answer>
}




const Card = (props: CardProps) => {
  const { questions, setScore, score } = props;

  function shuffle(array: Array<Answer>) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  function handleCorrectAnswer(answer: any,ev:any) {
    console.log(answer)
    if (answer.correct === true) {
      setScore(score + 1)
      document.getElementById('ggg').style.color = 'black';
    }
    else{

    }
  }
  return (
    <div className="App_cards">
      {questions.map((question: any, i) => {
        shuffle(question.answers);
        return (
          <div className="App_cards_card" key={i} id='ggg'>
              <h5>{question.question}</h5>
              {question.answers.map((answer: any, j: any) => {
                return (
                  <div className="App_cards_card-answers" key={j}>
                    <p onClick={(ev) => { handleCorrectAnswer(answer,ev)}}>{j + 1}. <span>{answer.answer}</span></p>
                  </div>
                )
              })}
          </div>
        )
      })}
    </div>
  )
}

export default Card