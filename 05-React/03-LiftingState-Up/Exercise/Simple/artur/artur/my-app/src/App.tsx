import React from 'react';
import './App.css';
import Form from './Form';
import { useState } from "react";


  function App() {
    const [color, setcolor] = useState("");
    const [backgroundcolor, setBackgroundcolor] = useState("");
      
    

    
    
        
   
  
  return (
    <div className="App">

      <header className="App-header" style={{backgroundColor:backgroundcolor}}>
        <p className='text' style={{color:color}}>some text</p>
        <Form  setColor={setcolor} setBackgroundcolor={setBackgroundcolor} />
       
      </header>
     
    </div>
  );
}

export default App;
