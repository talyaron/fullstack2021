import React ,{useState}from 'react';
import logo from './logo.svg';
import './View/styles/global.scss';

import Ball from "./View/Components/Ball";
import Counter from "./View/Components/Counter";

function App() {

  const [counter,setCounter]=useState(0)
  return (
    <div className="App">
     <Counter counter={counter}/>
     <Ball  counter={counter} setCounter={setCounter}/>

     
    </div>
  );
}

export default App;
