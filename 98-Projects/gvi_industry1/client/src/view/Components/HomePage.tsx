import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Login from './Login'
import RegisterMentee from './RegisterMentee'
import UserSelection from './UserSelection'
const HomePage = () => {
  const [loginWindow, setLoginWindow] = useState(false)
  const [registerWindow, setRegisterWindow] = useState(false)
  const [countryArray, setCountryArray] = useState([]);
  const [menteeWindow, setMenteeWindow] = useState(false)
  useEffect(() => {
    getCountries()
  }, [])

  async function getCountries() {
    const { data } = await axios.get('https://restcountries.com/v3.1/all')
    setCountryArray(data)
  }

  function handleCloseRegisterWindow() {
    setMenteeWindow(false)
  }

  return (

    <div className='homeContainer'>

      <div className='welcomeText'>
        <div className='logo'><img src="/gvi-logo.png" alt="logo" /></div>
        <div className='text-btn-wrapper'>
          <div >
            <h1>Welcome to GVI</h1>
            <h3>Global Accelerator</h3>
            <p>The GVI Global Accelerator would assist startups from  ideation to global expansion hand in hand with GVI global partners across borders</p>
          </div>
          <div className='loginBtns'>
            <button className='button-login' onClick={() => { setLoginWindow(!loginWindow) }}>Login </button>

            <button className='button-request' onClick={() => { setRegisterWindow(!registerWindow) }}>Request Access</button>
          </div>
        </div>
      </div>

      <div className='videoWindow'>
        <img src="/video.png" alt="" />
      </div>
      <Login loginWindow={loginWindow} setLoginWindow={setLoginWindow} />
      <UserSelection registerWindow={registerWindow} setRegisterWindow={setRegisterWindow} menteeWindow={menteeWindow} setMenteeWindow={setMenteeWindow} />
      <RegisterMentee registerWindow={registerWindow} setRegisterWindow={setRegisterWindow} menteeWindow={menteeWindow} countryArray={countryArray} handleCloseRegisterWindow={handleCloseRegisterWindow} />
      {/* <div className='feed'>

        <div className='feed__news' id="news"> news</div>

        <div className='feed__events' id="events"> events</div>
      </div> */}

    </div>
  )
}

export default HomePage