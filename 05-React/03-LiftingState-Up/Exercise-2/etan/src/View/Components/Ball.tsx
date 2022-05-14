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
    if (currentBall?.hasAttribute(`data-popped`))
      throw new Error("ball is already popped");
    else {
      setCounter(counter + 1);
      currentBall?.setAttribute("data-popped", "true");
    }
  }
  function animationEnd () {
    play();
  }
  return (
    <div
      className="ball"
      id={id}
      style={{ background: color, left: `calc(${i}*8em)` }}
      onClick={() => popFunc(id)}
      onAnimationEnd={() => animationEnd()}
    >
      {i}
    </div>
  );
}

export default Ball;
