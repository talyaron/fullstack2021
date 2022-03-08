import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static("public"));


// const cards=[
//     {name:"Harry Potter",pairId:"1",imgUrl:"img/HarryCard.gif"},
//     {name:"Harry Potter",pairId:"1",imgUrl:"img/HarryCard.gif"},
//     {name:"Hermione Granger",pairId:"2",imgUrl:"img/HermioneCard.gif"},
//     {name:"Hermione Granger",pairId:"2",imgUrl:"img/HermioneCard.gif"},
//     {name:"Ron Weasley",pairId:"3",imgUrl:"/img/RonCard.gif"},
//     {name:"Ron Weasley",pairId:"3",imgUrl:"/img/RonCard.gif"},
//     {name:"Severus Snape",pairId:"4",imgUrl:"/img/SnapeCard.gif"},
//     {name:"Severus Snape",pairId:"4",imgUrl:"/img/SnapeCard.gif"},
//     {name:"Albus Dumbledore",pairId:"5",imgUrl:"/img/DumbledoreCard.gif"},
//     {name:"Albus Dumbledore",pairId:"5",imgUrl:"/img/DumbledoreCard.gif"},
//     {name:"Sirius Black",pairId:"6",imgUrl:"/img/SiriusCard.gif"},
//     {name:"Sirius Black",pairId:"6",imgUrl:"/img/SiriusCard.gif"},
//     {name:"Remus Lupin",pairId:"7",imgUrl:"/img/RemusCard.gif"},
//     {name:"Remus Lupin",pairId:"7",imgUrl:"/img/RemusCard.gif"},
//     {name:"Draco Malfoy",pairId:"8",imgUrl:"/img/DracoCard.gif"},
//     {name:"Draco Malfoy",pairId:"8",imgUrl:"/img/DracoCard.gif"}
   
// ];

interface Card {
  imgUrl: string;
  pairId: string;
  id?: any;
  
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36);
}

const cardUrls=[
  "img/HarryCard.gif",
  "img/HermioneCard.gif",
  "/img/RonCard.gif",
  "/img/SnapeCard.gif",
  "/img/DumbledoreCard.gif",
  "/img/SiriusCard.gif",
  "/img/RemusCard.gif",
  "/img/DracoCard.gif"
]

function doubleCards(stringArray:Array<string>){  
  let cards:Array<Card>=[];
  stringArray.forEach((url)=>{
    const tempCard:Card={imgUrl:url,pairId:uid()}; //we built an object
    const card1= Object.assign({},tempCard); //deep copy (copy by value)
    const card2= Object.assign({},tempCard); //deep copy (copy by value)
  })
}






app.get("/new-game", (req, res) => {
 
  const shuffledDeck= shuffleCards(cards)
  res.send(shuffledDeck);
  
});

function shuffleCards(cards){
  for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = cards[i];
        cards[i] =cards[j];
        cards[j] = temp;
      }
    return cards

}


//more simple way to shuffle 
// function shuffleCards(MemoryCards){
//   return MemoryCards.sort(()=> .5 - Math.random())
// }


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
