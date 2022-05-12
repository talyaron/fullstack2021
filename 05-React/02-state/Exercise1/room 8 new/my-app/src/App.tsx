import React, { useState } from 'react';
import logo from './logo.svg';
import './view/styles/global.scss';

interface Img {
  text: string;
  img: string;
  id: string
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}


function App() {
  // const [text, setText] = useState<string>('Start writing somthing');
  // const [image, setImage] = useState<string>('');
  let [arr, setArr] = useState<Array<Img>>([]);

  function handleAddImage(ev: any) {
    ev.preventDefault();
    const text = ev.target.text.value;
    const img = ev.target.img.value;
    const obj = { text, img, id: uid() };
    setArr([...arr, obj]);
    ev.target.reset()
    console.log(arr.length + 1)

  }

  // function handleText(ev: any) {
  //   setText(ev.target.value);
  // }

  // function handleImage(ev: any) {
  //   setImage(ev.target.value);
  // }



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

        <form onSubmit={handleAddImage} >

          {/* <p>img:<input type="text" name='img' onKeyUp={handleImage} required={true} /></p>
        <p> text:<input type="text" name='text' onKeyUp={handleText} required={true} /></p> */}
          <p>img:<input type="text" name='img' required={true} /></p>
          <p> text:<input type="text" name='text' required={true} /></p>
          <input type="submit" value="Add Image" />
          {/* <p>Text: {text}</p>
        <img height='200px' width='200px' src={image} /> */}
        </form>
        {/* {arr.map((box,i)=>{return <div key={i} img={box.img} text={box.text}/> })} */}
        <div className='arr'>
          {arr.map((img, i) => {
            return (
              <div key={i}>


                <button onClick={() => handleDelete(img.id)}>delete</button>
                <button onClick={() => handleupdateText(img.id)}>update text</button>
                <button onClick={() => handleupdateImg(img.id)}>update img</button>


                <h3>{img.text}</h3>
                <img src={img.img} title={img.text} alt={img.text} />

              </div>

            )
          })}
        </div>
      </div>
    </header>
  );
}

export default App;
