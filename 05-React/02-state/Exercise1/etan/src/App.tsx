import React, { useState } from "react";
import logo from "./logo.svg";
import "./View/styles/global.scss";
import Card from "./View/Components/Card";

// import romiYair from "./View/images/romiYair.jpeg";
import training from "./View/images/training.jpeg";
import vegasTrip from "./View/images/vegasTrip.jpeg";

interface CardsProps {
  imgSrc?: string;
  text?: string;
}

let cards:Array<CardsProps> = [
 
];
function App() {
  const [img, setImg] = useState();
  const [text, setText] = useState();

  function handleAddCard(ev: any) {
    ev.preventDefault();

    
setImg(ev.target.elements.img.value);
setText(ev.target.elements.text.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="grid">
          {/* {cards.map((card, i) => {return <Card key={i} imgSrc={card.imgSrc} text={card.text}/>})} */}
        </div>
        <form onSubmit={handleAddCard}>
          <input type="file" name="img" id="img" />
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Write an img title"
          />
          <input type="submit" value="Submit a new card" />
          <Card imgSrc={img} text={text}/>
        </form>
      </header>
    </div>
  );
}

export default App;
