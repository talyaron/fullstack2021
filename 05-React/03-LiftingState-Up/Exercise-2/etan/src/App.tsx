import React, { useState, useEffect, useTransition } from "react";
import useSound from "use-sound";
import Grid from "./View/Components/Grid";
import Ball from "./View/Components/Ball";
import "./View/styles/global.scss";
interface BallProps {
  id: string;
  color: string;
  i: number;
  incoming: boolean;
  popped: boolean;
  setCounter: Function;
  counter: number;
}

interface GridProps {
  setCounter: Function;
  counter: number;
  setBallList: Function;
  ballList: Array<any>;
  loadFunc: Function;
}

function App() {
  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }
  const [isPending, startTransition] = useTransition();
  const balloon = "sounds/balloon.mp3";
  const pop = "../public/sounds/pop.mp3";
  const [playPop, setPlayPop] = useState(0.0);
  const [popSound] = useSound(pop, {
    playPop,
    volume: .5,
  });
  const [playBalloon, setPlayBalloon] = useState(0.0);
  const [balloonSound] = useSound(balloon, {
    playBalloon,
    volume: 1,
  });
  const [bounce, setBounce] = useState(false);
  const [counter, setCounter] = useState(1);
  const [loading, setLoading] = useState(true);
  const [ballList, setBallList] = useState([
    {
      i: 1,
      color: "radial-gradient(at 30% 30%,red,#000a)",
      id: uid(),
      incoming: true,
      popped: false,
      setCounter: setCounter,
      counter: counter,
    },
    {
      i: 2,
      color: "radial-gradient(at 30% 30%,red,#000a)",
      id: uid(),
      incoming: true,
      popped: false,
      setCounter: setCounter,
      counter: counter,
    },
    {
      i: 3,
      color: "radial-gradient(at 30% 30%,red,#000a)",
      id: uid(),
      incoming: true,
      popped: false,
      setCounter: setCounter,
      counter: counter,
    },
    {
      i: 4,
      color: "radial-gradient(at 30% 30%,red,#000a)",
      id: uid(),
      incoming: true,
      popped: false,
      setCounter: setCounter,
      counter: counter,
    },
    {
      i: 5,
      color: "radial-gradient(at 30% 30%,red,#000a)",
      id: uid(),
      incoming: true,
      popped: false,
      setCounter: setCounter,
      counter: counter,
    },
  ]);

  useEffect(() => {
    setCounter(counter - 1);
  }, [bounce]);




  function loadFunc() {
    try {
      ballList.forEach((ball) => {
        // if(ball.incoming === false) throw new Error("this ball already came in")
        const currentBall = document.querySelector(`#${ball.id}`);
        const id = ball.id;
        const index = ballList.findIndex((ball) => ball.id === id);
        if (currentBall?.hasAttribute("data-incoming"))
          throw new Error("this ball already came in");

        startTransition(() => {
          setTimeout(() => {
            currentBall?.setAttribute("data-incoming", "true");
          }, 500 * (index + 1));
          setTimeout(() => {
            const currentBallsLocation = currentBall?.getBoundingClientRect();
            if (currentBall?.hasAttribute("data-bounced")) {
              setBounce((b) => {
                return !b;
              });
            }
            console.dir(currentBallsLocation?.bottom === 0);
            currentBall?.setAttribute("data-incoming", "false");
            ball.incoming = false;
            // setTimeout(() => {})
            if (ball.popped === false) {
              if (!currentBall?.hasAttribute("data-popped")) {
                if (currentBall?.getBoundingClientRect().bottom === 0) {
                  console.log("bottom 0");
                }
                currentBall?.setAttribute("data-bounced", "true");
              }
            } else {
              currentBall?.toggleAttribute(`data-popped`);
            }
          }, 2500 * (index + 1));
        });
      });
      setTimeout(() => {
        setLoading(false);
      }, 2000 * ballList.length);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <h1 className="counter">{counter}</h1>
      <h1 className="loading">{`${loading}`}</h1>
      <h1 className="bounce">{`${bounce}`}</h1>
      <Grid
        setCounter={setCounter}
        counter={counter}
        ballList={ballList}
        setBallList={setBallList}
        loadFunc={loadFunc}
        loading={loading}
        balloonSound={balloonSound}
        popSound={popSound}
      />
    </div>
  );
}

export default App;
