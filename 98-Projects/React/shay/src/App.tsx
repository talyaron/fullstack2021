import React, { useState, useEffect } from "react";
import Match from "./view/components/Match";
import "./view/style/global.scss";
import useSound from "use-sound";

const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

interface matchProps {
  // setCounter: Function;
  // counter: number;
  question: string;
  falseAnswer: string;
  trueAnswer: string;
  id: string;
}
// interface answers{
//  answer1:string,
//  answer2:string
// }

const trivia: Array<matchProps> = [
  {
    question:
      "If you wanna be my lover, you gotta get with my friends Make it last forever, friendship...",
    falseAnswer: "'til the end",
    trueAnswer: "never end",
    id: uid(),
  },
  {
    question:
      "Candle light and soul forever A dream of you and me together Say you...",
    falseAnswer: "love me",
    trueAnswer: "believe it",
    id: uid(),
  
  },
  {
    question: "I'm giving you everything All that joy can bring...",
    falseAnswer: "all for you",
    trueAnswer: "this i swear",
    id: uid(),
  },
  {
    question:
      "Viva forever, I'll be waiting Everlasting, like the sun Live forever, for the moment Ever searching for...",
    falseAnswer: "some fun",
    trueAnswer: "the one",
    id: uid(),
  },
];

function App() {
  const become = "./public/audio/become.mp3";
  const beThere = "./public/audio/beThere.mp3";
  const viva = "./public/audio/viva.mp3";
  const wannabe = "./public/audio/wannabe.mp3";

  const [playBecome, setBecome] = useState(0.0);
  const [playBeThere, setBeThere] = useState(1.5);
  const [playViva, setViva] = useState(0.0);
  const [playWannabe, setWannabe] = useState(0.0);

  const [playBecomeSound] = useSound(become, {
    playBecome,
    volume: 0.4,
  });
  const [playBeThereSound] = useSound(beThere, {
    playBeThere,
    volume: 0.4,
  });
  const [playVivaSound] = useSound(viva, {
    playViva,
    volume: 0.4,
  });
  const [playWannabeSound] = useSound(wannabe, {
    playWannabe,
    volume: 0.4,
  });
  // const [id, setId]=useState(uid())
  const [question, setQuestion] = useState("");
  const [falseAnswer, setFalseAnswer] = useState([]);
  const [trueAnswer, setTrueAnswer] = useState([]);
  const [counter, setCounter] = useState(0);
  const [arr, setArr] = useState<Array<matchProps>>(trivia);

  console.log(arr);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Spice Girls</h1>
        <p>{counter}</p>
        {trivia.map((box: any, i) => {
          return (
            <Match
              key={i}
              box={box}
              arr={arr}
              setArr={setArr}
              playBecomeSound={playBecomeSound}
              playBeThereSound={playBeThereSound}
              playVivaSound={playVivaSound}
              playWannabeSound={playWannabeSound}
              counter={counter}
              setCounter={setCounter}
            />
          );
        })}
      </header>
    </div>
  );
}

export default App;
