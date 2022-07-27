import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement, incrementByAmount } from './redux/counter'
import { changeText } from './redux/counter'
import './App.css';
import Text from './components/Text';

function App() {
  // const { count } = useSelector((state: any) => state.counter)
  // const count = useSelector((state: any) => state.counter.count)
  // const [amount, setAmount] = useState(0)
  // const incrementValue = Number(amount) || 0;

  // const texter = useSelector((state: any) => state.texting.text)
  // const [text, setText] = useState("")

  // const textValue = String(text) || "";


  // const dispatch = useDispatch()
  return (


    <div className="App">
      {/* <h1>The Count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <input placeholder="amount" value={amount} onChange={(e:any) => setAmount(e.target.value)} />
      <button onClick={() => dispatch(incrementByAmount(amount))}>increment Amount</button> */}
{/* 
      <input placeholder="text" value={text} onChange={(e: any) => setText(e.target.value)} />
      <button onClick={() => dispatch(changeText(text))}>Text</button> 
      <h1>{texter}</h1> */}

      <Text />



    </div>
  );
}

export default App;
