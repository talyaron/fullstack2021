import React from 'react';
import logo from './logo.svg';
import './view/styles/global.scss';
import Box from './view/components/Box';

interface BoxProps {
  img:string;
}

const gags:Array<BoxProps> = [
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzxyNp44jEVlExbW6IrpvuF8eDilg0WxZYnzsom1Bsk71eXEdNzQcUbXTMEX8DyBKXLog&usqp=CAU'},
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzxyNp44jEVlExbW6IrpvuF8eDilg0WxZYnzsom1Bsk71eXEdNzQcUbXTMEX8DyBKXLog&usqp=CAU'},
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzxyNp44jEVlExbW6IrpvuF8eDilg0WxZYnzsom1Bsk71eXEdNzQcUbXTMEX8DyBKXLog&usqp=CAU'},
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzxyNp44jEVlExbW6IrpvuF8eDilg0WxZYnzsom1Bsk71eXEdNzQcUbXTMEX8DyBKXLog&usqp=CAU'},
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzxyNp44jEVlExbW6IrpvuF8eDilg0WxZYnzsom1Bsk71eXEdNzQcUbXTMEX8DyBKXLog&usqp=CAU'},
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzxyNp44jEVlExbW6IrpvuF8eDilg0WxZYnzsom1Bsk71eXEdNzQcUbXTMEX8DyBKXLog&usqp=CAU'},
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzxyNp44jEVlExbW6IrpvuF8eDilg0WxZYnzsom1Bsk71eXEdNzQcUbXTMEX8DyBKXLog&usqp=CAU'},
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzxyNp44jEVlExbW6IrpvuF8eDilg0WxZYnzsom1Bsk71eXEdNzQcUbXTMEX8DyBKXLog&usqp=CAU'}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React GAG
      </header>
      <div className='body'>
        {gags.map((gag,i) => <Box key = {i} img ={gag.img} />)}
      </div>
    </div>
  );
}

export default App;
