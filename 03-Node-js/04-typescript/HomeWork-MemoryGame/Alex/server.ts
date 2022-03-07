import express from 'express';
const app = express();
const port = process.env.PORT || 3000;


interface Cards {
  img: string;
  id: number;
  name: string;
}
let cardDeck: Array<Cards> = [
  {
    img: 'https://images.squarespace-cdn.com/content/v1/547e2c2ee4b04a337ed5f01a/1500349827907-2U4URCSORDHMKWWMX11P/Norman+-+Camera+Test+Frame+Pic.jpg?format=2500w',
    id: 1,
    name: 'buffalo'
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/547e2c2ee4b04a337ed5f01a/1500993110114-5J3ELZZS4MX1862QMM1S/Blossom+%28old+in+chair+2015%29.jpeg?format=2500w',
    id: 2,
    name: 'oldMan'
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/547e2c2ee4b04a337ed5f01a/1564715322286-BDT4Q1VTTYR3JSX8YR24/2011_1030_tallgrass_123.jpg?format=1500w',
    id: 3,
    name: 'parrot'
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/547e2c2ee4b04a337ed5f01a/1626034997426-MTJYAO7ADDOXNJX71DKF/IMG_7022.JPG?format=2500w',
    id: 4,
    name: 'puppeteer'
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/547e2c2ee4b04a337ed5f01a/1564715447884-7U00WD7FMDQCPGVXTCKQ/MVI_9826funnyframe.jpg?format=2500w',
    id: 5,
    name: 'robot'
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/547e2c2ee4b04a337ed5f01a/1499278395471-4WNZIOJ1RYFKAU1RS8UY/IMG_2337.jpg?format=2500w',
    id: 6,
    name: 'rocker'
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/547e2c2ee4b04a337ed5f01a/1500349827907-2U4URCSORDHMKWWMX11P/Norman+-+Camera+Test+Frame+Pic.jpg?format=2500w',
    id: 1,
    name: 'buffalo'
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/547e2c2ee4b04a337ed5f01a/1500993110114-5J3ELZZS4MX1862QMM1S/Blossom+%28old+in+chair+2015%29.jpeg?format=2500w',
    id: 2,
    name: 'oldMan'
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/547e2c2ee4b04a337ed5f01a/1564715322286-BDT4Q1VTTYR3JSX8YR24/2011_1030_tallgrass_123.jpg?format=1500w',
    id: 3,
    name: 'parrot'
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/547e2c2ee4b04a337ed5f01a/1626034997426-MTJYAO7ADDOXNJX71DKF/IMG_7022.JPG?format=2500w',
    id: 4,
    name: 'puppeteer'
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/547e2c2ee4b04a337ed5f01a/1564715447884-7U00WD7FMDQCPGVXTCKQ/MVI_9826funnyframe.jpg?format=2500w',
    id: 5,
    name: 'robot'
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/547e2c2ee4b04a337ed5f01a/1499278395471-4WNZIOJ1RYFKAU1RS8UY/IMG_2337.jpg?format=2500w',
    id: 6,
    name: 'rocker'
  }
]

app.use(express.static("public"));
app.use(express.json()); //use this to get data (body)

app.get('/get-cards', (req, res) => {
  const cardDeck = getCards()
  res.send(cardDeck);
});



function getCards() {
  return cardDeck;
}
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
