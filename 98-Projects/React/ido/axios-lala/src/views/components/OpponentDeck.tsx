import React from "react";

interface OpponentDeckProps{
  
}

function OpponentDeck(props:OpponentDeckProps) {
 

  return (
    <div>
      <div
        className="App-mainTwo-TwoCards-box deckOpp"
        style={{
          backgroundImage:
            "url(https://datagenetics.com/blog/september52021/deck.png)",
        }}></div>
    </div>
  );
}

export default OpponentDeck;
