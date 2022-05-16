import React from 'react'
interface BallProps {
    i: number;
    color: string;
    id: string;
    popBalls:Function;
    setBounced: Function;
    children: React.ReactNode;
  }
function Ball(props: BallProps) {
    const {i, color, id, popBalls, setBounced} = props;

setBounced((b:any) => {return !b})

  return (
    <div
    data-i={i}
        className="ball"
        id={id}
        data-incoming={false}
        data-falling={false}
        onClick={() => {
          popBalls(id);
        }}

        key={i}
        style={{
          position: "absolute",
          left: `calc(${i - 1}*10vw)`,
          background: color,
        }}
    >
        <span>{i}</span>
    </div>
  )
}

export default Ball