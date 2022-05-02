import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
interface Img{
  text:string;
  img:string;
}

function App() {
  const [text, setText] = useState<string>('Start writing somthing');
  const [image, setImage] = useState<string>('');
  const [arr,setArr]=useState<Array<Img>>([]);
   
  function handleAddImage(ev:any){
    ev.preventDeafult();
    const text=ev.target.text.value;
    const img=ev.target.img.value;
    const obj = {text,img};
    setArr([...arr,obj]);
  }

  function handleText(ev:any){
    setText(ev.target.value);
  }

  function handleImage(ev:any){
    setImage(ev.target.value);
  }
  return (

    <div className="App">
      
        
      <p><input type="text"  onKeyUp={handleImage}/></p>
      <img src={image} />
    
      <input type="text" onKeyUp={handleText} />
        <p>Text: {text}</p>


        <input type="submit" value="Add Image" />

        
        <form onSubmit={handleAddImage} >
        </form>


    </div>
  );
}

export default App;
