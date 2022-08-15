import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import {Text} from './features/text/Text';
import  '../src/style/style.scss'
import axios from "axios"
import { useAppSelector, useAppDispatch } from './app/hooks';
import { selectJokeStatus, setJokes, selectJoke } from './features/jokes/jokesSlice';
import { getPhotoAsync } from './features/photo/photoApi';
import {selectPhotoStatus, selectPhoto, status} from './features/photo/photoSlice'
import './App.css';


function App() {

  const dispatch = useAppDispatch();
  // const joke = useAppSelector(selectJoke);
  // const jokeStatus = useAppSelector(selectJokeStatus)

  const image = useAppSelector(selectPhoto);
  const photoStatus = useAppSelector(selectPhotoStatus);

  async function handleGetPhoto(ev: any) {
    try {
      //   const {data} = await axios.get('https://api.chucknorris.io/jokes/random');
      //   const {value} = data;
      //  if(!value) throw new Error('Missing joke');
      //  dispatch(setJoke(value));
      dispatch(getPhotoAsync());
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Counter/>
        <Text /> */}
       <div className='btn'>
        <button onClick={handleGetPhoto}>GET PHOTO</button></div>
         <img src={image} />
        {photoStatus === status.LOADING ? <div className="loader"></div> : null}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
