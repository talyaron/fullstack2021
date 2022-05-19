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

  const bgfalse: any = document.querySelector(".bgfalse");
  const bgtrue: any = document.querySelector(".bgtrue");
  const hide: any = document.querySelector(".hide");
  function handleFalseAnswer(ev: any) {
    if (box.falseAnswer) {
      bgfalse.style.backgroundColor = "#d662b5";
      setCounter(counter);
      console.log("false");
      // hide.style.display='none'
      const cardId = ev.target.id;
      console.log(cardId);

      const chosenCard = document.querySelector(`[id=${cardId}]`);

      console.log(chosenCard);
      chosenCard?.setAttribute("data-delete", "true");

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
    }
  }
  function handleTrueAnswer() {
    if (box.trueAnswer) {
      setCounter(counter + 1);
      console.log("true");

      bgtrue.style.backgroundColor = "#12cf7d";
      if (box.question[0]) {
        playWannabeSound();
      } else if (box.question[1]) {
        playBecomeSound();
      } else if (box.question[2]) {
        playBeThereSound();
      } else if (box.question[3]) {
        playVivaSound();
      }
    }
  }
  console.log(box.question, box.falseAnswer, box.trueAnswer);

  return (
    <div className="hide" id={box.id}>
      <h3>{box.question}</h3>
      <div className="flex">
        <button
          className="bgfalse"
          id={box.id}
          onClick={() => handleFalseAnswer(box.id)}
        >
          {box.falseAnswer}
        </button>
        <button className="bgtrue" onClick={() => handleTrueAnswer()}>
          {box.trueAnswer}
        </button>
      </div>
    </div>
  );
}

export default Match;
