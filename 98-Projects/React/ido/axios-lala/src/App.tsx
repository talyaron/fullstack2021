import axios from 'axios';
import {useState , useEffect} from 'react';
import Button from '@mui/material/Button';
import Cards from './views/components/Cards';
import './App.scss';

const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
interface Card{
  card: string;
  value: number;
  id: string;
  url: string;
}


function App() {

  const [cardsDeck , setCards] = useState([
    {card:"ace" , value:14 , id:uid() , url:''},
    {card:"two" , value:2 , id:uid() , url:''},
    {card:"three" , value:3, id:uid() , url:''},
    {card:"four" , value:4 , id:uid() , url:''},
    {card:"five" , value:5 , id:uid() , url:''},
    {card:"six" , value:6 , id:uid() , url:''},
    {card:"seven" , value:7 , id:uid() , url:''},
    {card:"eight" , value:8 , id:uid() , url:''},
    {card:"nine" , value:9 , id:uid() , url:''},
    {card:"ten" , value:10 , id:uid() , url:''},
    {card:"prince" , value:11 , id:uid() , url:''},
    {card:"queen" , value:12 , id:uid() , url:''},
    {card:"king" , value:13 , id:uid() , url:''},
    {card:"ace" , value:14 , id:uid() , url:''},
    {card:"two" , value:2 , id:uid() , url:''},
    {card:"three" , value:3, id:uid() , url:''},
    {card:"four" , value:4 , id:uid() , url:''},
    {card:"five" , value:5 , id:uid() , url:''},
    {card:"six" , value:6 , id:uid() , url:''},
    {card:"seven" , value:7 , id:uid() , url:''},
    {card:"eight" , value:8 , id:uid() , url:''},
    {card:"nine" , value:9 , id:uid() , url:''},
    {card:"ten" , value:10 , id:uid() , url:''},
    {card:"prince" , value:11 , id:uid() , url:''},
    {card:"queen" , value:12 , id:uid() , url:''},
    {card:"king" , value:13 , id:uid() , url:''},
    {card:"ace" , value:14 , id:uid() , url:''},
    {card:"two" , value:2 , id:uid() , url:''},
    {card:"three" , value:3, id:uid() , url:''},
    {card:"four" , value:4 , id:uid() , url:''},
    {card:"five" , value:5 , id:uid() , url:''},
    {card:"six" , value:6 , id:uid() , url:''},
    {card:"seven" , value:7 , id:uid() , url:''},
    {card:"eight" , value:8 , id:uid() , url:''},
    {card:"nine" , value:9 , id:uid() , url:''},
    {card:"ten" , value:10 , id:uid() , url:''},
    {card:"prince" , value:11 , id:uid() , url:''},
    {card:"queen" , value:12 , id:uid() , url:''},
    {card:"king" , value:13 , id:uid() , url:''},
    {card:"ace" , value:14 , id:uid() , url:''},
    {card:"two" , value:2 , id:uid() , url:''},
    {card:"three" , value:3, id:uid() , url:''},
    {card:"four" , value:4 , id:uid() , url:''},
    {card:"five" , value:5 , id:uid() , url:''},
    {card:"six" , value:6 , id:uid() , url:''},
    {card:"seven" , value:7 , id:uid() , url:''},
    {card:"eight" , value:8 , id:uid() , url:''},
    {card:"nine" , value:9 , id:uid() , url:''},
    {card:"ten" , value:10 , id:uid() , url:''},
    {card:"prince" , value:11 , id:uid() , url:''},
    {card:"queen" , value:12 , id:uid() , url:''},
    {card:"king" , value:13 , id:uid() , url:''}, 
  ])
  const [cardPlayer , setCardsPlayer] = useState([])
  const [cardOpponent , setCardsOpponent] = useState([])
  const [ClickOnDeck , setOnClickDeck] = useState([false])
  const [newGame , setNewGame] = useState(false)

  function startGame(ev:any){
    console.log(cardsDeck);
    const newDeck = cardsDeck.sort(() => Math.random() - 0.5)
    const middleIndex = Math.ceil(newDeck.length / 2);
    const firstHalf:any = newDeck.splice(0 , middleIndex);   
    const secondHalf:any = newDeck.splice(-middleIndex);
    setCardsPlayer(firstHalf)
    setCardsOpponent(secondHalf);
    console.log(firstHalf);
    console.log(secondHalf);
      setNewGame(!newGame)
  }
  function newGameClick(){
    const NewGame = true;
    setNewGame(NewGame)
  }

  
  if(newGame){
    return(
      <div className="App">
        <header className="App-mainTwo">
        <Button className='App-main-newGameBtn' color='inherit' variant="outlined" size="large" onClick={newGameClick}>New Game</Button>
        <Cards setOnClickDeck={setOnClickDeck}  />
       </header>
      </div>
    );
  }else {
    return (
      <div className="App">
        <header className="App-main">
        <Button className='App-main-newGameBtn' color='inherit' variant="outlined" size="large" onClick={startGame}>New Game</Button>
       </header>
      </div>
    );
  }

    
    
}

export default App;
