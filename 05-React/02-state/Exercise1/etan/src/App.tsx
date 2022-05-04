import React, { useState } from "react";
import { Button, TextField, AppBar } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red, green } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";

import "./View/styles/global.scss";
import Card from "./View/Components/Card";

interface CardsProps {
  img: string;
  text: string;
  id: string;
  isDeleted?: boolean;
  isNew?: boolean;
}

function App() {
  const [cards, setCards] = useState<Array<CardsProps>>([]);
  const [text, setText] = useState<String>();
  const [state, toggle] = useState(true);
  // const {x}  = useSpring({from: {x:0}, x: state? 1: 0, config: {duration:1000}})
  const theme = createTheme({
    palette: {
      primary: {
        main: red[200],
      },
      secondary: {
        main: green[500],
      },
    },
  });

  function uniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  // function lookUpAndAnimate(cardId: any) {
  //   const newish = document.querySelector(`[data-id=${cardId}]`)?.parentElement;
  //   return newish;
  // }
  function handleAddCard(ev: any) {
    ev.preventDefault();
    const text = ev.target.elements.text.value;
    const img = ev.target.elements.img.value;
    const id = uniqueId();
    const isNew = true;
    const card = { img, text, id, isNew };

    setCards([...cards, card]);
    setTimeout(() => {
      if (card.isNew === true) {
        console.log(id);

        const newCard = document.querySelector(`[data-id=${id}]`)?.parentElement;
        newCard?.setAttribute('class', 'card');
        setTimeout(() => (card.isNew = false), 5000);
      }
    }, 2000);
  }
  function handleDelete(id: string) {
    let arr = cards.filter((card) => card.id !== id);
    const deleted = document.querySelector(`[data-id=${id}]`)?.parentElement;
    const deletedCard = cards.filter((card) => card.id === id)[0];
    deletedCard.isDeleted = true;
    if (deletedCard.isDeleted === true) {
      const thisCard: any = deleted;
      thisCard.setAttribute("class", "card deleted");
      setTimeout(() => setCards([...arr]), 2000);
    }
    const thisCard: any = deleted;
    setTimeout(() => thisCard.setAttribute("class", "card"), 2000);
  }
  function handleUpdate(ev: any) {
    const payload = ev.target.previousElementSibling.value;
    const type = ev.target.previousElementSibling.id;
    const id = ev.target.previousElementSibling.dataset.id;
    cards.forEach((card: CardsProps) => {
      if (payload) {
        if (card.id === id) {
          if (type === "img") {
            card.img = payload;
            setCards([...cards]);
            return;
          }
          if (type === "text") {
            card.text = payload;
            setCards([...cards]);
            return;
          }
          return console.log("no type was chosen, update failed");
        }
      }
      return console.log("input something to update something");
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar position="static">
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
        </AppBar>
        <header className="App-header">
          <div className="grid">
            {cards.map((card, i) => {
              return (
                <div key={i} className="card new">
                  <img src={`${card.img}`} />
                  <p>{card.text}</p>
                  <p>{text}</p>
                  <Button
                    startIcon={<DeleteIcon />}
                    size="small"
                    style={{
                      fontSize: "10px",
                      width: 100,
                    }}
                    variant="outlined"
                    color="error"
                    onClick={(id) => {
                      handleDelete(card.id);
                    }}
                  >
                    Delete
                  </Button>
                  <input
                    type="text"
                    placeholder={card.text}
                    data-id={`${card.id}`}
                    id="text"
                  />
                  <Button
                    value="Update image title"
                    onClick={(ev) => {
                      handleUpdate(ev);
                    }}
                  >
                    Update text
                  </Button>
                  <input
                    type="text"
                    id="img"
                    data-id={`${card.id}`}
                    placeholder={card.img}
                  />
                  <Button
                    type="submit"
                    value="Update image source"
                    onClick={(ev) => {
                      handleUpdate(ev);
                    }}
                  >
                    Update image
                  </Button>
                  <input
                    onChange={(ev) => {
                      setText(ev.target.value);
                    }}
                    value={`${text}`}
                    type="text"
                    name="liveChange"
                    id="liveChange"
                  />
                </div>
              );
            })}
          </div>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
