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

  //   function getId(ev:any){
  //     console.log(ev.target.id);
  // }

  return (

    <header className="App-header">
      <div className="App">
        <HEADER setArr={setArr} arr={arr} />

        <Body arr={arr} setArr={setArr} handleDelete={setArr} handleupdateText={setArr} handleupdateImg={setArr} />

        <Footer />

      </div>
    </header>
  );
}

export default App;
