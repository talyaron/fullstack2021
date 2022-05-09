
import './view/styles/global.scss';
import Colors from "./Colors";
import { useState } from 'react';


function App() {

  const [color, setColor] = useState('white')
  const [background, setBackground] = useState('pink')

  return (
    <div className="App" style={{
      backgroundColor: background
    }}>
      <h1 style={{
        color: color
      }}>hi
      </h1>

      <Colors setColor={setColor} setBackground={setBackground} />
    </div>
  );
}

export default App;
