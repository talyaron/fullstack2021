import React, { useState } from 'react';
import './App.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import PicGrid from './view/components/PicGrid'

interface PicObject {
  name: string;
  pic: string;
  id: string;
}

function App() {

  const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const [arr, setArr] = useState<Array<PicObject>>([]);
  const [nameError, setNameError] = useState(false)
  const [picError, setPicError] = useState(false)

  function handleSubmit(ev: any) {
    ev.preventDefault();

    const name = ev.target.elements.name.value;
    const pic = ev.target.elements.pic.value;
    const id = uid();
    const obj = { name, pic, id }

    if (name && pic) {
      setArr([...arr, obj]);
    }
    if (name === '') {
      setNameError(true)
      setTimeout(() => {
        setNameError(false)
      }, 2000)
    }
    if (pic === '') {
      setPicError(true)
      setTimeout(() => {
        setNameError(false)
      }, 2000)
    }

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
            <PicGrid>
        
        </PicGrid>
      <Container>
        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
          <TextField sx={{
            marginTop: 2,
            marginBottom: 2,
            display: 'block'
          }}
            required
            variant='outlined'
            id="name"
            label="Picture Name"
            fullWidth
            error={nameError} />
          <TextField
            className='test'
            required
            id="pic"
            label="Picture URL"
            rows={4}
            fullWidth
            error={picError}
             />
          <Button variant="contained" type='submit' id='addphoto'>Add Photo</Button>
        </form>
      </Container>

      {
        arr.map((card, i) => (
          <div>
            <div className='PicName'>
              {card.name}
            </div>
            <div className='PicPic'>
              <img src={card.pic} alt='pic' />
            </div>
            <div>
              <button onClick={handleDelete} id={card.id}>Delete</button>
              <form onSubmit={handleUpdate} id={card.id}>
                <TextField sx={{
                  marginTop: 2,
                  marginBottom: 2,
                  display: 'block'
                }}
                  required
                  variant='outlined'
                  id="name"
                  label="Picture Name"
                  fullWidth
                  error={nameError} />
                <TextField
                  className='test'
                  sx={{
                    marginTop: 2,
                    marginBottom: 2,
                    display: 'block'
                  }}
                  required
                  id="pic"
                  label="Picture URL"
                  fullWidth
                  error={picError} />
                <Button variant="contained" type='submit' id='addphoto'>Add Photo</Button>
              </form>
            </div>
          </div>
        ))
      }

    </div >

  );
}

export default App;
