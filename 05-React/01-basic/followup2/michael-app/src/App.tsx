import React from 'react';
import logo from './logo.svg';
import './Views/styles/global.scss';
import Box from './Views/Componants/Box'

interface BoxProps {
  text: String;
  title: String;
  img: String;
}

const boxes: Array<BoxProps> = [
  { img: logo,  title: 'aaa',text: 'aaa' },
  { img: "https://i.picsum.photos/id/19/200/300.jpg?hmac=znGSIxHtiP0JiLTKW6bT7HlcfagMutcHfeZyNkglQFM",  title: 'bbb', text: 'bbb' },
  { img: "https://i.picsum.photos/id/19/200/300.jpg?hmac=znGSIxHtiP0JiLTKW6bT7HlcfagMutcHfeZyNkglQFM",  title: 'cc', text: 'cc' },
  { img: "https://i.picsum.photos/id/19/200/300.jpg?hmac=znGSIxHtiP0JiLTKW6bT7HlcfagMutcHfeZyNkglQFM",  title: 'dddd', text: 'dddd' }
]


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className='container'>
          {boxes.map((box, i) => { return <Box key={i} img={box.img} text={box.text} title={box.title} /> })}
        </div>

      </header>
    </div>
  );
}

export default App;
