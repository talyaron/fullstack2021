import { useState, useEffect, useTransition } from 'react';
import logo from './logo.svg';
import './Views/styles/global.scss';
import axios from 'axios';
import Form from './Views/Comp/Form';
import Wrapper from './Views/Comp/Wrapper';

export interface User {
  name: String;
  password: String;
}

function uid() {
  return Math.random().toString(36).slice(-6);
}

function App() {

  const [isPending, startTransition ] = useTransition()

  const [input, setInput] = useState('')
  const [list, setList] = useState([])

  const [array, setArray] = useState<Array<User>>([])

  const [joke, setJoke] = useState('');
  useEffect(() => {
    handleGetJoke();
  }, []);

  async function handleGetJoke() {
    const { data } = await axios('https://api.chucknorris.io/jokes/random')
    const { value } = data;

    if (value) {
      setJoke(value)
    }
  }

  function handleSubmit(ev: any) {

    ev.preventDefault();

    const name = ev.target.name.value;
    const password = ev.target.password.value;

    const payload = { name, password, id: uid() }

    setArray([...array, payload])


    ev.target.reset();
  }

  function handleChange(e: any) {

    setInput(e.target.value)
    
    const ls: any = [];
    const LIST_SIZE = 2000;

    
    startTransition(() => {
      
      for (let i = 0; i < LIST_SIZE; i++) {
        ls.push(e.target.value)
      }
  
      setList(ls)

    })


  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {joke}
        </p>
        <button onClick={handleGetJoke}>Get Joke</button>
        <Form handleSubmit={handleSubmit} />
        <Wrapper array={array} setArray={setArray} />

        <input type="text" value={input} onChange={handleChange} />
        {isPending ? <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        : list.map((item, i) => {
          return (
            <div key={i}>{item}</div>
          )
        })}

      </header>
    </div>
  );
}

export default App;
