import React from 'react';
import logo from './logo.svg';
// import './App.css';
import './view/styles/global.scss';
import Box from './view/components/Box';
// import Card from './view/components/Card';
import Wrapper from './view/components/Wrapper';
import { title } from 'process';

const arr:Array<CardInterface> = [
  { img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now00367/r/10.jpg', title: 'Vitamin D', price: '69.00' },
  { img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cgn/cgn01252/r/97.jpg', title: 'Vitamin E', price: '59.00' },
  { img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/nac/nac00306/r/30.jpg', title: 'Vitamin C', price: '39.00' },
];

export interface CardInterface {
  img: string,
  title: string,
  price: string
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Box text='aaa' title='bbb' />
        <Wrapper cards={arr} />
        {/* {cards.map((card,i) => { return <Card key={i} img={card.img} title={card.title} price={card.price}/>})} */}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
