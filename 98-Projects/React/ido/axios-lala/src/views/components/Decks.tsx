import React , {useState} from "react";

import { motion } from "framer-motion"

interface PlayerDeckProps {
  setOnClickDeck:Function;
  newGame:boolean;
  cardsOpponent:Array<any>;
  cardsPlayer:Array<any>;
  setCardsPlayer:Function;
  setCardsOpponent:Function;
}

function Decks(props: PlayerDeckProps) {

  const { newGame,cardsOpponent,cardsPlayer,setOnClickDeck,setCardsPlayer,setCardsOpponent} = props;

  const [playerWinningCards , setPlayerWinningCards] =useState([])
  const [oppWinningCards , setOppWinningCards] =useState([])
  

  const lastIndexPlayer = cardsPlayer.length - 1;
  const lastIndexOpp = cardsOpponent.length - 1;

  const cardPlayer = cardsPlayer[lastIndexPlayer];
  const cardOpp = cardsOpponent[lastIndexOpp];

  const oppID = cardOpp.id;
  const PlayerID = cardPlayer.id;
  let tempNewPlayerDeck = [];
  let tempNewOppDeck = [];


  function openCard(ev:any){

    if("clickOnDeck"){
      const tempPlayerCards = cardsPlayer.filter(card => card.id !== PlayerID)
      const tempOppCards =  cardsOpponent.filter(card => card.id !== oppID)
      const twoCards = [tempPlayerCards,tempOppCards]
    setCardsOpponent([...cardOpp,tempOppCards]);
    setCardsPlayer([...cardPlayer,tempOppCards]);
    if(cardOpp > cardPlayer){
      setPlayerWinningCards
    }else if(cardOpp < cardPlayer){
      tempNewPlayerDeck = [...playerWinningCards,cardOpp,cardPlayer]
    }
    
    }
    setOnClickDeck(true);
  }
  return (
         
        <>
     <div className="App-mainTwo-TwoCards-deck deckOpp" 
        style={{backgroundImage:"url(https://datagenetics.com/blog/september52021/deck.png)",}}>
        </div>
      <div className="App-mainTwo-TwoCards-deck deckPlayer" 
      style={{backgroundImage:"url(https://datagenetics.com/blog/september52021/deck.png)",}} onClick={openCard}>
        </div>
             
             
             </>
  )
}
export default Decks;
