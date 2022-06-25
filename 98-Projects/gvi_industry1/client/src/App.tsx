import React, { useState } from 'react';
import logo from './logo.svg';
import './view/Styles/global.scss'; 
import Register from './view/Components/Register';

function App() {
  const [ registerWindow,setRegisterWindow] = useState(false)
  return (
    <Register registerWindow={registerWindow} setRegisterWindow={setRegisterWindow}/>
  );
}

export default App;
