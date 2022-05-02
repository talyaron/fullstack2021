import logo from './logo.svg';
import './view/styles/global.scss';
import Box from './view/Components/Box'
import { BoxProps } from './view/Components/Box';//interface

const boxes:Array<BoxProps>=[
  {text:'FIFA 22',img:'https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/02/FIFA22-Name-change-incoming.jpg',price:'19$'},
  {text:'fortnite',img:'https://fscl01.fonpit.de/userfiles/7711600/image/fortnite.jpg',price:'12$'},
  {text:'NBA 2K21',img:'https://cdn.2kgames.com/web/nba.2k.com/images/2k21/nba2k21_fob_STD_CG_1.jpg',price:'15$'},
]


function App() {
  return (
    <div className="box">
      <header className="App-header">
     {boxes.map((box,i)=>{return <Box key={i} img={box.img} price={box.price} text={box.text}/> })}
      </header>
    </div>
  );
}

export default App;

