import React from "react";

interface ClickProp {
  setCounter: Function;
  counter: any;
}
const Ball = (props: ClickProp) => {
  const { setCounter, counter } = props;

  function handleClickBall(ev: any) {
    setCounter(counter + 1);
    // console.log(counter)
    const ball: any = document.querySelector(".ball");

    //       object.style.animation="name duration timingFunction delay
    // iterationCount direction fillMode playState"
    if (ball?.style.animate('ball-fall', 'transform : translateY(600px)')) {
      setCounter(counter - 1);
      console.log(ball);
    }
  }
  return (
    <div onClick={handleClickBall}>
      <img
        src="https://freesvg.org/img/tikigiki_simple-beach-ball-01.png"
        className="ball"
      />
    </div>
  );
};

export default Ball;
