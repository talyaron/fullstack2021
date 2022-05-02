import React from 'react';
import logo from './logo.svg';
import './view/styles/global.scss';
import Box from './view/components/Box';

interface BoxProps {
  img:string;
}

const gags:Array<BoxProps> = [
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzxyNp44jEVlExbW6IrpvuF8eDilg0WxZYnzsom1Bsk71eXEdNzQcUbXTMEX8DyBKXLog&usqp=CAU'},
  {img:'https://hookagency.com/wp-content/webpc-passthru.php?src=https://hookagency.com/wp-content/uploads/2021/10/do-it-cheaper-700x538.jpg&nocache=1'},
  {img:'https://hookagency.com/wp-content/webpc-passthru.php?src=https://hookagency.com/wp-content/uploads/2016/04/2-states-of-every-web-designer-700x523.jpg&nocache=1'},
  {img:'https://i1.wp.com/www.divjot.co/wp-content/uploads/2018/11/7.jpg?resize=600%2C449&ssl=1'},
  {img:'https://media2.giphy.com/media/SpopD7IQN2gK3qN4jS/giphy.gif'},
  {img:'https://media.giphy.com/media/26xBy23gp6jPrzyes/giphy.gif'},
  {img:'https://media.giphy.com/media/26AHC7M67XKUCN4Wc/giphy.gif'},
  {img:'https://iruntheinternet.com/lulzdump/images/spiderman-I-do-web-design-reaction-Andrew-Garfield-web-designer-14174829600.gif'}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React GAG
      </header>
      <div className='mems'>
        {gags.map((gag,i) => <Box key = {i} img ={gag.img} />)}
      </div>
      <footer className='footer'>
       <p>For more funny Mems & Gif' click <a href='https://hookagency.com/blog/15-web-design-reaction-gifs-memes/'>here</a></p>
      </footer>
    </div>
  );
}

export default App;
