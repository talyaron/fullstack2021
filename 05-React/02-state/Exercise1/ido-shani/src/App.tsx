import React from "react";

import { useState } from "react";
import "./Views/styles/global.scss";

import Card from "./Views/Components/Card";


function App() {
  const [imgUrl, setImageUrl] = useState([]);
  const [imgName, setImageName] = useState([]);

  function handleCreatCard(ev: any) {
    ev.preventDefault();
    setImageUrl(ev.target.elements.imgUrl.value);
    setImageName(ev.target.elements.imgName.value);

    
    setMyArray(oldArray => [...oldArray, newElement]);

  }

  return (
    <div className="App">
      <form onSubmit={handleCreatCard}>
        <input type="text" name="imgUrl" />
        <input type="text" name="imgName" />
        <button type="submit">Submit</button>
      </form>

      <Card imgUrl={imgUrl} imgName={imgName} />
    </div>
  );
}

export default App;
