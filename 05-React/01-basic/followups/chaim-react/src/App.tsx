import React, { useState } from 'react';
import './App.scss';
import Box from './box'

interface img {
  text: string
  img: string
}

function App() {
  const [arr, setArr] = useState<Array<img>>([])
  function handleAdd(ev: any) {
    console.log(ev);

    ev.preventDefault()
    const text = ev.target.elements.text.value;
    const img = ev.target.elements.img.value;
    console.log(text);
    console.log(img);
        
    const obj = { text, img };
    setArr([...arr, obj]);
  }
  return (
    <div className="App">
      <form onSubmit={handleAdd}>
        <label>name</label>
        <input type="text" name='text' placeholder='name' />
        <label>pic</label>
        <input type="text" name='img' placeholder='imgURL' />
        <button type='submit' value='SUBMIT'>SUBMIT</button>
      </form>
      <div>  {arr.map((box, i) => { return <Box key={i} text={box.text} img={box.img}/>})}{}</div>
    </div>
  );
}

export default App;
