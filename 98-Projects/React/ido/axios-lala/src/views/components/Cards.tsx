import { url } from 'inspector';
import React, {useState} from 'react'
import Decks from './Decks';
import NewCard from './NewCard';
 
interface CardsProps{
  setOnClickDeck:Function;
  cardsPlayer:Array<any>;
  cardsOpponent:Array<any>;
  clickOnDeck:boolean;
  setCardsOpponent:Function;
  setCardsPlayer:Function;
  }

function Cards (props:CardsProps){

  const {setOnClickDeck,cardsPlayer,cardsOpponent,clickOnDeck,
    setCardsOpponent,setCardsPlayer} = props;
    
  
  return (
    
    <div className='App-mainTwo-TwoCards'>
     <Decks setCardsOpponent={setCardsOpponent} cardsPlayer={cardsPlayer} clickOnDeck={clickOnDeck} 
     setOnClickDeck={setOnClickDeck} setCardsPlayer={setCardsPlayer}  cardOpponent={cardsOpponent}/>
    </div>

    
  )
}

export default Cards