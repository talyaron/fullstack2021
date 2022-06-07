import {motion} from 'framer-motion'
import { transform } from 'typescript';
interface CardfirstProps{
  background:string;
  newGame:boolean;
  count:number;
  setStart:Function;
}

function Cardsfirst (props:CardfirstProps)  {

  const {background,newGame,count,setStart} = props;

let randX;
let randY;
let randXneg;
let randYneg;

  function randomNumbers(){
    randX = '370px';
    randY = '160px';
    randXneg = '-350px'
    randYneg = '-130px'
}
  console.log(randXneg);
  
  if(newGame){
    randomNumbers()
    return (
       <motion.div className="App-cards-cardTwo" style={{background:`url(${background})`}} initial={{rotate:150}}
       animate={{x:count%2===0?randX:randXneg,y:count%2===0?randY:randYneg , rotate:360 , animationDirection:'alternate-reverse'}} 
       transition={{duration:2 , delay:.5 }} onAnimationEnd={() => {setStart(true) } }/>
    )
  }else{
    return (
     <div className="App-cards-card" style={{background:`url(${background})`}}/> 
    )
  } 
}
 

export default Cardsfirst