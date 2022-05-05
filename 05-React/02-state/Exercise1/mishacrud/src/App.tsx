
import React, { useState } from 'react';
import './App.scss';
import PicCard from './view/components/PicCard'
import PicForm from './view/components/PicForm'
import AppBar from './view/components/AppBar'
import Grid from '@mui/material/Grid';

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
      ev.target.reset()
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

  }

  function handleDelete(cardId:any) {
    setArr(arr.filter(card => { return card.id !== cardId }))
  }

  function handleUpdate(ev: any) {

    ev.preventDefault()
    const id = ev.target[4].id
    console.log(id)
    const index = arr.findIndex((obj) => obj.name == ev.target[4].id)
    console.log(index)
    const name = ev.target.elements.name.value
    const pic = ev.target.elements.pic.value

    arr[index].name = name;
    arr[index].pic = pic;

    setArr([...arr])

    ev.target.reset()
  }


  return (
    <div className="App">
      <AppBar />
      
      <PicForm job='Add' submit={handleSubmit} nameError={nameError} picError={picError}/>
      <div className='wrapper'> 
      <Grid container spacing={3}>
      {
        arr.map((card, i) => (
          <Grid item>
           <PicCard key={i} card={card} handleUpdate={handleUpdate} handleDelete={handleDelete}/>
           </Grid>
        ))
      }
      </Grid>
      </div>

    </div >

  );
}

export default App;
