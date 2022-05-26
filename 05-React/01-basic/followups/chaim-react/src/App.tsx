import React, { useState } from 'react';
import './App.scss';
import Form from './Form';

interface FormProps {
  text: string
  img: string
  id: string
}

function App() {

  const [arr, setArr] = useState<Array<FormProps>>([]);

  return (
    <div className="App">
      
      <div> {arr.map((box, i) => {
        return (
          <div>
            <form key={i} text={box.text} img={box.img} id={box.id} />

          </div>
        )
      })}
      </div>

    </div>
  );
}

export default App;

