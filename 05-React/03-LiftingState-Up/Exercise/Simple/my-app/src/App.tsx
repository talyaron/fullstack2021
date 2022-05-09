import React from 'react';
import Form from './view/components/Form';
import './App.scss';
import { useState } from 'react';

function App() {

  const background = document.querySelector('.App')
  const myText = document.querySelector('.myText')


  const [color, setColor] = useState('');
  const [tColor, setTcolor] = useState('');

  console.log(color, tColor)
  // background.style.background = color;
  // myText.style.Color = tColor;


  return (
    <div className="App">
      <Form BackGcolor={setColor} textColor={setTcolor} />
    </div>
  );
}

export default App;
