import React, { useState } from 'react';
import './Views/styles/global.scss';
import Card from './Views/Comp/Card';

interface CardsProps {
  url: String;
  text: String;
  id: String;
}

function uid (){
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

function App() {

  //1
  // const [url, setUrl] = useState<String>('');
  // const [text, setText] = useState<String>('')

  //2
  const [arr, setArr] = useState<Array<CardsProps>>([])

  //3 Delete
  function handleDelete(){

  }
  


  function handleOnSubmit(ev: any) {
    ev.preventDefault();

    let { url, text } = ev.target.elements;
    url = url.value; text = text.value;

    //1
    // setUrl(url);
    // setText(text);

    //2
    const newObject = { url, text, id: uid() }
    console.log(newObject);
    
    setArr([...arr, newObject])

    ev.target.reset()

  }

  return (
    <div className="App">
      <header className="App-header">

        <form onSubmit={handleOnSubmit}>
          <input type="url" name="url" placeholder='url' />
          <input type="text" name="text" placeholder='text' />
          <input type="submit" name="submit" value="Submit" />
        </form>

        {/* 1 */}
        {/* <Card img={`${url}`} text={`${text}`} /> */}

        <div className="container">
          {arr.map((item, i)=> {return <Card key={i} img={item.url} text={item.text} id={item.id} />})}
        </div>

      </header>
    </div>
  );
}

export default App;
