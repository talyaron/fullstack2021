import { useState } from 'react';
import './view/style/global.scss'
import React from 'react';
import Library from './view/components/Library';
import Form from './view/components/Form'
import './App.css';

export interface Img {
  text: string
  img: string
  id: string
}

function App() {

  const [arr, setArr] = useState<Array<Img>>([])

  function uid() {
    return Math.random().toString(36).slice(-6);
  }

  async function handleAddImage(ev: any) {
    ev.preventDefault();
    const text = ev.target.text.value;
    const img = ev.target.img.value;
    const obj = { text, img, id: uid() };
    await setArr([...arr, obj]);

    const images = document.querySelectorAll('.image');
    images[images.length - 1].classList.toggle('float-in');

    setTimeout(() => {
      images.forEach(image => {
        image.classList.remove('float-in');
      });
    }, 700);

  }

  function handleDelete(id: string) {
    const index = arr.findIndex(img => img.id === id);
    const images = document.querySelectorAll('.image');
    images[index].classList.toggle('float-out');
    setTimeout(() => {
      setArr(arr.filter(img => img.id !== id));
    }, 700);
  }

  function handleUpdate(id: string) {
    const text: any = prompt('Enter a new name for the picture');
    const index = arr.findIndex(img => img.id === id);
    arr[index].text = text
    setArr([...arr]);
  }


  return (
    <div className="App">
      <header className="App-header">
        <Form addImageFunction={handleAddImage} />
        <Library pictures={arr} deleteFunction={handleDelete} updateFunction={handleUpdate} />
      </header >
    </div >
  );
}

export default App;

//add animation
