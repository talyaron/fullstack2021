import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import React from 'react'
import axios from 'axios'

function App () {
  const [joke, setJoke] = useState('')

  useEffect(() => {
    handleGetJoke()
  }, [])

  async function handleGetJoke () {
    const { data } = await axios('https://api.chucknorris.io/jokes/random')
    const { value } = data
    if (value) {
      setJoke(value)
    }
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>{joke}</p>
        <button onClick={handleGetJoke}>Get Joke</button>
      </header>
    </div>
  )
}

export default App
