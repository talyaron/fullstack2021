import React , {useState} from "react";
import NewCard from './NewCard';

interface PlayerDeckProps {
  setOnClickDeck: Function;
  cardOpponent:Array<any>
  cardsPlayer:Array<any>;
  clickOnDeck:boolean;
  setCardsPlayer:Function;
  setCardsOpponent:Function;
}

function Decks(props: PlayerDeckProps) {

  const [playerWinningCards , setplayerWinningCards ] = useState([])
  const [oppWinningCards , setOppWinningCards ] = useState([])

  const { setOnClickDeck,clickOnDeck,cardsPlayer,
    setCardsPlayer,cardOpponent,setCardsOpponent} = props;
  const lastIndexPlayer = cardsPlayer.length - 1;
  const lastIndexOpp = cardOpponent.length - 1;

  const cardPlayer = cardsPlayer[lastIndexPlayer];
  const cardOpp = cardOpponent[lastIndexOpp];

  const oppID = cardOpp.id;
  const PlayerID = cardPlayer.id;

  function openCard(ev:any){

    if(clickOnDeck){
      const tempPlayerCards = cardsPlayer.filter(card => card.id !== PlayerID)
      const tempOppCards =  cardOpponent.filter(card => card.id !== oppID)
    setCardsOpponent(tempOppCards);
    setCardsPlayer(tempPlayerCards);
    
    }
    setOnClickDeck(true);
    
  }
  
  return (
    <>
    <div className="App-mainTwo-TwoCards-deck deckOpp" 
        style={{backgroundImage:"url(https://datagenetics.com/blog/september52021/deck.png)",
        }}>
        </div>
        {clickOnDeck && true?<NewCard card={cardOpp} clickOnDeck={clickOnDeck} cardHolder={"opp"} setOppWinningCards={setOppWinningCards} setplayerWinningCards={setplayerWinningCards}  />:null}
      <div className="App-mainTwo-TwoCards-deck deckPlayer" 
      style={{backgroundImage:"url(https://datagenetics.com/blog/september52021/deck.png)",}} onClick={openCard}>
        </div>
             {clickOnDeck && true?<NewCard card={cardPlayer} clickOnDeck={clickOnDeck} cardHolder={'player'} setOppWinningCards={setOppWinningCards} setplayerWinningCards={setplayerWinningCards} />:null}
        </>

          
  );
}
export default Decks;
