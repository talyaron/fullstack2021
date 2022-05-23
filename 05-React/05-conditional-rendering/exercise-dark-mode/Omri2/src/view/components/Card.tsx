interface CardProps{
    questions:Array<questions>
    setQuestios:Function
}

interface questions {
    question:string,
    answers:Array<string>
}
const Card = (props:CardProps) => {
    const { questions, setQuestios} = props;
  return (
    <div>
        {/* <button onClick={handleGetQuestions}>Start</button> */}
    </div>
  )
}

export default Card