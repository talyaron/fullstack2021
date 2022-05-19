import React from "react";

interface PlayerDeckProps {
  setOnClickDeck: Function;
}

function PlayerDeck(props: PlayerDeckProps) {
  const { setOnClickDeck } = props;
  return (
    <div onClick={() => setOnClickDeck(true)}>
      <div
        className="App-mainTwo-TwoCards-box deckPlayer"
        style={{
          backgroundImage:
            "url(https://datagenetics.com/blog/september52021/deck.png)",
        }}></div>
    </div>
  );
}

export default PlayerDeck;
