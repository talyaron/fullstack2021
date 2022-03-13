
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
<<<<<<< HEAD
bunbleEdtion?:any;
}


let myGames:Array<game>=[
    {name:"Dread Hunger",id:"", standardEdition:110.95},
    {name:"The Forest",id:"", standardEdition:73.95},
    {name:"ELDEN RING",id:"", standardEdition:249.00,deluxeEdition:329.00},
    {name:"Dying Light",id:"", standardEdition:51.69,deluxeEdition:63.48,bunbleEdtion:122.32},
    {name:"Project Zomboid",id:"", standardEdition:73.95,goldEdition:224.95},
    {name:"Sea of Thieves",id:"", standardEdition:179.00},
    {name:"Phasmophobia",id:"", standardEdition:51.95},
    {name:"Assassin's Creed",id:"", standardEdition:59.75,deluxeEdition:74.50,goldEdition:99.75},
    {name:"Fall Guys: Ultimate Knockout",id:"", standardEdition:29.50,bunbleEdtion:122.32}
=======
bundleEdition?:any;
}


let games:Array<game>=[
    {name:"Dread Hunger",id:1, standardEdition:110.95},
    {name:"The Forest",id:2, standardEdition:73.95},
    {name:"ELDEN RING",id:3, standardEdition:249.00,deluxeEdition:329.00},
    {name:"Dying Light",id:4, standardEdition:51.69,deluxeEdition:63.48,bundleEdition:122.32},
    {name:"Project Zomboid",id:5, standardEdition:73.95,goldEdition:224.95},
    {name:"Sea of Thieves",id:6, standardEdition:179.00},
    {name:"Phasmophobia",id:7, standardEdition:51.95},
    {name:"Assassin's Creed",id:8, standardEdition:59.75,deluxeEdition:74.50,goldEdition:99.75},
    {name:"Fall Guys: Ultimate Knockout",id:9, standardEdition:29.50,bundleEdition:122.32}
>>>>>>> parent of 98e351d9 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)
]

let games=addedId(myGames)

function uid() {
    return Date.now().toString(36) + Math.random().toString(36);
}

function addedId(myGames){
    let gameArray=[]
    myGames.forEach((game)=>{
        const tempObj={name:game.name,standardEdition:game.standardEdition,deluxeEdition:game.deluxeEdition,goldEdition:game.goldEdition,bunbleEdtion:game.bunbleEdtion};
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
<<<<<<< HEAD
    const newbunbleEdtion=req.body.bunbleEdtion;
    const games=addGame(newname,newStandardEdition,newdeluxeEdition,newgoldEdition,newbunbleEdtion)
=======
    const newbundleEdition=req.body.bundleEdition;
    const games=addGame(newname,newStandardEdition,newdeluxeEdition,newgoldEdition,newbundleEdition)
>>>>>>> parent of 98e351d9 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)
    res.send(games)

})

app.post('/delete-game',(req,res)=>{
 const {name,id}=req.body;

<<<<<<< HEAD
 const games=deleteGame({name,id})
 res.send(games)
=======
})

app.get('/get-game-by-id',(req,res)=>{
    const searchedId=req.query.id;
    const games=getGameById(searchedId)
    res.send(games)
>>>>>>> parent of 98e351d9 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)

})

app.patch('/update-game',(req,res)=>{
<<<<<<< HEAD
       
    const newStandardEdition=req.body.standardEdition;
    const newdeluxeEdition=req.body.deluxeEdition;
    const newgoldEdition=req.body.goldEdition;
    const newbunbleEdtion=req.body.bunbleEdtion;
    const games=updateGame(newStandardEdition,newdeluxeEdition,newgoldEdition,newbunbleEdtion)
=======
    
    const newStandardEdition=req.body.standardEdition;
    const newdeluxeEdition=req.body.deluxeEdition;
    const newgoldEdition=req.body.goldEdition;
    const newbundleEdition=req.body.bundleEdition;
    const id=req.body.id;
    
    updateGame(newStandardEdition,newdeluxeEdition,newgoldEdition,newbundleEdition,id)
>>>>>>> parent of 98e351d9 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)
    res.send(games)

})

<<<<<<< HEAD
function addGame(name,standardEdition,deluxeEdition,goldEdition,bunbleEdtion){
    games.push({name,standardEdition,deluxeEdition,goldEdition,bunbleEdtion})
=======
function addGame(name,standardEdition,deluxeEdition,goldEdition,bundleEdition){
    let i=games.length;
    games.push({name,standardEdition,deluxeEdition,goldEdition,bundleEdition,id: i+1})
>>>>>>> parent of 98e351d9 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)
    return games
   

}


function deleteGame(gameId){  
    games.filter(game=> game.id!== gameId);
    
    return games;

    
}

<<<<<<< HEAD
function updateGame(standardEdition,deluxeEdition,goldEdition,bunbleEdtion){


=======
function getGameById(searchedId){

    if(searchedId){
        const foundGame=games.findIndex((game)=> game.id==searchedId);
    return(games[foundGame])
    }else{
        return games
    }
    
}

function updateGame(standardEdition,deluxeEdition,goldEdition,bundleEdition,id){

const index= games.findIndex((game)=> game.id==id)
if (index>-1){
  games[index]={standardEdition,deluxeEdition,goldEdition,bundleEdition,id} 
    
 }
>>>>>>> parent of 98e351d9 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)
}

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
