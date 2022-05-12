import React, { useState } from 'react';
import Form from './Form';
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  return (
    <div className="App">
      <header className="App-header" style= {{backgroundColor:backgroundColor}}>
        <h1 style={{color:textColor}}>Example text</h1>
        <Form setBackgroundColor={setBackgroundColor} setTextColor={setTextColor} />
      </header>
    </div>
  );
}

export default App;
