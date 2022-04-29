import React from 'react';
// import logo from './logo.svg';
import img1 from './Views/images/img1.png';
import img2 from './Views/images/img2.png';
import img3 from './Views/images/img3.png';
import img4 from './Views/images/img4.png';
import img5 from './Views/images/img5.png';
import img6 from './Views/images/img6.png';
import img7 from './Views/images/img7.png';
import img8 from './Views/images/img8.png';

import './Views/styles/global.scss';

import Header from './Views/Componants/Header';
import Footer from './Views/Componants/Footer';
import Card from './Views/Componants/Card';

interface CardProps {
  img: String;
  text: String;
}

const cards:Array<CardProps> = [
  { img: img1, text: '"fullStack"' },
  { img: img2, text: 'Bug Fixing' },
  { img: img3, text: 'Programmin is easy!!' },
  { img: img4, text: '"HTML Programming"' },
  { img: img5, text: 'I code everything by myself!' },
  { img: img6, text: 'Z-index' },
  { img: img7, text: 'I always understand' },
  { img: img8, text: 'Me in the last 6 months' }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <Header text='SW Developers GAGS'/>

        <div className='container'>
          {cards.map((card, i) => {return <Card key={i} img={card.img} text={card.text}/>})}
        </div>

        <Footer></Footer>


      </header>
    </div>
  );
}

export default App;
