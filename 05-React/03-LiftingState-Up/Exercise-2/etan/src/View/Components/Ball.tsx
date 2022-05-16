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
  balloonSound: Function;
  popSound:Function;
}
function Ball(props: BallProps) {
  const { id, color, i, incoming, popped, setCounter, counter, setBallList, balloonSound, popSound } = props;

  function popFunc(id: string) {
    const currentBall = document.querySelector(`#${id}`);
    if (currentBall?.hasAttribute(`data-popped`))
      throw new Error("ball is already popped");
    else {
      setCounter(counter + 1);
      currentBall?.setAttribute("data-popped", "true");
    }
  }
  function animationEnd (id:string) {
    const currentBall:any = document.querySelector(`#${id}`);
    if(currentBall.style.opacity === 0){
      console.log('working');
    }
    console.dir(currentBall);
    
  }
  return (
    <div
      className="ball"
      id={id}
      style={{ background: color, left: `calc(${i}*8em)` }}
      onClick={() => popFunc(id)}
      onAnimationEnd={() => animationEnd(id)}
    >
      {i}
    </div>
  );
}

export default Ball;
