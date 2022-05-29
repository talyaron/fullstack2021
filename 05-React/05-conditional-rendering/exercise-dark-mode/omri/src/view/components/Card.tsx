// import { useState, useEffect } from 'react';

interface CardProps {
  questions: Array<questions>,
  answers:Array<Answer>
}
interface Answer {
  answer: string,
  correct: boolean
}

interface questions {
  question: string
  answers:Array<Answer>
}


const Card = (props: CardProps) => {
  const { questions } = props;
  return (
    <>
     {questions.map((question:any,i) => {
       return(
         <div   key ={i}>
           <h5>{question.question}</h5>
         </div>
         
       )
     })}
    </>
  )
}

export default Card