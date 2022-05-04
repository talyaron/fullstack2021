import { useState } from "react";
import React from "react";
import "./view/styles/App.scss";
interface images {
  imgSrc: string
  Name: string
  id:string
}
function App() {
  // const [imgName, setImgName] = useState<string>("");
  // const [imgSrc, setImgSrc] = useState<string>("");
  const [arr, setarr] = useState<Array<images>>([]);

  // function handleAddImg(ev: any) {
  //   setImgSrc(ev.target.value);
  // }
  // function handleAddName(ev: any) {
  //   setImgName(ev.target.value);
  // }
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

  function HandleUpdate(id:string){
    const photo = arr.findIndex(index=>index.id===id);
    arr[photo].Name
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
              <form onSubmit={() => HandleUpdate(arr.id)}>
                <input type = 'text' name = {arr.Name} placeholder="Enter new Name"/>
                <input type="submit" value="update" />
              </form>
            </div>
          )
        })}
      </div>
    
      {/* <div className="photo">
        <img src={imgSrc}></img>
        <p>img name:{Name}</p>
      </div> */}
    </div>
  );
}

export default App;
