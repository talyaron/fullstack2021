import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { selectJoke, selectJokeStatus, Status} from "./reducers/jokesSlice";
import { getJokeAsync } from "./reducers/jokeApi";
import Spinner from "./view/components/spinner/Spinner";
import { Stats } from "fs";


function App() {
  const dispatch = useAppDispatch();
  const joke = useAppSelector(selectJoke);
  const jokeStatus = useAppSelector(selectJokeStatus)

  async function handelGetJoke(ev: any) {
    try {
      //   const {data} = await axios.get('https://api.chucknorris.io/jokes/random');
      //   const {value} = data;
      //  if(!value) throw new Error('Missing joke');
      //  dispatch(setJoke(value));
      dispatch(getJokeAsync());
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <h2>{joke}</h2>
        <button onClick={handelGetJoke}>GET JOKE</button>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer">
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer">
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer">
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer">
            React Redux
          </a>
        </span>
      </header>
      <div className="spinner">
      {jokeStatus === Status.LOADING? <Spinner />:null}
      </div>
    </div>
  );
}

export default App;
