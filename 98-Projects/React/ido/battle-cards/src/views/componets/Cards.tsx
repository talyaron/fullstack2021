import React, {useState,useEffect } from 'react'
import {motion, useSpring} from 'framer-motion';
import {useTransition, animated} from 'react-spring';
import { boxSizing, height, positions } from '@mui/system';



 
interface CardsProps{
    cardsMain:Array<any>
    background?:string;
    newGame:boolean;
    count:number;
  }

function Cards (props:CardsProps){

  const {cardsMain,background,newGame,count} = props;

let randX;
let randY;
let randXneg;
let randYneg;

  console.log('lala');
  
  function randomNumbers(){
    randX = Math.floor(Math.random() * 100);
    randY = Math.floor(Math.random() * 100 );
    randXneg = (-randX)
    randYneg = (-randY)
}
    if(newGame){
        randomNumbers()
        return(
            <motion.div className="App-cards-cardTwo" style={{background:`url(${background})`,boxShadow:'none',top:'0'}} 
            initial={{scale:0.8}} animate={{x:count?randX:randXneg,y:count>10?randY:randYneg , animationDirection:'alternate-reverse'}}
            transition={{duration:4}} />  
        )
    }else {
        return (
            <div className="App-cards-card" style={{background:`url(${background})`}} />
          )
    }

  
}

export default Cards