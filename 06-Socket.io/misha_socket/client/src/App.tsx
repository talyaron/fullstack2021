import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import {socket} from './index';

function App() {

  const [textPar, setTextPar] = useState('start');

  useEffect(()=>{
    (async () => {
      const { data } = await axios.get('/api')
      console.log(data);
    })();

    socket.on('msg',({text})=>{
      console.log(text)
      setTextPar(text);
    })
    return () => {
      console.log("off");
      socket.off("hi2");
      socket.off("counter");
    };
  },[])


  function handleText(ev:any){
    const text = ev.target.value;
    socket.emit('msg',{text})
  }


  return (
    <div className='App'>
      <div className="message-container">

      </div>
      <form id="send-container">
        <input type="text" id='message-input' />
        <button type='submit' id='send-button' onSubmit={handleText}>Send</button>
      </form>
    </div>
  );
}

export default App;
