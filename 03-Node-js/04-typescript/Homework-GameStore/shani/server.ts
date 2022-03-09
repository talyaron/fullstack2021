
import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());

interface game{
name:string;
id?:string;
standardEdition?:any;
deluxeEdition?:any;
goldEdition?:any;
bundleEdition?:any;
}


let myGames:Array<game>=[
    {name:"Dread Hunger",id:"", standardEdition:110.95},
    {name:"The Forest",id:"", standardEdition:73.95},
    {name:"ELDEN RING",id:"", standardEdition:249.00,deluxeEdition:329.00},
    {name:"Dying Light",id:"", standardEdition:51.69,deluxeEdition:63.48,bundleEdition:122.32},
    {name:"Project Zomboid",id:"", standardEdition:73.95,goldEdition:224.95},
    {name:"Sea of Thieves",id:"", standardEdition:179.00},
    {name:"Phasmophobia",id:"", standardEdition:51.95},
    {name:"Assassin's Creed",id:"", standardEdition:59.75,deluxeEdition:74.50,goldEdition:99.75},
    {name:"Fall Guys: Ultimate Knockout",id:"", standardEdition:29.50,bundleEdition:122.32}
]

let games=addedId(myGames)

function uid() {
    return Date.now().toString(36) + Math.random().toString(36);
}

function addedId(myGames){
    let gameArray=[]
    myGames.forEach((game)=>{
        const tempObj={name:game.name,standardEdition:game.standardEdition,deluxeEdition:game.deluxeEdition,goldEdition:game.goldEdition,bundleEdition:game.bundleEdition};
        const theGame:any=Object.assign({},tempObj);
        theGame.id=uid();
        gameArray=[...gameArray,theGame];
    })

    return gameArray;
}
    
app.get('/get-games', (req, res) => {
   

 res.send(games);

 
});




app.post('/add-new-game',(req,res)=>{
    
    const newname=req.body.name;    
    const newStandardEdition=req.body.standardEdition;
    const newdeluxeEdition=req.body.deluxeEdition;
    const newgoldEdition=req.body.goldEdition;
    const newbundleEdition=req.body.bundleEdition;
    const games=addGame(newname,newStandardEdition,newdeluxeEdition,newgoldEdition,newbundleEdition)
    res.send(games)

})

app.post('/delete-game',(req,res)=>{
 const {name,id}=req.body;

 const games=deleteGame({name,id})
 res.send(games)

})

app.patch('/update-game',(req,res)=>{
    const name=req.body.name;  
    const newStandardEdition=req.body.standardEdition;
    const newdeluxeEdition=req.body.deluxeEdition;
    const newgoldEdition=req.body.goldEdition;
    const newbundleEdition=req.body.bundleEdition;
    const id=req.body.id;
    const games=updateGame(name,newStandardEdition,newdeluxeEdition,newgoldEdition,newbundleEdition,id)
    res.send(games)

})

function addGame(name,standardEdition,deluxeEdition,goldEdition,bundleEdition){
    games.push({name,standardEdition,deluxeEdition,goldEdition,bundleEdition})
    return games
   

}


function deleteGame(gameId){  
    games.filter(game=> game.id!== gameId);
    
    return games;

    
}

function updateGame(name,standardEdition,deluxeEdition,goldEdition,bundleEdition,id){

const index= games.findIndex((game)=> game.id==id)
if (index>-1){
    games[index]={name,standardEdition,deluxeEdition,goldEdition,bundleEdition,id}
}
}

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
