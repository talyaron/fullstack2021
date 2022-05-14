import React, { useState } from "react";
import Balls from "./View/Components/Balls";
import Ball from "./View/Components/Ball";
import "./View/styles/global.scss";
interface BallProps {
  i: number;
  color: string;
  id: string;
  incoming: boolean;
  falling: boolean;

}

function App() {
  const [counter, setCounter] = useState(0);
  const [incoming, setIncoming] = useState(true)
  const [falling, setFalling] = useState(true)
  const [pop, setPop] = useState(false)
  const [balls, setBalls] = useState([
    { i: 1, color: "radial-gradient(at 30% 30%,red,#000a)", id: uid(), incoming: true, falling: false },
    { i: 2, color: "radial-gradient(at 30% 30%,blue,#000a)", id: uid(), incoming: true, falling: false },
    { i: 3, color: "radial-gradient(at 30% 30%,yellow,#000a)", id: uid(), incoming: true, falling: false },
    { i: 4, color: "radial-gradient(at 30% 30%,gold,#000a)", id: uid(), incoming: true, falling: false },
    { i: 5, color: "radial-gradient(at 30% 30%,gray,#000a)", id: uid(), incoming: true, falling: false },
    { i: 6, color: "radial-gradient(at 30% 30%,silver,#000a)", id: uid(), incoming: true, falling: false },
    { i: 7, color: "radial-gradient(at 30% 30%,purple,#000a)", id: uid(), incoming: true, falling: false },
    { i: 8, color: "radial-gradient(at 30% 30%,pink,#000a)", id: uid(), incoming: true, falling: false },
    { i: 9, color: "radial-gradient(at 30% 30%,green,#000a)", id: uid(), incoming: true, falling: false },
    { i: 10, color: "radial-gradient(at 30% 30%,teal,#000a)", id: uid(), incoming: true, falling: false },
  ])
 
  

 

  

  
  return (
    <div className="App">
      <header className="App-header">
        <span>{counter}</span>
  
        <Balls counter={counter} setCounter={setCounter} balls={balls} setBalls={setBalls} incoming={incoming} falling={falling} setIncoming={setIncoming} setFalling={setFalling} pop={pop} setPop={setPop} />
      </header>
    </div>
  );
}

export default App;
