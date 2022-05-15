interface CounterProps{
    counter:any;
}

const Counter = (props:CounterProps) => {
    const {counter } = props;
  return (
    <div>
        <h1>{counter}</h1>
    </div>
  )
}

export default Counter 