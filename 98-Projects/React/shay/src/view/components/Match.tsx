import {useState} from 'react';
const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

interface matchProps {
  box: {
    question: string;
    falseAnswer: string;
    trueAnswer: string;

    id: string;
  };
  setCounter: Function;
  counter: number;
  arr: Array<any>;
  setArr: Function;
  playBecomeSound: Function;
  playBeThereSound: Function;
  playVivaSound: Function;
  playWannabeSound: Function;
}

function Match(props: matchProps) {
  const {
    box,
    playBeThereSound,
    playBecomeSound,
    playVivaSound,
    playWannabeSound,
    setArr,
    setCounter,
    counter,
    arr,
  } = props;
  console.log(arr);

  const [isFalse, setIsFalse] = useState(false);
const [isTrue, setIsTrue] = useState(false);
const [showQuestion, setShowQuestion] = useState(true)
  
  function handleFalseAnswer(ev: any) {
    setIsFalse(true);
    setTimeout(()=>{
      setShowQuestion(false);
    }, 1000)
    
    // if (box.falseAnswer) {
    
    //   setCounter(counter);
    //   console.log("false");
    //   // hide.style.display='none'
    //   const cardId = ev.target.id;
    //   console.log(cardId);

    //   const chosenCard = document.querySelector(`[id=${cardId}]`);

    //   console.log(chosenCard);
    //   chosenCard?.setAttribute("data-delete", "true");

      //   setTimeout(() => {
      //     setArr(
      //       arr.filter((card) => {
      //         console.log(card.id);

      //         return card.id !== cardId;
      //       })
      //     );
      //   }, 1000);

      //   setTimeout(() => {
      //     chosenCard?.removeAttribute("data-delete");
      //   }, 1000);
    // }
  }
  function handleTrueAnswer() {
    setIsTrue(true);
    // if (box.trueAnswer) {
    //   setCounter(counter + 1);
    //   console.log("true");

     
    //   if (box.question[0]) {
    //     playWannabeSound();
    //   } else if (box.question[1]) {
    //     playBecomeSound();
    //   } else if (box.question[2]) {
    //     playBeThereSound();
    //   } else if (box.question[3]) {
    //     playVivaSound();
    //   }
    // }
  }
  console.log(box.question, box.falseAnswer, box.trueAnswer);

  if(showQuestion){
  return (
    <div className="hide" id={box.id}>
      <h3>{box.question}</h3>
      <div className="flex">
        <button
          className={isFalse?"bgfalse falseAns":"bgfalse"}
          id={box.id}
          onClick={() => handleFalseAnswer(box.id)}
        >
          {box.falseAnswer}
        </button>
        <button className={isTrue?"trueAns bgtrue":"bgtrue"} onClick={() => handleTrueAnswer()}>
          {box.trueAnswer}
        </button>
      </div>
    </div>
  );
  } else {
    return null;
  }
}

export default Match;
