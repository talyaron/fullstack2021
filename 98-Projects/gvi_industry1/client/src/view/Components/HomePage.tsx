import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Login from './Login'
import RegisterMentee from './RegisterMentee'
import RegisterMentor from './RegisterMentor'
import UserSelection from './UserSelection'
const HomePage = () => {
  const [loginWindow, setLoginWindow] = useState(false)
  const [registerWindow, setRegisterWindow] = useState(false)
  const [countryArray, setCountryArray] = useState([]);
  const [menteeWindow, setMenteeWindow] = useState(false)
  const [mentorWindow, setMentorWindow] = useState(false)

  const [secondSection, setSecondSection] = useState('showSecondSection-none')
  const [firstSection, setFirstSection] = useState('')
  const [showProgressBar, setShowProgressBar] = useState('')
  const [closeForm, setCloseForm] = useState('')


  function handleToggleShowSections() {
    setSecondSection('showSecondSection-block')
    setFirstSection('showFirstSectionSection-none')
  }
  function handleBackToggleShowSections() {
    setSecondSection('showSecondSection-none')
    setFirstSection('showFirstSectionSection-block')
  }
  function handleBackToSelection() {
    setRegisterWindow(true)
    setMentorWindow(false)
    setMenteeWindow(false)
  }


  useEffect(() => {
    getCountries()
  }, [])

  async function getCountries() {
    const { data } = await axios.get('https://restcountries.com/v3.1/all')
    setCountryArray(data)
  }

  function handleCloseRegisterWindow() {
    setMenteeWindow(false)
    setMentorWindow(false)
  }
  return (
    <div className='homeContainer'>

      <div className='welcomeText'>
        <h1>Welcome to GVI</h1>
        <h3>Global Accelerator</h3>
        <p>The GVI Global Accelerator would assist startups from  ideation to global expansion hand in hand with GVI global partners across borders</p>

        <div className='loginBtns'>
          <button onClick={() => { setLoginWindow(!loginWindow) }}>Login </button>

          <button onClick={() => { setRegisterWindow(!registerWindow) }}>Request Access</button>
        </div>

      </div>

      <div className='videoWindow'>
        <>video</>
      </div>
      <Login loginWindow={loginWindow} setLoginWindow={setLoginWindow} />
      <UserSelection registerWindow={registerWindow} setRegisterWindow={setRegisterWindow} menteeWindow={menteeWindow} setMenteeWindow={setMenteeWindow} mentorWindow={mentorWindow} setMentorWindow={setMentorWindow} />
      <RegisterMentee registerWindow={registerWindow} setRegisterWindow={setRegisterWindow} menteeWindow={menteeWindow} setMenteeWindow={setMenteeWindow} countryArray={countryArray} handleCloseRegisterWindow={handleCloseRegisterWindow} secondSection={secondSection} firstSection={firstSection} showProgressBar={showProgressBar} handleToggleShowSections={handleToggleShowSections} handleBackToggleShowSections={handleBackToggleShowSections} handleBackToSelection={handleBackToSelection} />
      <RegisterMentor countryArray={countryArray} registerWindow={registerWindow} setRegisterWindow={setRegisterWindow} mentorWindow={mentorWindow} setMenteeWindow={setMenteeWindow} handleCloseRegisterWindow={handleCloseRegisterWindow} secondSection={secondSection} firstSection={firstSection} showProgressBar={showProgressBar} handleToggleShowSections={handleToggleShowSections} handleBackToggleShowSections={handleBackToggleShowSections} handleBackToSelection={handleBackToSelection} />
      <div className='feed'>

        <div className='feed__news' id="news"> news</div>

        <div className='feed__events' id="events"> events</div>
      </div>

    </div>
  )
}

export default HomePage