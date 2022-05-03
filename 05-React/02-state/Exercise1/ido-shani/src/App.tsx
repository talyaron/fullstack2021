import React from "react";

import { useState } from "react";

import "./Views/styles/global.scss";

import Card from "./Views/Components/Card";

interface cardProps {
  imgUrl: string;
  imgName: string;
  id:string

}



function App() {
  const [set, setMyArray] = useState<Array<cardProps>>([]);

  const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };


  function handleCreatCard(ev: any) {
    ev.preventDefault();

    const imgUrl = ev.target.elements.imgUrl.value;
    const imgName = ev.target.elements.imgName.value;
    const id=uid()

    setMyArray([...set, { imgUrl, imgName, id}]);

    console.log(set);
    ev.target.reset()
  }

  function handleDeleteCard(ev:any){
    console.log(ev.target.id)
    const cardId=ev.target.id;   

   setMyArray(set.filter(card=> {return card.id !== cardId}))  
    

  }

  function handleUpdateCard(ev:any){
    const id=ev.target.id;
    const newName=ev.target.value;

    const foundIndex=set.findIndex(card=> card.id==id)
    console.log(foundIndex)
    let array=[...set]
    let card={...set[foundIndex]}
    card.imgName=newName
    array[foundIndex]=card;
    setMyArray(array);
    
    console.log(array)



    
  }

  return (
    <div className="App">
      <form onSubmit={handleCreatCard}>
        <input type="text" name="imgUrl" required/>
        <input type="text" name="imgName" required/>
        <button type="submit">Submit</button>
      </form>

      <div className="imageCards">
        {set.map((card, i) => (
          <div key={i} className="card">
            <img src={card.imgUrl} alt="" />
            <h2>{card.imgName}</h2>
            <button type="button" id={card.id} onClick={handleDeleteCard} >delete</button>

            
            <input type="text" name="updateName" id={card.id} onChange={handleUpdateCard}/>
            
            
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
