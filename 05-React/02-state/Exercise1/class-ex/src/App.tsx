import { useState } from 'react';
import Main from './View/Components/Main'
import './View/styles/main.scss'

interface MainProps {
  img: string;
  text: string;
}

const main: Array<MainProps> = [
  { img: 'https://picsum.photos/200/300', text: 'hdrfhh' },
  { img: 'https://picsum.photos/200/300', text: 'hdr' },
  { img: 'https://picsum.photos/200/300', text: 'hdxfr' },
  { img: 'https://picsum.photos/200/300', text: 'hbxdsf' },
]

function App() {

  const [arr, setArray] = useState<Array<MainProps>>([]);

  function handleAddImage(ev: any) {
    ev.preventDefault();
    const img = ev.target.img.value;
    const text = ev.target.text.value;
    const obj = { text, img }
    setArray([...arr, obj])

  }

  return (
    <div className='App'>
      <form onSubmit={handleAddImage}>
        <main className='mainStyle'>
        {main.map((arr) => <Main 
        text={arr.text} img={arr.img} 
        />)}
        
        </main>
        <input type="text" />


      </form>
     
    </div>
  )
}


export default App
