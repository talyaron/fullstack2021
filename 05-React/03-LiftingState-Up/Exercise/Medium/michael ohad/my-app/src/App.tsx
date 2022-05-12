import React, { useState } from 'react';
import './view/styles/global.scss';
import HEADER from './view/Components/Header'
import Body from './view/Components/Body';
import Footer from './view/Components/Footer'

interface Img {
  text: string;
  img: string;
  id: string
}



function App() {
  let [arr, setArr] = useState<Array<Img>>([]);

  function handleDelete(id: string) {
    setArr(arr.filter(img => img.id !== id))
    console.log(arr.length - 1 + " items");
  }

  function handleupdateText(id: string) {
    const text: any = prompt('set new name');
    const index = arr.findIndex(card => card.id === id)
    arr[index].text = text
    setArr([...arr])
  }

  function handleupdateImg(id: string) {
    const img: any = prompt('set new img url');
    const index = arr.findIndex(card => card.id === id)
    arr[index].img = img
    setArr([...arr])
  }

  return (

    <header className="App-header">
      <div className="App">
        <HEADER setArr={setArr} arr={arr} />

        <Body arr={arr} />
        
        <Footer />




        
      </div>
    </header>
  );
}

export default App;
