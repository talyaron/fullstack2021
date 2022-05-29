// import { useState, useEffect } from 'react';

interface CardProps {
  questions: Array<questions>,
  answers: Array<Answer>,
  setScore:Function
}
interface Answer {
  answer: string,
  correct: boolean
}

interface questions {
  question: string
  answers: Array<Answer>
}

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

function handleCorrectAnswer(answer:any) {

}



const Card = (props: CardProps) => {
  const { questions } = props;
  return (
    <>
      {questions.map((question: any, i) => {
        shuffle(question.answers);
        return (
          <div key={i}>
            <h5>{question.question}</h5>
            {question.answers.map((answer: any, j: any) => {
              return (
                <div key={j}>
                  <p onClick={() => {handleCorrectAnswer(answer)}}>{j + 1}. <span>{answer.answer}</span></p>
                </div>
              )
            })}
          </div>
        )
      })}
    </>
  )
}

export default Card