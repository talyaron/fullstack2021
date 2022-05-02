import React, { useState } from "react";

import "./View/styles/global.scss";
import Card from "./View/Components/Card";

interface CardsProps {
  img: string;
  text: string;
  id: string;
}

function App() {
  const [cards, setCards] = useState<Array<CardsProps>>([]);
  function uniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

function handleAddCard(ev: any) {
    ev.preventDefault();
    const text = ev.target.elements.text.value;
    const img = ev.target.elements.img.value;
    const id = uniqueId();
    const card = { img, text, id };
    setCards([...cards, card]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleAddCard}>
          <input
            type="text"
            name="img"
            id="img"
            placeholder="Input an image source"
          />
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Write an img title"
          />
          <input type="submit" value="Submit a new card" />
        </form>
        <div className="grid">
          {cards.map((card, i) => {
            return <div className="card">
            <img src={`${card.img}`} />
            <p>{card.text}</p>
            <button>Delete</button>
            <button>Update</button>
      
      </div>;
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
