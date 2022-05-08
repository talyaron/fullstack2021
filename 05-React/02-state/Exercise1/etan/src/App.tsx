import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  TextField,
  FormGroup,
  AppBar,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Grid,
  Typography,
  FormControl,
  Collapse,
  CssBaseline,
  Stack,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey, red, green, blue, purple, common } from "@mui/material/colors";

import DeleteIcon from "@mui/icons-material/Delete";

import "./View/styles/global.scss";

interface CardsProps {
  // [x: string]: any;
  img: string;
  text: string;
  id: string;
  isDeleted?: boolean;
  isNew?: boolean;
}

function App() {
  const [cards, setCards] = useState<Array<CardsProps>>([]);
  const constCards = useRef(new Array<CardsProps>());
  const [checked, setChecked] = useState(false);
  // const [searchArray, setSearchArray] = useState<Array<CardsProps>>([]);
  // const [searchOldArray, setSearchOldArray] = useState<Array<CardsProps>>([... cards]);
  const [searchTerm, setSearchTerm] = useState("");
  // let oldCards: Array<CardsProps>;
  const handleChecked = () => {
    setChecked((prev) => !prev);
  };
  // useEffect(()=> {
  //   constCards.current = cards
  // })
  // const {x}  = useSpring({from: {x:0}, x: state? 1: 0, config: {duration:1000}})
  const theme = createTheme({
    palette: {
      primary: {
        light: grey[300],
        main: grey[600],
        dark: grey[800],
        contrastText: grey[100],
      },
      secondary: {
        main: grey[50],
      },
      background: {
        default: grey["A700"],
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
        const newCard = document.querySelector(`[data-id-new=${id}]`);
        newCard?.removeAttribute("data-new-card");
        setTimeout(() => (card.isNew = false), 5000);
      }
    }, 2000);
  }
  function handleDelete(id: string) {
    try {
      let arr = cards.filter((card) => card.id !== id);
      const deleted = document.querySelector(`[data-id-new=${id}]`);
      const deletedCard = cards.filter((card) => card.id === id)[0];

      if (!arr) throw new Error("no 'arr' in handleDelete");
      if (!deleted) throw new Error("no 'deleted' in handleDelete");
      if (!deletedCard) throw new Error("no 'deletedCard' in handleDelete");
      deletedCard.isDeleted = true;
      if (deletedCard.isDeleted === true) {
        const thisCard: any = deleted;
        thisCard.setAttribute("data-deleted-card", "true");
        setTimeout(() => setCards([...arr]), 500);
      }
      const thisCard: any = deleted;
      setTimeout(() => {
        thisCard.removeAttribute("data-deleted-card");
      }, 1000);
      const restOfCards = document.querySelectorAll("[data-new-card]");
      restOfCards.forEach((card) => {
        card.removeAttribute('data-new-card');
        console.log(card);
      });
    } catch (e) {
      console.log(e);
    }
  }
  function handleUpdate(ev: any) {
    try {
      const type = ev.target.dataset.type;
      const id = ev.target.dataset.id;
      const card = document.querySelector(`[data-id-new="${id}"]`);
      const input: any = card?.querySelector(`[data-update="${type}"]`);
      const payload = input.querySelector("input").value;
      console.log(type, id, card, input);

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

  // function handleSearch(ev:any){
  //   setTimeout(() => {
  //     console.log(ev.target.value);
  //     const searchTerm = ev.target.value;
  //     // if(!searchTerm) throw new Error("no searchTerm in handleSearch")
  //     if(searchTerm){
  //       const searchArray:Array<CardsProps> = cards.filter(card => card.text.toLowerCase().includes(searchTerm.toLowerCase()))
  //       setSearchTerm(searchTerm)
  //       setCards([... searchArray])
  //       return;
  //     }
  //     if(!searchTerm){

  //       console.log('no searchTerm in handleSearch!');

  //     }
  //   },1000)

  // }
  const { primary, secondary } = theme.palette;

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static">
          <TextField
            variant="filled"
            type="text"
            name="search"
            id="search"
            defaultValue={searchTerm}
            placeholder="Search for a certain card"
            // how do i make it so id doesnt jump after search?
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </AppBar>

        <header color={primary.main} className="App-header">
          <form color={primary.light} onSubmit={handleAddCard}>
            <FormControl sx={{ bgColor: `${primary.dark}`, width: "25ch" }}>
              <TextField
                InputLabelProps={{ shrink: true }}
                variant="filled"
                size="small"
                type="text"
                name="img"
                id="img"
                placeholder="input an image source"
              />
              <TextField
                variant="filled"
                type="text"
                name="text"
                id="text"
                placeholder="Write an img title"
              />
              <TextField type="submit" value="Submit a new card" />
            </FormControl>
          </form>
          <Stack color={primary.contrastText} spacing={2}>
            <Typography variant="h2">Your new cards:</Typography>
            <Button color="inherit" onClick={handleChecked}>
              Make some changes
            </Button>
          </Stack>
          <div className="grid">
            {cards
              .filter((card) => card.text.match(new RegExp(searchTerm, "i")))
              .map((card, i) => {
                return (
                  <Card
                    data-id-new={card.id}
                    key={i}
                    data-new-card
                    className="card new"
                    >
                    <CardMedia
                      component="img"
                      image={`${card.img}`}
                      alt={`${card.text}`}
                      />
                      <CardContent>
                      <Typography variant="h5" color="dark">
                        {card.text}
                      </Typography>
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
                      <Collapse in={checked}>
                        <FormGroup>
                          <TextField
                            label={card.text}
                            InputLabelProps={{ shrink: true }}
                            variant="standard"
                            data-update="text"
                            defaultValue={card.text}
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
                            variant="standard"
                            data-id={`${card.id}`}
                            data-update="img"
                            label="Image source"
                            defaultValue={card.img}
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
                      </Collapse>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
