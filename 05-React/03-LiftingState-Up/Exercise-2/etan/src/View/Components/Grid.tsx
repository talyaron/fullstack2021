import Ball from "./Ball";
import { useEffect } from "react";

interface BallProps {
  id: string;
  color: string;
  i: number;
  incoming: boolean;
  popped: boolean;
  setCounter: Function;
  counter: number;
  setBallList: Function;
  balloonSound: Function;
  popSound: Function;
}

interface GridProps {
  setCounter: Function;
  counter: number;
  setBallList: Function;
  ballList: Array<any>;
  loadFunc: Function;
  loading: boolean;
  balloonSound: Function;
  popSound: Function;
}

function Grid(props: GridProps) {
  const { setCounter, counter, setBallList, ballList, loadFunc, loading, balloonSound, popSound} = props;


  useEffect(() => {
    loadFunc();
  }, []);
  // useEffect(() => {
  //   document.querySelector(`.ball`)?.addEventListener('animationend', () => {
  //     console.log('ball has animationed');
      
  //   })
  //   document.querySelector(`.ball`)?.addEventListener('animationcancel', () => {
  //     console.log('ball has canceled');
      
  //   })
  // }, [loading]);
  return (
    <div className="grid">
      {ballList.map((ball: BallProps, i) => (
        <Ball
          key={i}
          id={ball.id}
          color={ball.color}
          i={i}
          incoming={ball.incoming}
          popped={ball.popped}
          setCounter={setCounter}
          counter={counter}
          setBallList={setBallList}
          balloonSound={balloonSound}
          popSound={popSound}

        />
      ))}
    </div>
  );
}

export default Grid;
