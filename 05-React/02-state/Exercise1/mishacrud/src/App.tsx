import React, { useState } from 'react';
import './App.scss';
import TextField from '@mui/material/TextField';

interface PicObject {
  name: string;
  pic: string;
  id: string;
}

function App() {

  const classs = 'field';

  const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const [arr, setArr] = useState<Array<PicObject>>([]);


  function handleSubmit(ev: any) {
    ev.preventDefault();

    const name = ev.target.elements.name.value;
    const pic = ev.target.elements.pic.value;
    const id = uid();
    setArr([...arr, { name, pic, id }]);

    ev.target.reset()
  }

  function handleDelete(ev: any) {
    const cardId = ev.target.id;
    setArr(arr.filter(card => { return card.id !== cardId }))

  }

  function handleUpdate(ev: any) {

    ev.preventDefault()

    const index = arr.findIndex(obj => obj.id === ev.target.id)

    const name = ev.target.elements.name.value
    const pic = ev.target.elements.pic.value

    arr[index].name = name;
    arr[index].pic = pic;

    setArr([...arr])

    ev.target.reset()
  }


  return (
    <div className="App">

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField sx={{
          marginTop: 2,
          marginBottom: 2,
          display: 'block'
        }}
          required
          variant='outlined'
          id="outlined-required"
          label="Picture Name"
          fullWidth />
        <TextField
          sx={{
            marginTop: 2,
            marginBottom: 2,
            display: 'block'
          }}
          required
          id="outlined-required"
          label="Picture URL"
          fullWidth />
        <button type='submit'>SUBMIT</button>
      </form>

      {arr.map((card, i) => (
        <div>
          <div>
            {card.name}
          </div>
          <div>
            <img src={card.pic} alt='pic' />
          </div>
          <div>
            <button onClick={handleDelete} id={card.id}>Delete</button>
            <form onSubmit={handleUpdate} id={card.id}>
              <label>NAME</label>
              <input type="text" name='name' placeholder='Enter Name' />
              <label>PIC</label>
              <input type="text" name='pic' placeholder='PicURL...' />
              <button type='submit'>Update</button>
            </form>
          </div>
        </div>
      ))}

    </div>
  );
}

export default App;
