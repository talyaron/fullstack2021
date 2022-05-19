import { url } from 'inspector';
import React, {useState} from 'react'
import  OpponentDeck from "./OpponentDeck";
import PlayerDeck from './PlayerDeck'
 


interface CardsProps{
  setOnClickDeck:Function;
  }

function Cards (props:CardsProps){

  const {setOnClickDeck} = props;

  // let count = 26;

  // function deckClicked(ev:any){
  //   setOnClickDeck(true)
  //   count --;
  // }

  return (
    <div className='App-mainTwo-TwoCards'>
      
     <OpponentDeck /> 
     <PlayerDeck setOnClickDeck={setOnClickDeck} />
    </div>
  )
}

export default Cards