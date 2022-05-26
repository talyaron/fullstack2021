import React, { useState, useEffect } from "react";
import Match from "./view/components/Match";
import "./view/style/global.scss";
import useSound from "use-sound";
import  "./view/audio/Wannabe.mp3";
import  "./view/audio/Become.mp3";
import "./view/audio/BeThere.mp3";
import  "./view/audio/Viva.mp3";
import "./view/audio/lost.wav";
import "./view/audio/win.wav"

const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

interface matchProps {
  question: string;
  falseAnswer: string;
  trueAnswer: string;
  id: string;
  sound?:any,

}


const trivia: Array<matchProps> = [
  {
    question:
      "If you wanna be my lover, you gotta get with my friends Make it last forever, friendship...",
    falseAnswer: "'til the end",
    trueAnswer: "never end",
    id: uid(),
    sound:require("./view/audio/Wannabe.mp3")
  },
  {
    question:
      "Candle light and soul forever A dream of you and me together Say you...",
    falseAnswer: "love me",
    trueAnswer: "believe it",
    id: uid(),
    sound: require("./view/audio/Become.mp3")
  },
  {
    question: "I'm giving you everything All that joy can bring...",
    falseAnswer: "all for you",
    trueAnswer: "this i swear",
    id: uid(),
    sound: require("./view/audio/BeThere.mp3")
  },
  {
    question:
      "Viva forever, I'll be waiting Everlasting, like the sun Live forever, for the moment Ever searching for...",
    falseAnswer: "some fun",
    trueAnswer: "the one",
    id: uid(),
    sound: require("./view/audio/Viva.mp3")
  },
];

function App() {
  // const [playSound, setPlaySound] = useState(0.75);
  const [question, setQuestion] = useState("");
  const [falseAnswer, setFalseAnswer] = useState([]);
  const [trueAnswer, setTrueAnswer] = useState([]);
  const [counter, setCounter] = useState(0);
  const [sound, setSound]=useState([])
 const [isClick, setIsClick] =useState(false)
  const [playSound, setPlaySound] = useState(0.0);
  const [ansClicked, setAnsClicked] = useState(0);
const winSounds=require('./view/audio/win.wav')
const loseSounds=require('./view/audio/lost.wav')

function newGame(){
  window.location.reload();
  setIsClick(true)
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Spice Girls</h1>
        <p>{counter}</p>
     
        {trivia.map((box: any, i) => {
          return (
           
            <Match
              key={i}
              loseSounds={loseSounds}
              winSounds={winSounds}
              ansClicked={ansClicked}
              setAnsClicked={setAnsClicked}
              question= {box.question}
              falseAnswer= {box.falseAnswer}
              trueAnswer= {box.trueAnswer}
              id= {box.id}
              sound={box.sound}
              counter={counter}
              setCounter={setCounter}
            />
            
          );
        })}
        <div className="button">
        <button className={isClick? "buttonBefor buttonAfter" : "buttonBefor"} onClick={()=>newGame()}>New Game</button></div>
      </header>
    </div>
  );
}

export default App;
