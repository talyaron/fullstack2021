import axios from 'axios';

interface CardProps {
  questions: Array<questions>
  setQuestions: Function
}

interface questions {
  question: string
}


const Card = (props: CardProps) => {
  const { questions, setQuestions } = props;

  async function handleGetQuestins() {
    try {
      const { data } = await axios.get(
        'https://opentdb.com/api.php?amount=10&type=multiple'
      );
      const { results } = data;
      console.log(data)
     results.map((result:any) => {
      const obj = {qestion:result.question}
      setQuestions([...questions,obj])
      })
      console.log(questions) 
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
     <button onClick={handleGetQuestins}>Start</button>
     {questions.map((question:any,i) => {
       return(
         <div key ={i}>
           <p>{question.question}</p>
         </div>
       )
     })}
    </div>
  )
}

export default Card