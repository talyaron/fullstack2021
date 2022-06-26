import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './view/Styles/global.scss';
import RegisterMentee from './view/Components/RegisterMentee';
import RegisterMentor from './view/Components/RegisterMentor';

function App() {
  const [registerWindow, setRegisterWindow] = useState(false)
  const [countryArray, setCountryArray] = useState([]);



  useEffect(() => {
    getCountries()
  }, [])

  async function getCountries() {
    const { data } = await axios.get('https://restcountries.com/v3.1/all')
    setCountryArray(data)
  }



  return (
    <div className="div">
    <RegisterMentee registerWindow={registerWindow} setRegisterWindow={setRegisterWindow} countryArray={countryArray} />
    <RegisterMentor registerWindow={registerWindow} setRegisterWindow={setRegisterWindow} countryArray={countryArray} />
    </div>
  );
}

export default App;
