// import axios from 'axios';
// import { useState, useEffect } from 'react';

interface CardProps {
  questions: Array<Question>
  answers: Array<Answer>
}

interface Question {
  question: string
  answers:Array<Answer>
}

interface Answer {
  answer: string,
  correct: boolean
}


const Card = (props: CardProps) => {
  const { questions, answers } = props;

  return (
    <>
     {questions.map((question:any,i) => {
       return(
         <div   key ={i}>
           <p>{question.question}</p>
         </div>
       )
     })}
    </>
  )
}

export default Card