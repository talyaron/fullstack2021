import { useState } from "react";
import "./App.css";

import Form from "./Form";

function App() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");

  //functions with state
  function updateImage(title: string, image: string) {
    setImage(image);
    setTitle(title);
  }

  return (
    <div className="App">
     
      <header className="App-header">
      {image?<img src={image} alt='some user input' />:null}
      {title?<p>{title}</p>:null}
        <Form  setTitle={setTitle} setImage={setImage} />
      </header>
    </div>
  );
}

export default App;
