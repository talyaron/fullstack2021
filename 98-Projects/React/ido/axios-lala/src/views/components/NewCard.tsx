import React from 'react'
import CheckBattleCards from './CheckBattleCards';

interface NewCardProps{
    card:any;
    clickOnDeck:boolean;
    cardHolder:string;
    setOppWinningCards:Function;
    setplayerWinningCards:Function;
}


function NewCard (props:NewCardProps) {

    const {card , clickOnDeck,cardHolder,setplayerWinningCards,setOppWinningCards} = props;
    const animation = 'flip-in-hor-bottom 5s both'

  return (
    <>
    <div className={`App-mainTwo-TwoCards-deck-newCard ${cardHolder}`} style={{backgroundImage: `url(${card.url})` }}>
    </div>
    
    <CheckBattleCards setplayerWinningCards={setplayerWinningCards} setOppWinningCards={setOppWinningCards} cardPlayer={card} cardOpp={card}/>
  
    </>
  )
}
export default NewCard