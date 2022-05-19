import { url } from 'inspector';
import React, {useState} from 'react'
import  OpponentDeck from "./OpponentDeck";
import PlayerDeck from './PlayerDeck'
 


interface CardsProps{
  setOnClickDeck:Function;
  }

function Cards (props:CardsProps){

  const {setOnClickDeck} = props;

  let count = 26;

  function deckClicked(ev:any){
    setOnClickDeck(true)
    count --;
  }

  return (
    <div className='App-mainTwo-TwoCards'>
      <div className="App-mainTwo-TwoCards-box deckOpp" 
      style={{backgroundImage:'url(https://datagenetics.com/blog/september52021/deck.png)'}} ></div>
      
      <div className="App-mainTwo-TwoCards-box deckPlayer" 
      style={{backgroundImage: 'url(https://datagenetics.com/blog/september52021/deck.png)'}} 
      onClick={deckClicked} ></div>
    </div>
  )
}

export default Cards