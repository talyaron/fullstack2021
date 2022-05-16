
interface CounterProps{
    score:number;
}

const Counter = (props:CounterProps) => {
    const {score} = props
  return (
    <div>Score:{score}</div>
  )
}

export default Counter