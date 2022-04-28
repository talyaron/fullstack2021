//import React from 'react';
import logo from './logo.svg';
import './view/styles/global.scss'
import Box from './view/components/Box';

interface BoxProps {
  title:string;
  text:string;
  img:string;
}

const boxes:Array<BoxProps> = [
  {title:'aaa', text:'bbb',img:'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cgn/cgn01251/k/112.jpg'},
  {title:'aaa', text:'bbb',img:'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now00367/r/10.jpg'},
  {title:'aaa', text:'bbb',img:'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now00367/r/10.jpg'},
  {title:'aaa', text:'bbb',img:'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now00367/r/10.jpg'}
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {boxes.map((box,i) =>  <Box key = {i} title={box.title} text={box.text} img={box.img} />)}
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
