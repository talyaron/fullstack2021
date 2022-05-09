import React, { useState } from 'react';

import './App.css';
import Form from "./Views/Components/Form"



function App() {
  const [bodyColor,setBodyColor]=useState("");
  const[textColor,setTextColor]=useState("")

  return (
    <div className="App">

      <header style={{backgroundColor:bodyColor}} className="App-header">
        {textColor?<h1 style={{color:textColor}}>HELLO WORLD</h1>:null}
        
         <Form setBodyColor={setBodyColor} setTextColor={setTextColor}/>
      </header>
    </div>
  );
}

export default App;
