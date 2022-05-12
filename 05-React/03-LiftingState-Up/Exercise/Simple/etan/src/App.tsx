import React, { useState } from "react";
import Form from "./Views/Components/Form";
import Text from "./Views/Components/Text";
import "./Views/styles/global.scss";

interface ColorsInterface {
  text: string;
  bg: string;
}

function App() {
  const [text, setText] = useState("");
  const [bg, setBg] = useState("");
  const [textColor, setTextColor] = useState("");
  function handleUpdate(textColor: string, bg: string) {

    setTextColor(textColor);
    setBg(bg);
  }

  return (
    <div className="App">
      <Form setText={setText} updateFunction={handleUpdate} />
      {text?<h1
        style={{
          color: `${textColor}`,
          backgroundColor: `${bg}`,
        }}
      >
        {text}
      </h1>:null}
    </div>
  );
}

export default App;
