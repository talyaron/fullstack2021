import { useState } from 'react';
import './view/styles/global.scss';
import Header from './view/components/HeaderComp/Header';
import Body from './view/components/BodyComp/Body'
import or1 from '../src/pics/or/or1.jpg'
import or2 from '../src/pics/or/or2.jpg'
import or3 from '../src/pics/or/or3.jpg'
import livnat1 from '../src/pics/livnat/livnat1.jpg'
import livnat2 from '../src/pics/livnat/livnat2.jpg'
import livnat3 from '../src/pics/livnat/livnat3.jpg'


interface pic {
  picUrl: any;
  people: string;
  time: string;
  id: string
}



function App() {
  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }
  const pictureArray = [{ picUrl: or1, people: 'Or', time: 'before', id: uid() },
  { picUrl: livnat1, people: 'livnat', time: 'before', id: uid() },
  { picUrl: or2, people: 'Or', time: 'before', id: uid() },
  { picUrl: livnat2, people: 'livnat', time: 'before', id: uid() },
  { picUrl: or3, people: 'Or', time: 'during', id: uid() },
  { picUrl: livnat3, people: 'livnat', time: 'party', id: uid() },]
  const [pictures, setPictures] = useState<Array<pic>>(pictureArray)

  const [counter, setCounter] = useState<number>(0)

  const [add,setAdd] = useState(false)

  return (
    <div className="App">

      <Header pictures={pictures} counter={counter} setCounter={setCounter} />
      <Body pictures={pictures} setPictures={setPictures} pictureArray = {pictureArray} add = {add} setAdd = {setAdd} uid={uid}/>
    </div>
  );
}

export default App;
