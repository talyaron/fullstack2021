import logo from './logo.svg';
import { useState } from 'react';
import Box from './View/Components/Box';
import './View/styles/Global.scss'
import { Boxprops } from './View/Components/Box' //import the interface

const boxes: Array<Boxprops> = [
  { title: 'wow', text: 'tamir', img: 'https://th.bing.com/th/id/OIP.hJXOGFnk2koif7ps727eXQHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.25&pid=1.7' },
  { title: 'wow', text: 'aviel', img: "https://th.bing.com/th/id/OIP.hJXOGFnk2koif7ps727eXQHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.25&pid=1.7" },
  { title: 'wow', text: 'shoval', img: 'https://th.bing.com/th/id/OIP.hJXOGFnk2koif7ps727eXQHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.25&pid=1.7' },
  { title: 'wow', text: 'dganit', img: 'https://th.bing.com/th/id/OIP.hJXOGFnk2koif7ps727eXQHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.25&pid=1.7' }
]

function App() {
  return (
    <div className="App">
      {boxes.map((box, i) => <Box key={i} img={box.img} title={box.title} text={box.text} />)}
    </div>
  );

}

export default App;
