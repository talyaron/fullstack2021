import {socket} from './index';

import './App.css';
import React,{useEffect,useState} from 'react';

function App() {
  const [textMessage,setTextMessage]=useState('')
  useEffect(()=>{
  socket.on('msg',({text})=>{
    console.log(text)
    setTextMessage(text)
    //The setTextMessage has to be here
   
});
return()=>{
  // turns off/cleans when the component is unmounted. when changing pages it cleans it as if to clear the interval
  console.log("off")
  socket.off("msg")
};
  },[])

function handleText(ev:any){
  ev.preventDefault()
const text=ev.target.value;
console.log(text)
socket.emit('msg',{text})
//client מפיץ to the שרת  


}
console.log(textMessage)
  return (
    <div style={{textAlign:'center', marginTop:'50px',margin:'10px'}}>
     
      
      <input type="text" placeholder="text message" name="text" onKeyUp={handleText}/>

      
     <p>text:{textMessage}</p>
      
    </div>
   
  );
}

export default App;
