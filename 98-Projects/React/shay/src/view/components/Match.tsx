import { Sound } from "howler";
import { useState, useEffect } from "react";
import useSound from "use-sound";

const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

interface matchProps {
  loseSounds?:any;
  winSounds?:any;
  ansClicked:number;
   setAnsClicked:Function;
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
  //const [ansClicked, setAnsClicked] = useState(0);
  const { question, falseAnswer, trueAnswer, sound, setCounter, counter, ansClicked, setAnsClicked, loseSounds,winSounds} =
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
  let winAudio =new Audio(winSounds);
  let loseAudio = new Audio(loseSounds);
  function handleFalseAnswer() {
    setAnsClicked(ansClicked+1);
    setIsFalse(true);
    if(ansClicked===3){
       onEnd()
    }
    // else if(ansClicked===0){
    //   alert("you lost");
    // }
    setTimeout(() => {
      setShowQuestion(false);
    }, 1000);
  }
  function handleTrueAnswer() {
  
    setAnsClicked(ansClicked + 1);
    setIsTrue(true);
    setCounter(counter + 1);
    console.log(ansClicked);
    
    if(ansClicked===3){
      onEnd()
   }
   console.log(ansClicked);
   
    audio.volume = 0.3;

    audio.play();

    setTimeout(() => {
      audio.pause();
    }, 10000);

    console.log(sound);
  }

  
function onEnd(){

if(counter==0){
    loseAudio.play();
    loseAudio.volume=0.3;
  alert("you lost");
  
}
else{ 
switch (counter) {
      // case 0:
      //   
      //   break;
      case 0:
        alert("you know only one what a shame");
        break;
      case 1:
        alert("you know only two that half of what i know");
        break;
      case 2:
        alert("you are so close only one more and you could won");
        break;
      case 3:
        alert("you won you are so lucky");
        setTimeout(() => {
       winAudio.play();
       winAudio.volume= 0.3;
      }, 10000);
        break;
    }
} 
}
  

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
