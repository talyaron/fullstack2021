import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChangeColor from './components/ChangeColor';
import ShowText from './components/ShowText';
import { decrement, increment, incrementByAmunt } from './redux/counter';


function App() {

  const { count } = useSelector((state: any) => state.counter)
  // const {textInsert}= useSelector((state:any)=> state.inputText)
  
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Days Count Until Sending Letter</h1>
      <span className='spanDays'>{count} Days!</span>
      <button onClick={() => dispatch(increment())}>Increment Days <span>(+1)</span></button>
      <button onClick={() => dispatch(decrement())}>Decrement Days <span>(-1)</span></button>
      <button onClick={() => dispatch(incrementByAmunt(10))}>Increment Days By 10 <span>(are you nuts?#!)</span></button>
      {/* <textarea placeholder="Continue..." onChange={(e) => dispatch(changeText(e.target.value))} /> */}
      <ShowText />
      <ChangeColor/>
    </div>
  );
}

export default App;
