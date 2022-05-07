import React from "react";

import { useState } from "react";

import "./Views/styles/global.scss";

interface cardProps {
  imgUrl: string;
  imgName: string;
  id: string;
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
    const id = uid();

     const addedCard: any = document.querySelectorAll(".App_imageCards__card");
    // card.classList.toggle("addedCard");
    
    
    
    if (set.length < 8) {
      
      setMyArray([...set, { imgUrl, imgName, id }]);
    }
    
    setTimeout(() =>{
    const lastCard = document.querySelector(`[id=${id}]`)
      lastCard?.setAttribute("class", 'App_imageCards__card')
      console.log(lastCard);
      
    },600)

   

    // ev.target.reset()
  }

  function handleDeleteCard(ev: any) {
    console.log(ev.target.id);
    const cardId = ev.target.id;

    // const chosenCard: any = document.querySelectorAll(".App_imageCards__card");

   
    
    // chosenCard.forEach((card:any)=>{
    //   if(card.id==cardId){
    //     card.classList.toggle("activeDelete");

    //   }
    // })

    setMyArray(
      set.filter((card) => {
        return card.id !== cardId;
      })
    );

    // console.log(chosenCard);
    // console.log(set);
  }

  function handleUpdateCard(ev: any) {
    const id = ev.target.id;
    const newName = ev.target.value;

    const foundIndex = set.findIndex((card) => card.id === id);
    console.log(foundIndex);
    let array = [...set];
    let card = { ...set[foundIndex] };
    card.imgName = newName;
    array[foundIndex] = card;
    setMyArray(array);

    console.log(array);
  }

  return (
    <div className="App">
      <form className="App_form" onSubmit={handleCreatCard}>
        <input type="text" name="imgUrl" required placeholder="enter url" />
        <input
          type="text"
          name="imgName"
          required
          placeholder="enter image name.."
        />
        <button type="submit">Submit</button>
      </form>

      <div className="App_imageCards">
        {set.map((card, i) => (
          <div id={card.id} key={i} className="App_imageCards__card new">
            <img src={card.imgUrl} alt="card image url"></img>
            <h2 className="App_imageCards__card-name">Name : {card.imgName}</h2>

            <button
              className="App_imageCards__card--deleteButton"
              type="button"
              id={card.id}
              onClick={handleDeleteCard}
            >
              delete
            </button>

            <input
              type="text"
              name="updateName"
              id={card.id}
              onChange={handleUpdateCard}
              placeholder="change image name"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
