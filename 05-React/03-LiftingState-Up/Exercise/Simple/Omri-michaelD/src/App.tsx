import Form from './view/components/Form';
import './App.scss';
import { useState } from 'react';

function App() {

  const [backgroudColor, setBackground] = useState('');
  const [textColor, setTextColor] = useState('');

  return (
    <div style={{backgroundColor: backgroudColor}} className="App">
      <Form 
      {...textColor?<p style={{color:textColor}}></p>:null}
      setBackground={setBackground} setTextColor={setTextColor} />
    </div>
  );
}

export default App;
