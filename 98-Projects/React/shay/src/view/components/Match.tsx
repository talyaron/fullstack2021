import { Sound } from "howler";
import { useState, useEffect } from "react";
import useSound from "use-sound";

const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

interface matchProps {
  question: string;
  falseAnswer: string;
  trueAnswer: string;
  sound?: any;
  id: string;

  setCounter: Function;
  counter: any;
}

function Match(props: matchProps) {
  const [isFalse, setIsFalse] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  const [showQuestion, setShowQuestion] = useState(true);

  const { question, falseAnswer, trueAnswer, sound, setCounter, counter } =
    props;

  //   const [playSound, setPlaySound] = useState(0.0);

  // const [playSounds] = useSound([sound],{

  //   playSound,
  //   volume: 1.0,
  // }) 

  let audio = new Audio(sound);
  function handleFalseAnswer() {
    setIsFalse(true);
    setTimeout(() => {
      setShowQuestion(false);
    }, 1000);
  }
  function handleTrueAnswer() {
    setIsTrue(true);
    setCounter(counter + 1);

    audio.volume = 0.3;

    audio.play();

    setTimeout(() => {
      audio.pause();
    }, 10000);

    // setIsPlaying(true);
    //playSounds();
    console.log(sound);
  }
// function onEnd(){
// if(counter==0){
//   alert("you lost");
// }
//     switch (counter) {
//       // case 0:
//       //   alert("you lost");
//       //   break;
//       case 0:
//         alert("you know only one what a shame");
//         break;
//       case 1:
//         alert("you know only two that half of what i know");
//         break;
//       case 2:
//         alert("you are so close only one more and you could won");
//         break;
//       case 3:
//         alert("you won you are so lucky");
//         break;
//     }

// }
  // console.log(question, falseAnswer, trueAnswer,sound);

  if (showQuestion) {
    return (
      <div>
        <h3>{question}</h3>
        <div className="flex">
          <button
            className={isFalse ? "bgfalse falseAns" : "bgfalse"}
            onClick={() => handleFalseAnswer()}
          >
            {falseAnswer}
          </button>
          <button
            className={isTrue ? "trueAns bgtrue" : "bgtrue"}
            onClick={() => handleTrueAnswer()} 
          >
            {trueAnswer}
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Match;
