import { useState } from 'react'//important 
import logo from './logo.svg';
import './View/style/global.scss';


import Form from './View/components/Form';

interface image{
  image:string , 
  text:string
} 

const [arr , setArr] = useState<Array<image>>([]);
function App() {
  function handleSubmit(ev:any){
    ev.preventDefault()
  
    // console.log(ev.target.elements.img.value);
  
    const image = ev.target.elements.img.value;
    const text = ev.target.elements.text.value;
    const obj = {text , image};
    // setArr([...arr , obj])
   // <img src = 'ev.target.elements.img.value'/>
    
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form handleSubmit/>
      </header>
    </div>
  );
}

export default App;
