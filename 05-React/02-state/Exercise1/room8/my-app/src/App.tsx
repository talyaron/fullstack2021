import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface Img {
  text: string;
  img: string;
}

function App() {
  const [text, setText] = useState<string>('Start writing somthing');
  const [image, setImage] = useState<string>('');
  const [arr, setArr] = useState<Array<Img>>([]);

  function handleAddImage(ev: any) {
    ev.preventDefault();
    const text = ev.target.text.value;
    const img = ev.target.img.value;
    const obj = { text, img };
    setArr([...arr, obj]);

  }

  function handleText(ev: any) {
    setText(ev.target.value);
  }

  function handleImage(ev: any) {
    setImage(ev.target.value);
  }
  return (

    <div className="App">

      <form onSubmit={handleAddImage} >

        <p>img:<input type="text" name='img' onKeyUp={handleImage} required={true} /></p>
        <p> text:<input type="text" name='text' onKeyUp={handleText} required={true} /></p>
        <p>Text: {text}</p>
        <img height='200px' width='200px' src={image} />
        <input type="submit" value="Add Image" />
      </form>
      {arr.map((box,i)=>{return <div key={i} img={box.img} text={box.text}/> })}

    </div>
  );
}

export default App;
