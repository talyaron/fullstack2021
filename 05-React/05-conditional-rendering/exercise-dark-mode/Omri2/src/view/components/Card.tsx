// import axios from 'axios';
// import { useState, useEffect } from 'react';

interface CardProps {
  questions: Array<questions>
}

interface questions {
  question: string
}


const Card = (props: CardProps) => {
  const { questions } = props;

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