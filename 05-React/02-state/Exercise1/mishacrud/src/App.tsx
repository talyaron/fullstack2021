import React, {useState} from 'react';
import './App.css';

interface PicObject{
  name:String,
  pic:String
}

function App() {

  const [arr, setArr]= useState<String>('')

  function handleSubmit(ev:any){
    ev.preventDefault();
    console.log(ev.target.elements.name.value)
    console.log(ev.target.elements.pic.value)
    const name = ev.target.elements.name.value;
    const pic = ev.target.elements.pic.value;
    const obj:PicObject = {name, pic}

    setArr([...arr, obj])
  }

  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
       <label>NAME</label>
       <input type="text" name='name' placeholder='Enter Name' />
       <label>PIC</label>
       <input type="text" name='pic' placeholder='PicURL...' />
       <button type='submit'>SUBMIT</button>
      </form>

    </div>
  );
}

export default App;
