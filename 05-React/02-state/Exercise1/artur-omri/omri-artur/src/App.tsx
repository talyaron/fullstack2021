import { useState } from "react";
import React from "react";
import "./view/styles/App.scss";
interface images {
  imgSrc: string
  Name: string
  id: string
}
function App() {
  const [arr, setarr] = useState<Array<images>>([]);

  function HandleAddImg(ev: any) {
    ev.preventDefault();
    const imgSrc = ev.target.imgSrc.value;
    const Name = ev.target.Name.value;
    const obj = { imgSrc, Name, id: uid() };

    setarr([...arr, obj]);
    console.log(arr)
  }

  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  function HandleUpdate(ev: any, id: string) {
    ev.preventDefault();
    const photo = arr.findIndex(index => index.id === id);
    const newName = ev.target.Name.value;
    arr[photo].Name = newName;
    setarr([...arr]);
  }

  function HandleDelete(id: string) {
   const arrfilterd = arr.filter(image => image.id === id)
   console.log(arrfilterd)
   const deletedElement:HTMLDivElement=document.querySelector(`[data-id=${id}]`)
   deletedElement.classList.add("roll-in-left")
   setTimeout(()=>{
     setarr( arr.filter(image => image.id !== id))
     deletedElement.classList.remove("roll-in-left")
    },600)

    
  }

  return (
    <div className="App">
      <div className="App__albumBar">
        <div className="App__albumBar__Logo"><h2>PhotoAlbum</h2></div>
        <div className="App__albumBar__Inputs">
          <form onSubmit={HandleAddImg} >
            <input className="App__albumBar__Inputs--filed" type="text" name='imgSrc' placeholder="img url here" />
            <input className="App__albumBar__Inputs--filed" type="text" name='Name' placeholder="write img name here" />
            <input className="App__albumBar__Inputs--submit" type="submit" value="submit" />
          </form>
        </div>
      </div>

      <div className='App__grid'>
        {arr.map((arr, i) => {
          return (
            <div key={i} data-id={arr.id}className='App__grid__card' >
              <img src={arr.imgSrc} alt={arr.imgSrc}/>
              <h3>{arr.Name}</h3>
              <form onSubmit={(ev) => HandleUpdate(ev, arr.id)}>
                <input type='text' name='Name' placeholder="Enter new Name" />
                <input type="submit" value="update" />
                <button onClick={() => HandleDelete(arr.id)}>Delete</button>
              </form>
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default App;
