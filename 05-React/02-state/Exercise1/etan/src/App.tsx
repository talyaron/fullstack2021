import React, { useState } from "react";
import {
  Button,
  TextField,
  FormGroup,
  AppBar,
  Card,
  CardContent,
  CardActions,
  CardMedia,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red, green, blue,purple , common } from "@mui/material/colors";

import DeleteIcon from "@mui/icons-material/Delete";

import "./View/styles/global.scss";

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
        main: purple[200],
      },
      secondary: {
        main: common["black"],
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


        const newCard = document.querySelector(
          `[data-id-new=${id}]`
        );
        newCard?.removeAttribute('data-new-card')
        setTimeout(() => (card.isNew = false), 5000);

        
      }
    }, 2000);
  }
  function handleDelete(id: string) {
    try{
    let arr = cards.filter((card) => card.id !== id);
    const deleted = document.querySelector(`[data-id-new=${id}]`);
    const deletedCard = cards.filter((card) => card.id === id)[0];
    if(!arr) throw new Error("no 'arr' in handleDelete")
    if(!deleted) throw new Error("no 'deleted' in handleDelete")
    if(!deletedCard) throw new Error("no 'deletedCard' in handleDelete")
    deletedCard.isDeleted = true;
    if (deletedCard.isDeleted === true) {
      console.log(deletedCard, deleted);
      
      const thisCard: any = deleted;
      thisCard.setAttribute("data-deleted-card", "true");
      setTimeout(() => setCards([...arr]), 2000);
    }
    const thisCard: any = deleted;
    setTimeout(() => thisCard.removeAttribute("data-deleted-card"), 2000);
    }catch (e) {
      console.log(e);
      
    }
  }
  function handleUpdate(ev: any) {
    try {
      const type = ev.target.dataset.type;
      const id = ev.target.dataset.id;
      const card = document.querySelector(`[data-id-new="${id}"]`);
      const input: any = card?.querySelector(`[data-update="${type}"]`);
      const payload = input.value;

      if (!cards) throw new Error("there are no cards at handleUpdate");
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
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar color="primary" position="static">
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
                <Card data-id-new={card.id} key={i} data-new-card className="card new">
                  <CardContent>
                  <CardMedia component="img" image={`${card.img}`} alt={`${card.text}`} />
                  <p>{card.text}</p>
                  </CardContent>
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
                  <FormGroup>
                  <TextField
                    data-update="text"
                    placeholder={card.text}
                    data-id={`${card.id}`}
                    id="text"
                  />
                  <Button
                    data-id={`${card.id}`}
                    data-type="text"
                    value="Update image title"
                    onClick={(ev) => {
                      handleUpdate(ev);
                    }}
                    color="primary"
                  >
                    Update text
                  </Button>
                  </FormGroup>
                  <FormGroup>
                    <TextField
                      type="text"
                      data-id={`${card.id}`}
                      data-update="img"
                      placeholder={card.img}
                    />
                    <Button
                      data-id={`${card.id}`}
                      data-type="img"
                      type="submit"
                      value="Update image source"
                      onClick={(ev) => {
                        handleUpdate(ev);
                      }}
                    >
                      Update image
                    </Button>
                  </FormGroup>
                </Card>
              );
            })}
          </div>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
