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
  const [ansClicked, setAnsClicked] = useState(false);
  const { question, falseAnswer, trueAnswer, sound, setCounter, counter } =
    props;
// useEffect(()=>{
//  if(!ansClicked){
//   alert('start playing')
//  }
//  else{
//     onEnd();
// }
// }, [ansClicked])
  let audio = new Audio(sound);
  function handleFalseAnswer() {
    setAnsClicked(true);
    setIsFalse(true);
    setCounter(counter-1)
    setTimeout(() => {
      setShowQuestion(false);
    }, 1000);
  }
  function handleTrueAnswer() {
  
    setAnsClicked(true);
    setIsTrue(true);
    setCounter(counter + 1);

    audio.volume = 0.3;

    audio.play();

    setTimeout(() => {
      audio.pause();
    }, 10000);

    console.log(sound);
  }
// function onEnd(){
// if(counter<=0){
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
  

  if (showQuestion) {
    return (
      <div>
        <h3>{question}</h3>
        <div className="flex">
          <button
            className={isFalse ? "bgfalse falseAns" : "bgfalse"}
            id="btn"
            onClick={() => handleFalseAnswer()}
          >
            {falseAnswer}
          </button>
          <button
            className={isTrue ? "trueAns bgtrue" : "bgtrue"}
            id="btn"
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
