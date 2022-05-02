import logo from './logo.svg';
import { useState } from 'react';
import './View/styles/Global.scss'

interface Img {
  text: string,
  Img: string
}

function App() {

  const [arr, setArr] = useState<Array<Img>>([])


  function handlesubmit(ev: any) {
    ev.preventDefault();
    const text = ev.target.text.value;
    console.log(text);
    
    const Img = ev.target.img.value
    const obj = { text, Img }

    setArr([...arr, obj]);
  }  

  return (
    <div className="App">

      <form onSubmit={handlesubmit}>
        <input type="text"  placeholder='text1' />
        <input type="img"  placeholder='img1' />
        <input type="button" value="submit" />
      </form>


      <div className='card'>
        <img src='' alt='' className='App__img' />
        <h4></h4>
      </div>
    </div>
  );

}

export default App;
