import { text } from 'node:stream/consumers';
import React, { useState } from 'react';
import './App.scss';
import Box from './box'

interface CardsProps {
  text: string
  img: string
  id: string
}

function App() {
  const [arr, setArr] = useState<Array<CardsProps>>([])

  function handleAdd(ev: any) {
    console.log(ev);
    ev.preventDefault()
    const text = ev.target.elements.text.value;
    const img = ev.target.elements.img.value;
    const id= ev.target.value;
    console.log(text);
    console.log(img);
    console.log(id);
    
        
    const obj = { text, img, id};
    setArr([...arr, obj]);
  }

  function handleUpdate(ev: any) {

    ev.preventDefault();

    const id = ev.target.id;
    let { url, text } = ev.target.elements;
    url = url.value; text = text.value;

//   function handleDelete(ev:any){
// const text= ev.target.img.value;
// arr == arr.filter(item=> item.img===text)
// setArr ([...arr])
//   }
  return (
    <div className="App">
      <form onSubmit={handleAdd}>
        <label>name</label>
        <input type="text" name='text' placeholder='name' />
        <label>pic</label>
        <input type="text" name='img' placeholder='imgURL' />
        <button type='submit' value='SUBMIT'>SUBMIT</button>
       
      </form>
   
      <div>  {arr.map((box, i) => { return <Box key={i} text={box.text} img={box.img} id= {box.id}/>})}{}</div>
    </div>
  );
}
export default App;
