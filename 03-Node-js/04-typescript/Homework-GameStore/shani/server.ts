
import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());

interface game{
name:string;
standardEdition?:number;
deluxeEdition?:number;
goldEdition?:number;
bunbleEdtion?:number;
}


const games:Array<game>=[
    {name:"Dread Hunger", standardEdition:110.95},
    {name:"The Forest",standardEdition:73.95},
    {name:"ELDEN RING",standardEdition:249.00,deluxeEdition:329.00},
    {name:"Dying Light",standardEdition:51.69,deluxeEdition:63.48,bunbleEdtion:122.32},
    {name:"Project Zomboid",standardEdition:73.95,goldEdition:224.95},
    {name:"Sea of Thieves",standardEdition:179.00},
    {name:"Phasmophobia",standardEdition:51.95},
    {name:"Assassin's Creed",standardEdition:59.75,deluxeEdition:74.50,goldEdition:99.75},
    {name:"Fall Guys: Ultimate Knockout",standardEdition:29.50,bunbleEdtion:122.32}
]
    
app.get('/get-games', (req, res) => {

 res.send(games);

 
});

app.post('/add-new-game',(req,res)=>{
    
    const newname=req.body.name;
    // const newStandardEdition=req.body.standardEdition;
    // const deluxeEdition=req.body.deluxeEdition;
    const games=addGame(newname)
    res.send(games)

})

function addGame(name){
    games.push({name})
    return games
   

}

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
