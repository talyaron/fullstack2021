import { useState } from "react";
import React from "react";
import "./view/styles/App.scss";
interface images {
  imgSrc: string
  Name: string
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
    const obj = { imgSrc, Name };

    setarr([...arr, obj]);
    console.log(arr)
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
      <div>


      </div>
      {/* <div className="photo">
        <img src={imgSrc}></img>
        <p>img name:{Name}</p>
      </div> */}
    </div>
  );
}

export default App;
