import logo from './logo.svg';
import { useState } from 'react';
import Box from './View/Components/Box';
import './View/styles/Global.scss'


function App() { 
  return (
    <div className="App">
      <Box
        title='new title'
        text='new text'
      />
    </div>
  );

}

export default App;
