import React,{useState} from 'react';

import './App.css';

function App() {
  const [mode,setMode]=useState(true)
  return (
    <div className={mode? 'dark':'light'}>
    <header className='App-header'>
    {mode?<p>DARK MODE</p>:<p>LIGHT MODE</p>}
    <button onClick={()=>setMode(!mode)}>SWITCH</button>
    </header>
    </div>
  );
}

export default App;
