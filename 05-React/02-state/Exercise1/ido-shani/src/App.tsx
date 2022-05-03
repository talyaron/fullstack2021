import React from "react";

import { useState } from "react";

import "./Views/styles/global.scss";

import Card from "./Views/Components/Card";

interface cardProps {
  imgUrl: string;
  imgName: string;
  uid:string

}

function App() {
  const [set, setMyArray] = useState<Array<cardProps>>([]);
  const uid = require("uuid")

  function handleCreatCard(ev: any) {
    ev.preventDefault();

    const imgUrl = ev.target.elements.imgUrl.value;
    const imgName = ev.target.elements.imgName.value;

    setMyArray([...set, { imgUrl, imgName, uid}]);

    console.log(set);
  }

  function handleDeleteCard(ev:any){
    const id=ev.target.id;
    console.log(id)

  }

  return (
    <div className="App">
      <form onSubmit={handleCreatCard}>
        <input type="text" name="imgUrl" />
        <input type="text" name="imgName" />
        <button type="submit">Submit</button>
      </form>

      <div className="imageCards">
        {set.map((card, i) => (
          <div className="card">
            <img src={card.imgUrl} alt="" />
            <h2>{card.imgName}</h2>
            <button type="button" id={card.uid} onClick={handleDeleteCard} ></button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
