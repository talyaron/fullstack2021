import React , {useState} from 'react'

interface CheckBattleCardsProps{
    cardOpp:any;
    cardPlayer:any;
    setplayerWinningCards:Function;
    setOppWinningCards:Function;
}

function CheckBattleCards (props:CheckBattleCardsProps) {

    const {cardOpp , cardPlayer,setOppWinningCards,setplayerWinningCards} = props;
        
    let tempArr = []

    if(cardOpp > cardPlayer){
        tempArr = [cardOpp , cardPlayer]
        setOppWinningCards([tempArr])
    }else if(cardOpp < cardPlayer){
        tempArr = [cardOpp , cardPlayer]
        setplayerWinningCards([tempArr])
    }

  return (
      
          <>
          </>
      
  
  )
}


export default CheckBattleCards