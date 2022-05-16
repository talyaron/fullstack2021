import Counter from './Counter';

interface BallProps {
    setCounter:Function;
    counter:any;
}

const Ball = (props:BallProps) => {
    const {counter, setCounter} = props;
    const balls =[1,2,3,4];
  return (
    <div className='balls'>
        {balls.map((ball,i) =>  {
            return (
                 <div key = {i} className="ball"  onClick={() => setCounter(counter+1)}>{i}</div>
            )
        })}
    </div>
  )
}

export default Ball