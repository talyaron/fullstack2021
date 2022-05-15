import React from "react";
interface ballsProps {
  i: number,
  color: string,
  id: any,
}

interface CounterProps {
  counter: number;
  setCount: Function;
  balls: Array<ballsProps>;
}

function Counter(props: CounterProps) {
  const { counter, setCount, balls } = props;
const color = balls.color
  return (
    <div>
      {balls.map((ball)=> {
        <span id={ball.id}
        onClick={() => {
          setCount(counter + 1);
        }}
        id="counter"
        data-color={ball.color}
      >
        <h1> {counter}</h1>
      </span>
      })}
    </div>
  );
}

export default Counter;
