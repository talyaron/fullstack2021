import React, { useState, useEffect } from "react";
import Balls from "./View/Components/Balls";
import Ball from "./View/Components/Ball";
import "./View/styles/global.scss";
interface BallProps {
  i: number;
  color: string;
  id: string;
  incoming: boolean;
  falling: boolean;
  setBounce: Function;
}
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

const newspaperSpinning = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];
const bouncingBallAnimOptions = {duration:2000, iterations: 1}
const bouncingBallAnim = [
  {opacity: "1", transform: "translateY(1vh)", maxHeight: '1em'},
  {transform: "translateY(2vh)", maxHeight: '.1em'},
  {maxHeight: '.2em'},
  {transform: `translateY(-9vh)`, maxHeight:`1em`},
  {transform: `translateY(1vh)`} ,
  {transform: "translateY(2vh)", maxHeight:'.1em'},
  {maxHeight: '.2em'},
  {transform: `translateY(-9vh)`, maxHeight:`1em`},
  {transform: 'translateY(-1vh)'},
  {transform: 'translateY(2vh)', maxHeight:`.1em`},
  {maxHeight:`.2em`},
  {transform: `translateY(-9vh)`, maxHeight:`1em`},
  {transform: 'translateY(-2vh)', maxHeight:`.3em`},
  {transform: `scale(1.5)`},
  {transform: 'scale(2)', opacity: `0`},
];

function App() {
  const [counter, setCounter] = useState(0);
  const [incoming, setIncoming] = useState(true);
  const [falling, setFalling] = useState(true);
  const [bounced, setBounced] = useState(true);
  const [pop, setPop] = useState(false);
  const [balls, setBalls] = useState([
    {
      i: 1,
      color: "radial-gradient(at 30% 30%,red,#000a)",
      id: uid(),
      incoming: true,
      falling: false,
    },
    {
      i: 2,
      color: "radial-gradient(at 30% 30%,blue,#000a)",
      id: uid(),
      incoming: true,
      falling: false,
    },
    {
      i: 3,
      color: "radial-gradient(at 30% 30%,yellow,#000a)",
      id: uid(),
      incoming: true,
      falling: false,
    },
    {
      i: 4,
      color: "radial-gradient(at 30% 30%,gold,#000a)",
      id: uid(),
      incoming: true,
      falling: false,
    },
    {
      i: 5,
      color: "radial-gradient(at 30% 30%,gray,#000a)",
      id: uid(),
      incoming: true,
      falling: false,
    },
    {
      i: 6,
      color: "radial-gradient(at 30% 30%,silver,#000a)",
      id: uid(),
      incoming: true,
      falling: false,
    },
    {
      i: 7,
      color: "radial-gradient(at 30% 30%,purple,#000a)",
      id: uid(),
      incoming: true,
      falling: false,
    },
    {
      i: 8,
      color: "radial-gradient(at 30% 30%,pink,#000a)",
      id: uid(),
      incoming: true,
      falling: false,
    },
    {
      i: 9,
      color: "radial-gradient(at 30% 30%,green,#000a)",
      id: uid(),
      incoming: true,
      falling: false,
    },
    {
      i: 10,
      color: "radial-gradient(at 30% 30%,teal,#000a)",
      id: uid(),
      incoming: true,
      falling: false,
    },
  ]);

  useEffect(() => {
    setCounter(counter - 1);
  }, [bounced]);

  return (
    <div className="App">
      <div className="App-header">
        <div className="wrapper">
          <span className="counter">{counter}</span>
          <span className="bounced">{`${bounced}`}</span>
          <Balls
            counter={counter}
            setCounter={setCounter}
            balls={balls}
            setBounced={setBounced}
            setBalls={setBalls}
            incoming={incoming}
            falling={falling}
            setIncoming={setIncoming}
            setFalling={setFalling}
            pop={pop}
            setPop={setPop}
            bouncingBallAnimOptions={bouncingBallAnimOptions}
            bouncingBallAnim={bouncingBallAnim}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
