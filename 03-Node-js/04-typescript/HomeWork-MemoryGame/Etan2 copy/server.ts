import express from "express";
const app = express();
const port: number = 3000;
app.use(express.json());
app.use(express.static("public"));

const singleCards = [
  "./images/1776",
  "./images/Bye",
  "./images/cook",
  "./images/cuisades",
  "./images/Harry Potter 2",
  "./images/Harry Potter",
];

interface Card {
  src: string;
  pairId: string;
  id?: any;
  skjdhgkjdshgkjsd?: any;
}

interface DeckOfCards<Card> {}
// const cards = [
//   { src: "./images/1776", id: 1, pairId: 0 },
//   { src: "./images/Bye", id: 2, pairId: 1 },
//   { src: "./images/cook", id: 3, pairId: 2 },
//   { src: "./images/cuisades", id: 4, pairId: 3 },
//   { src: "./images/Harry Potter 2", id: 5, pairId: 4 },
//   { src: "./images/Harry Potter", id: 6, pairId: 5 },
//   { src: "./images/Star Wars", id: 7, pairId: 6 },
//   { src: "./images/the good surgeon", id: 8, pairId: 7 },
//   { src: "./images/1776", id: 15, pairId: 0 },
//   { src: "./images/Bye", id: 16, pairId: 1 },
//   { src: "./images/cook", id: 13, pairId: 2 },
//   { src: "./images/cuisades", id: 12, pairId: 3 },
//   { src: "./images/Harry Potter 2", id: 11, pairId: 4 },
//   { src: "./images/Harry Potter", id: 9, pairId: 5 },
//   { src: "./images/Star Wars", id: 14, pairId: 6 },
//   { src: "./images/the good surgeon", id: 10, pairId: 7 },
// ];

// const pairs = [
//   [1, 15],
//   [15, 1],
//   [2, 16],
//   [16, 2],
//   [3, 13],
//   [13, 3],
//   [4, 12],
//   [12, 4],
//   [5, 11],
//   [11, 5],
//   [6, 9],
//   [9, 6],
//   [7, 14],
//   [14, 7],
//   [8, 10],
//   [10, 8],
// ];
// app.get("/isPair", (req, res) => {
//   try {
//     res.send(pairs);
//   } catch (error) {
//     res.send({ error: error.message });
//   }
// });
app.get("/new-game", (req, res) => {
  try {
    res.send(doubleCards(singleCards));
  } catch (error) {
    res.send({ error: error.message });
  }
  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  function doubleCards(stringArray: Array<string>) {
    let cards: Array<Card> = [];
    stringArray.forEach((url) => {
      const tempCard: Card = { src: url, pairId: uid() };
      const card1 = Object.assign({}, tempCard); //deep copy (copy by value)
      const card2 = Object.assign({}, tempCard); //deep copy (copy by value)
      // const card1 = tempCard; //copy by ref
      // const card2 = tempCard; //copy by ref

      // tempCard.skjdhgkjdshgkjsd = 45;
      card1.id = uid();
      card2.id = uid();
      cards = [...cards, card1, card2];
      // let anotherTempCard:Card = {src: url, pairId:i};
      // anotherTempCard.id = uid();
      // cards.push(anotherTempCard)
    });
    console.log(cards);
    return cards;
  }
});

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
