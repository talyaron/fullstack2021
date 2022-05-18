import React,{useState} from 'react';

import './App.css';
import {Switch} from "@mui/material";
function App() {
  const [mode,setMode]=useState(true)
  return (
    <div className={mode? 'dark':'light'}>
    <header className='App-header'>
    {mode?<p>DARK MODE</p>:<p>LIGHT MODE</p>}
    <button onClick={()=>setMode(!mode)}>SWITCH</button>
    <Switch color='primary' onChange={()=>setMode(!mode)}/>
    <Switch color='secondary' onChange={()=>setMode(!mode)}/>
    <Switch color='error' onChange={()=>setMode(!mode)}/>
    <input type="checkbox"
                    onChange={()=>setMode(!mode)} />
    </header>
    </div>
  );
}

export default App;
