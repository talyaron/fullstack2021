import React, { useState } from 'react';
import './Views/styles/global.scss';
import Card from './Views/Comp/Card';

interface CardsProps {
  url: String;
  text: String;
  id: String;
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

function App() {

  //1
  // const [url, setUrl] = useState<String>('');
  // const [text, setText] = useState<String>('')

  //2
  let [arr, setArr] = useState<Array<CardsProps>>([])


  function handleOnSubmit(ev: any) {
    ev.preventDefault();

    let { url, text } = ev.target.elements;
    url = url.value; text = text.value;

    //1
    // setUrl(url);
    // setText(text);

    //2
    const newObject = { url, text, id: uid() }
    setArr([...arr, newObject])

    ev.target.reset()

  }

  //3 Delete
  function handleDelete(ev: any) {

    const id = ev.target.id;
    arr = arr.filter(item => item.id !== id)
    setArr([...arr])

  }

  //3 Update
  function handleUpdate(ev: any) {

    ev.preventDefault();

    const id = ev.target.id;
    let {url, text} = ev.target.elements;
    url = url.value; text = text.value;



    const index = arr.findIndex(item => item.id === id )
    arr[index].url = url; 
    arr[index].text = text;

    setArr([...arr])


    ev.target.reset()
    
  }

  return (
    <div className="App">
      <header className="App-header">

        <form onSubmit={handleOnSubmit}>
          <input type="url" name="url" placeholder='url' required />
          <input type="text" name="text" placeholder='text' required />
          <input type="submit" name="submit" value="Submit" required />
        </form>

        {/* 1 */}
        {/* <Card img={`${url}`} text={`${text}`} /> */}

        <div className="container">

          {arr.map((item, i) => {
            return (
              <div key={i} className="wrapper">
                <Card img={item.url} text={item.text} />

                {/* 3 Delete */}
                <button id={`${item.id}`} onClick={handleDelete}>Delete</button>

                {/* 3 Update */}
                <form id={`${item.id}`} onSubmit={handleUpdate}>
                  <input type="url" name="url" placeholder='Other url' required />
                  <input type="text" name="text" placeholder="Other Text" required />
                  <input type="submit" name="submit" value="Update" required />
                </form>

              </div>
            )

          })}
        </div>

      </header>
    </div>
  );
}

export default App;
