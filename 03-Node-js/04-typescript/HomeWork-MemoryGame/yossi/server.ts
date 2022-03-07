import express from "express";
const app = express();
const port: number = 3000;
app.use(express.json());

app.use(express.static("public"));


const cards = [
  { img: "images/Batman.png", id: "1" },
  { img: "images/Batman.png", id: "1" },
  { img: "images/BlackWidow.png", id: "2" },
  { img: "images/BlackWidow.png", id: "2" },
  { img: "images/CaptainAmerica.png", id: "3" },
  { img: "images/CaptainAmerica.png", id: "3" },
  { img: "images/Colossus.png", id: "4" },
  { img: "images/Colossus.png", id: "4" },
  { img: "images/Zelensky.png", id: "5" },
  { img: "images/Zelensky.png", id: "5" },
  { img: "images/AntMan.png", id: "6" },
  { img: "images/AntMan.png", id: "6" },
];


app.get("/get-cards", (req: any, res: any) => {
  const shuffledArray = cards.sort((a, b) => 0.5 - Math.random());

  res.send(cards);
});


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});


