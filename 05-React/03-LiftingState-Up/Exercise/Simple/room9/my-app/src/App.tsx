import { useState } from 'react';
import './App.css';
import Form from './Form';

function App() {

  const [textColor, setTextColor] = useState('')
  const [bodyColor, setBodyColor] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        <p style={{color:textColor,background:bodyColor}}>asjcnsajcnasjcaskcjasbkcjasbcjkbasjjsj jbsakjcbjcsb jsbcjbjsbc sjbjsbajbjsb</p>
        <Form setTextColor={setTextColor} setBodyColor={setBodyColor} />
      </header>
    </div>
  );
}

export default App;
