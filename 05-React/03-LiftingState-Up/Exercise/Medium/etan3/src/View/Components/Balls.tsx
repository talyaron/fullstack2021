import { useEffect } from "react";
import Ball from "./Ball";
interface BallProps {
  i: number;
  color: string;
  id: string;
  incoming: boolean;
  falling: boolean;
}

interface BallsProps {
  counter: number;
  setCounter: Function;
  setBalls: Function;
  balls: Array<BallProps>;
  setIncoming: Function;
  setFalling: Function;
  setPop: Function;
  incoming: boolean;
  falling: boolean;
  pop: boolean;
  setBounced: Function;
  bouncingBallAnimOptions: any;
  bouncingBallAnim: any;
}

function Balls(props: BallsProps) {
  const {
    counter,
    setCounter,
    balls,
    setBalls,
    setIncoming,
    setFalling,
    incoming,
    falling,
    setBounced,
    bouncingBallAnimOptions,
    bouncingBallAnim,
  } = props;

  function loadBalls() {
    if (incoming)
      try {
        balls.forEach((ball) => {
          const id = ball.id;
          const currentBall: HTMLElement | null = document.querySelector(
            `#${id}`
          );
          currentBall?.addEventListener('click', () => {
            currentBall.animate(bouncingBallAnim, bouncingBallAnimOptions);
            console.dir(currentBall);
          } )
          const index = balls.findIndex((ball) => ball.id === id);
          if (balls[index].incoming === false)
            throw new Error(`no incoming balls`);
          setTimeout(() => {
            const currentBall: HTMLElement | null = document.querySelector(
              `#${id}`
            );
            console.dir(currentBall);
            if (!currentBall?.dataset?.pop) {
              if (balls[index].incoming === true) {
                currentBall?.setAttribute(`data-incoming`, `true`);
                setTimeout(() => {
                  //   balls[index].incoming = false;
                  currentBall?.setAttribute(`data-incoming`, `false`);
                  currentBall?.setAttribute(`data-falling`, "false");
                  currentBall?.setAttribute(`data-bounce`, `true`);
                  setTimeout(() => {
                    setCounter(counter - 1);
                    currentBall?.removeAttribute(`data-bounce`);
                  }, 2500);
                }, 20000);
              }
            }
          }, ball.i * 1000);
        });
      } catch (error) {
        console.log(error);
      }
  }
  function popBalls(id: string) {
    try {
      const index = balls.findIndex((ball) => ball.id === id);
      const currentBall: any = document.querySelector(`#${id}`);

      // currentBall?.setAttribute(`data-pop`, `true`);
      // const newBalls: Array<BallProps> = [
      //   ...balls.filter((ball) => ball.id !== id),
      // ];
      setTimeout(() => {
        currentBall?.setAttribute(`data-pop`, `false`);
        //   currentBall?.toggleAttribute(`data-falling`)
      }, 1000);
      // setTimeout(() => {
      //   setBalls([...newBalls]);
      // }, 1000);
      // setCounter(counter + 1);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadBalls();
    setTimeout(() => {
      return setIncoming(false);
    }, 10000);
  }, []);

  useEffect(() => {
    console.log(`incoming changed to ${incoming}`);
  }, [incoming]);

  return (
    <div className="balls">
      {balls.map((ball, i) => (
        <Ball
          key={i}
          i={ball.i}
          color={ball.color}
          id={ball.id}
          popBalls={popBalls}
          setBounced={setBounced}
        >
          <span>{ball.i}</span>
        </Ball>
      ))}
    </div>
  );
}

export default Balls;
