import React, { useState, useEffect } from 'react';
import './App.css';
import Switch from '@mui/material/Switch';



function App() {

  const [boo, setBoo] = useState(true);

  return (
    <div className={boo?"App":"App AppDark"}>
      <div className='container '>
        <p>TOGGLE DARK MODE</p>
      <Switch onClick={()=>setBoo(!boo)}/>
      </div>
    </div>
  );
}

export default App;
