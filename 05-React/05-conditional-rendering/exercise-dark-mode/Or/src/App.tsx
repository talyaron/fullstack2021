import {Switch} from '@mui/material';
import { useState, useEffect } from "react";
import darkLogo from './dark-logo.svg';
import lightLogo from './light-logo.svg';
import "./App.css";


function App() {
  const [theme , setTheme] = useState(true)

  useEffect(){=>{},[]}
  

  
    return (
      <div className="App">
        <header className={theme?"App-header-dark":'App-header-light'}>
          <img src={theme?darkLogo:lightLogo}  className="App-logo" alt="logo" />
          <Switch onChange={()=>{setTheme(!theme)}} >dark/light />
        </header>
      </div>
    );
  
  
 
}

export default App;
