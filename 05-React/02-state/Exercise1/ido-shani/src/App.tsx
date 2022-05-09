import React from "react";

import { useState } from "react";
import useSound from 'use-sound';
//import tvStatic from './audio/staticNoise.mp3';
import "./Views/styles/global.scss";

interface cardProps {
  imgUrl: string;
  imgName: string;
  id: string;
  isNew: Boolean;
}

function App() {
  const [set, setMyArray] = useState<Array<cardProps>>([]);
  //const [play]=useSound('./audio/staticNoise.mp3')
  const audio=new Audio('./audio/staticNoise.mp3')
  function playAudio(){
    audio.play()
  }
  
  const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  function handleCreatCard(ev: any) {
    ev.preventDefault();

    const imgUrl = ev.target.elements.imgUrl.value;
    const imgName = ev.target.elements.imgName.value;
    const id = uid();
    let isNew = true;
    const card = { imgUrl, imgName, id, isNew };

   
    if (set.length < 8) {
      setMyArray([...set, card]);
    }else {
       set.splice(0 , 1);
       setMyArray([...set, card])
       console.log(set);
       
    }

    setTimeout(() => {
      if ((card.isNew = true)) {
        const lastCard = document.querySelector(`[id=${card.id}]`);
        lastCard?.removeAttribute("data-new");

        console.log(lastCard);
        setTimeout(() => {
          card.isNew = false;
        }, 500);
      }
    }, 1000);

    // ev.target.reset()
  }

  function handleDeleteCard(ev: any) {
    console.log(ev.target.id);
    const cardId = ev.target.id;

    const chosenCard = document.querySelector(`[id=${cardId}]`);

    console.log(chosenCard);
    chosenCard?.setAttribute("data-delete", "true");

    setTimeout(() => {
      setMyArray(
        set.filter((card) => {
          return card.id !== cardId;
        })
      );
    }, 1000);

    setTimeout(() => {
      chosenCard?.removeAttribute("data-delete");
    }, 1000);
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
      <button onClick={playAudio}>audio</button>
      <div className="App_imageCards">
        {set
          .map((card, i) => (
            <div id={card.id} key={i} className="App_imageCards__card" data-new>
              <img src={card.imgUrl} alt="card image url"></img>
              <h2 className="App_imageCards__card-name">
                Name : {card.imgName}
              </h2>

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
          ))
          .reverse()}
      </div>
    </div>
  );
}

export default App;
