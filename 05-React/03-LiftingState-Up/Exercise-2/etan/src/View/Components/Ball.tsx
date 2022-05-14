import React from "react";

interface BallProps {
  id: string;
  color: string;
  i: number;
  incoming: boolean;
  popped: boolean;
  setCounter: Function;
  counter: number;
  setBallList: Function;
  play: Function;
}
function Ball(props: BallProps) {
  const { id, color, i, incoming, popped, setCounter, counter, setBallList, play } = props;

  function popFunc(id: string) {
    const currentBall = document.querySelector(`#${id}`);
    console.dir(currentBall);
    if (currentBall?.hasAttribute(`data-popped`))
      throw new Error("ball is already popped");
    else {
      console.log('pending playing');
      play();
      console.log('played');
      
      setCounter(counter + 1);
      currentBall?.setAttribute("data-popped", "true");
    }
  }
  return (
    <div
      className="ball"
      //   data-incoming={incoming}

      id={id}
      style={{ background: color, left: `calc(${i}*8em)` }}
      onClick={() => popFunc(id)}
      onMouseUp={() => {play()}}
    >
      {i}
    </div>
  );
}

export default Ball;
