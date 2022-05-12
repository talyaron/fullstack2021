import React, { useState } from "react";
import Form from "./Components/Form";
import ListItem from "./Components/ListItem";

function App() {
  const [image, setImage] = useState();
  const [text, setText] = useState();

  const arr = [{ name: "Alex" }, { name: "Shani" }];

  return (
    <div className="App">
      <h1>Hello Alex and Shani</h1>
      <Form setImage={setImage} setText={setText} />

      <ul>
        {arr.map((obj) => {
          return <ListItem name={obj.name} />;
        })}
      </ul>

      {/* {image ? <img src={image} alt="image111" /> : <p>no img</p>}
      {text ? <p>{text}</p> : <p>No text</p>} */}
    </div>
  );
}

export default App;
