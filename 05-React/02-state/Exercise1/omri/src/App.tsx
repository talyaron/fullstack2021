import { useState } from "react";
import React from "react";
import "./view/styles/App.scss";
interface images {
  imgSrc: string
  Name: string
  id:string
}
function App() {
  const [arr, setarr] = useState<Array<images>>([]);

  function HandleAddImg(ev: any) {
    ev.preventDefault();
    const imgSrc = ev.target.imgSrc.value;
    const Name = ev.target.Name.value;
    const obj = { imgSrc, Name, id:uid() };

    setarr([...arr, obj]);
    console.log(arr)
  }

  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  function HandleUpdate(ev:any,id:string){
    ev.preventDefault();
    const photo = arr.findIndex(index=>index.id===id);
    const newName = ev.target.Name.value;
    arr[photo].Name = newName;
    setarr([...arr]);
  }

  function HandleDelete(id:string){
    setarr(arr.filter(image => image.id !== id))
  }

  return (
    <div className="App">
      <div className="Inputs">
        <form onSubmit={HandleAddImg} >
          <input type="text" name = 'imgSrc' placeholder="img url here" />
          <input type="text" name = 'Name' placeholder="write img name here" />
          <input type="submit" value="submit" />
        </form>
      </div>

      <div className='App__grid'>
        {arr.map((arr, i) => {
          return (
            <div key={i} className='App__card'>
              <img src={arr.imgSrc} />
              <h3 className='App__text'>{arr.Name}</h3>
              {/* <button onClick={() => handledelete(arr.id)}>delete</button> */}
              {/* <button onClick={() => HandleUpdate(arr.id)}>update name</button> */}
              <form onSubmit={(ev) => HandleUpdate(ev,arr.id)}>
                <input type = 'text' name = 'Name' placeholder="Enter new Name"/>
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
