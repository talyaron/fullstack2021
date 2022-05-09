import { useState } from 'react';
import './App.css';
import Lift from './Lift';

function App() {

  const [screen, setscreen] = useState('');
  const [text, settext] = useState('');


  return (
    <div className="App" style={{backgroundColor:`${screen}`}}>
      <h1 style={{color:`${text}`}} >text</h1>

      <Lift setscreen={setscreen} settext={settext} />
    </div>
  );
}

export default App;
