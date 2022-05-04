import { useState } from 'react';
import React from 'react';
import logo from './logo.svg';
import './App.css';

interface Img {
  text: string
  img: string
  id: string
}

function App() {
  const [arr, setArr] = useState<Array<Img>>([])

  function uid() {
    return Math.random().toString(36).slice(-6);
  }

  function handleAddImage(ev: any) {
    ev.preventDefault();
    const text = ev.target.text.value;
    const img = ev.target.img.value;
    const obj = { text, img, id: uid() };
    setArr([...arr, obj]);
  }

  function handleDelete(id: string) {
    setArr(arr.filter(img => img.id !== id));
  }

  function handleUpdate(id: string) {
    const text:any = prompt('Enter a new name for the picture');
    // const text: any = "test";
    const index = arr.findIndex(img => img.id === id);
    // console.log(arr);
    arr[index].text = text
    setArr([...arr]);
    // console.log();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleAddImage}>
          <label htmlFor="text">Input a name for the image</label>
          <input type="text" name='text' id='text' />
          <label htmlFor="img">Input the image URL</label>
          <input type="text" name='img' id='img' />
          <input type="submit" />
        </form>
        <div className='grid'>
          {arr.map((img, i) => {
            return (
              <div key={i} className='image'>
                <h3>{img.text}</h3>
                <img src={img.img} alt={img.text} />
                <button onClick={() => handleDelete(img.id)}>Delete</button>
                <button onClick={() => handleUpdate(img.id)}>update</button>
              </div>)
          })}
        </div>
      </header >
    </div >
  );
}

export default App;

//add animation
