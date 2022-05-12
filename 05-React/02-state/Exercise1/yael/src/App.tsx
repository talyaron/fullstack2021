import React from 'react';
import { useState } from "react";

import logo from './logo.svg';
// import Card from './Views/Components/Card';
import './Views/Styles/global.scss'; 

// import './App.css';

interface cardProps{
  imgUrl:string;
  imgTitle:string;
  id:string;

}
function App() {
  const [arr,setarr]=useState<Array<cardProps>>([]);//creating an empty cards array
  

function uid(){
    return Date.now().toString(36)+Math.random().toString(36).substring(2);//function to craete a random unmber for image ID
  }

function handleAddImg(ev:any){
  ev.preventDefault();

  const imgUrl=ev.target.imgUrl.value;
  const imgTitle=ev.target.imgTitle.value;
  
  const cardObj={imgUrl,imgTitle,id:uid()};

  setarr([...arr,cardObj]);

  console.log(arr);
  ev.target.reset();

}

function handleUpdtaeImg(id:string){
  const image = arr.findIndex(index=>index.id===id);
  const text:any = prompt('set new name');
  
  arr[image].imgTitle = text
    setarr([...arr])

}

function handleDeleteImg(id:string){
  const image = arr.findIndex(index=>index.id===id);
  setarr(arr.filter(img => img.id !== id))

}
  return (
    <div className="App">
      <div className="formInputImages">
        <form onSubmit={handleAddImg}>
          <input type="text" name="imgUrl" placeholder='Please enter image url'/>
          <input type="text" name="imgTitle" placeholder='Please enter image title'/>
          <input className="button-70" type="submit" value="ENTER" />
       

        </form>
        

      </div>

      <div className='image__grid'>
        {arr.map((arr,index)=>{
          return(
            <div key={index} className="image__grid__card">
              <img src={arr.imgUrl}/>
              <h2> {arr.imgTitle}</h2>
              <button id="update" className="button-70" onClick={()=>handleUpdtaeImg(arr.id)}>update image title</button>
              <button id="delete" className="button-70" onClick={()=>handleDeleteImg(arr.id)}>Delete image</button>

              </div> 

          )
        })}
        
      </div>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
