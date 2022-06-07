import {useState , useEffect} from 'react';
import Button from '@mui/material/Button';
import Cards from './views/components/Cards';
import './App.scss';
import Cardsfirst from './views/components/Cardsfirst'

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
    {card:"hearts ace" , value:14 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cards-A-Heart.svg/1200px-Cards-A-Heart.svg.png'},
    {card:"hearts two" , value:2 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Playing_card_heart_2.svg/614px-Playing_card_heart_2.svg.png'},
    {card:"hearts three" , value:3, id:uid() , url:'https://media.istockphoto.com/photos/three-of-hearts-playing-card-picture-id93429074?k=20&m=93429074&s=170667a&w=0&h=_FlUQaMTSat2vEuO3UILdqQZx-uy5gTS-dPQFi21nPM='},
    {card:"hearts four" , value:4 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Cards-4-Heart.svg/1200px-Cards-4-Heart.svg.png'},
    {card:"hearts five" , value:5 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Cards-5-Heart.svg/1200px-Cards-5-Heart.svg.png'},
    {card:"hearts six" , value:6 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Cards-6-Heart.svg/1200px-Cards-6-Heart.svg.png'},
    {card:"hearts seven" , value:7 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Cards-7-Heart.svg/1200px-Cards-7-Heart.svg.png'},
    {card:"hearts eight" , value:8 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Cards-8-Heart.svg/1200px-Cards-8-Heart.svg.png'},
    {card:"hearts nine" , value:9 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Cards-9-Heart.svg/1200px-Cards-9-Heart.svg.png'},
    {card:"hearts ten" , value:10 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Cards-10-Heart.svg/1200px-Cards-10-Heart.svg.png'},
    {card:"hearts jack" , value:11 , id:uid() , url:'http://s27.postimg.cc/oe5eebllr/jackhearts.jpg'},
    {card:"hearts queen" , value:12 , id:uid() , url:'https://i.pinimg.com/236x/32/57/ef/3257ef8d60cf63b37ce9ff520b2e2b5d.jpg'},
    {card:"hearts king" , value:13 , id:uid() , url:'http://s27.postimg.cc/ullds86qn/kinghearts.jpg'},
    {card:"spade ace" , value:14 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Cards-A-Spade.svg/250px-Cards-A-Spade.svg.png'},
    {card:"spade two" , value:2 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Cards-2-Spade.svg/1200px-Cards-2-Spade.svg.png'},
    {card:"spade three" , value:3, id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Cards-3-Spade.svg/1200px-Cards-3-Spade.svg.png'},
    {card:"spade four" , value:4 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Cards-4-Spade.svg/1200px-Cards-4-Spade.svg.png'},
    {card:"spade five" , value:5 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Cards-5-Spade.svg/1200px-Cards-5-Spade.svg.png'},
    {card:"spade six" , value:6 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Cards-6-Spade.svg/1200px-Cards-6-Spade.svg.png'},
    {card:"spade seven" , value:7 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Cards-7-Spade.svg/1200px-Cards-7-Spade.svg.png'},
    {card:"spade eight" , value:8 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Cards-8-Spade.svg/1200px-Cards-8-Spade.svg.png'},
    {card:"spade nine" , value:9 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Cards-9-Spade.svg/1200px-Cards-9-Spade.svg.png'},
    {card:"spade ten" , value:10 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Cards-10-Spade.svg/1200px-Cards-10-Spade.svg.png'},
    {card:"spade jack" , value:11 , id:uid() , url:'https://i.pinimg.com/564x/00/d8/86/00d8864b3739394def3173abfacf920a.jpg'},
    {card:"spade queen" , value:12 , id:uid() , url:'https://i.pinimg.com/236x/be/af/26/beaf267276f6334757a8f944a386b25f.jpg'},
    {card:"spade king" , value:13 , id:uid() , url:'https://i.pinimg.com/236x/77/c7/33/77c73303bf9e5fc3b8a00f1480db4060.jpg'},
    {card:"diamond ace" , value:14 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Cards-A-Diamond.svg/1200px-Cards-A-Diamond.svg.png'},
    {card:"diamond two" , value:2 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Cards-2-Diamond.svg/1200px-Cards-2-Diamond.svg.png'},
    {card:"diamond three" , value:3, id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Cards-3-Diamond.svg/250px-Cards-3-Diamond.svg.png'},
    {card:"diamond four" , value:4 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Cards-4-Diamond.svg/250px-Cards-4-Diamond.svg.png'},
    {card:"diamond five" , value:5 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Cards-5-Diamond.svg/640px-Cards-5-Diamond.svg.png'},
    {card:"diamond six" , value:6 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Cards-6-Diamond.svg/250px-Cards-6-Diamond.svg.png'},
    {card:"diamond seven" , value:7 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Cards-7-Diamond.svg/1200px-Cards-7-Diamond.svg.png'},
    {card:"diamond eight" , value:8 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Cards-8-Diamond.svg/1200px-Cards-8-Diamond.svg.png'},
    {card:"diamond nine" , value:9 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Cards-9-Diamond.svg/1200px-Cards-9-Diamond.svg.png'},
    {card:"diamond ten" , value:10 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Cards-10-Diamond.svg/1200px-Cards-10-Diamond.svg.png'},
    {card:"diamond jack" , value:11 , id:uid() , url:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/73cd599f-99f9-4d9d-8536-6455717abba1/d9v7i8p-a87da223-ef55-4c5f-a604-0decddd4b5fb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzczY2Q1OTlmLTk5ZjktNGQ5ZC04NTM2LTY0NTU3MTdhYmJhMVwvZDl2N2k4cC1hODdkYTIyMy1lZjU1LTRjNWYtYTYwNC0wZGVjZGRkNGI1ZmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Qsrysurz0KrR8CrKGTrWMU8dfa7Jnt-BvGz6RzEODqs'},
    {card:"diamond queen" , value:12, id:uid() , url:'https://images-na.ssl-images-amazon.com/images/I/71AqLQYRvcL.jpg'},
    {card:"diamond king" , value:13 , id:uid() , url:'https://i.pinimg.com/originals/2b/8a/e6/2b8ae67b67e96dab427bb0e6ad67f825.jpg'},
    {card:"clubs ace" , value:14 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Cards-A-Club.svg/1200px-Cards-A-Club.svg.png'},
    {card:"clubs two" , value:2 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Cards-2-Club.svg/1200px-Cards-2-Club.svg.png'},
    {card:"clubs three" , value:3, id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Cards-3-Club.svg/1200px-Cards-3-Club.svg.png'},
    {card:"clubs four" , value:4 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Cards-4-Club.svg/1200px-Cards-4-Club.svg.png'},
    {card:"clubs five" , value:5 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Cards-5-Club.svg/1200px-Cards-5-Club.svg.png'},
    {card:"clubs six" , value:6 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Cards-6-Club.svg/1200px-Cards-6-Club.svg.png'},
    {card:"clubs seven" , value:7 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Cards-7-Club.svg/1200px-Cards-7-Club.svg.png'},
    {card:"clubs eight" , value:8 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Cards-8-Club.svg/1200px-Cards-8-Club.svg.png'},
    {card:"clubs nine" , value:9 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Cards-9-Club.svg/1200px-Cards-9-Club.svg.png'},
    {card:"clubs ten" , value:10 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Cards-10-Club.svg/1200px-Cards-10-Club.svg.png'},
    {card:"clubs jack" , value:11 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/37_J_di_fiori.jpg/1200px-37_J_di_fiori.jpg'},
    {card:"clubs queen" , value:12 , id:uid() , url:'http://1.bp.blogspot.com/_j8lNOfhpUoI/SFqD0iqynaI/AAAAAAAAACE/nWezEFz2aIA/s320/DamadePaus.gif'},
    {card:"clubs king" , value:13 , id:uid() , url:'https://upload.wikimedia.org/wikipedia/commons/2/25/Poker-sm-242-Kc.png'}, 
  ])
  const [start , setStart] = useState(false)
  const [cardsPlayer , setCardsPlayer] = useState([])
  const [cardsOpponent , setCardsOpponent] = useState([])
  const [clickOnDeck , setOnClickDeck] = useState(false)
  const [newGame , setNewGame] = useState(false)
  const backgroundImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM0Q2eXz5ueJsCn_8cK1zmao48wCow1QMN1HlUMri0vXaXjEzTlwTBw_mBaOjRaD_v_BU&usqp=CAU'
  const [cardsMain , setCardsMain] = useState([
    {id:uid() , backgroundImage:backgroundImage},
    {id:uid() , backgroundImage:backgroundImage},
    {id:uid() , backgroundImage:backgroundImage},
    {id:uid() , backgroundImage:backgroundImage},
    {id:uid() , backgroundImage:backgroundImage},
    {id:uid() , backgroundImage:backgroundImage},
    {id:uid() , backgroundImage:backgroundImage},
    {id:uid() , backgroundImage:backgroundImage},
    {id:uid() , backgroundImage:backgroundImage},
    {id:uid() , backgroundImage:backgroundImage},
    {id:uid() , backgroundImage:backgroundImage},
    {id:uid() , backgroundImage:backgroundImage},
    {id:uid() , backgroundImage:backgroundImage},
    {id:uid() , backgroundImage:backgroundImage},
    {id:uid() , backgroundImage:backgroundImage},
    {id:uid() , backgroundImage:backgroundImage},
    {id:uid() , backgroundImage:backgroundImage},
    {id:uid() , backgroundImage:backgroundImage},
    {id:uid() , backgroundImage:backgroundImage},
    {id:uid() , backgroundImage:backgroundImage},
  ])

  function startGame(ev:any){

    const newDeck = [...cardsDeck].sort(() => Math.random() - 0.5)
    setCards(newDeck);
    const middleIndex = Math.ceil(newDeck.length / 2);
    const firstHalf:any = newDeck.splice(0 , middleIndex);   
    const secondHalf:any = newDeck.splice(-middleIndex);
    setCardsPlayer(firstHalf);
    setCardsOpponent(secondHalf);
      setNewGame(!newGame);
  }

  function startGameTwo(ev:any){
 
    const playerDeck = cardsPlayer;
    const oppDeck = cardsOpponent;
    const tempList = playerDeck.concat(oppDeck);
    const newDeck = tempList.sort(() => Math.random() - 0.5);
    setCards(newDeck);
     const middleIndex = Math.ceil(newDeck.length / 2);
     const firstHalf:any = newDeck.splice(0 , middleIndex);   
    const secondHalf:any = newDeck.splice(-middleIndex);    
    setCardsPlayer(firstHalf);
    setCardsOpponent(secondHalf);
    setOnClickDeck(false)
  }  
    return (
      <div className="App"> 
        <Button className='App-newGameBtn' color='success' variant="contained" size="large" onClick={newGame?startGameTwo:startGame}>New Game</Button>
        {cardsMain.map((card,i) => {
          return(<Cardsfirst key={i} count={i} setStart={setStart} newGame={newGame} background={card.backgroundImage} /> )})}
        
       
      </div>
      
    );
  }

    
    


export default App;

