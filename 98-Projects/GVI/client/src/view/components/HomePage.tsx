import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Login from './Login'
import RegisterMentee from './RegisterMentee'
import RegisterMentor from './RegisterMentor'
import UserSelection from './UserSelection'
const logo = require("../../img/gvi_logo.png");

interface HomePageProps{
  setCurrentUser:Function;
  setCurrentUserType:Function;
}

const HomePage = (props:HomePageProps) => {
  const {
    setCurrentUser,
    setCurrentUserType
  }=props;
  const [loginWindow, setLoginWindow] = useState(false)
  const [registerWindow, setRegisterWindow] = useState(false)
  const [countryArray, setCountryArray] = useState([]);
  const [menteeWindow, setMenteeWindow] = useState(false)
  const [mentorWindow, setMentorWindow] = useState(false)
  const [thirdSection, setThirdSection] = useState('showThirdSection-none')
  const [secondSection, setSecondSection] = useState('showSecondSection-none')
  const [firstSection, setFirstSection] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showProgressBar, setShowProgressBar] = useState('')


  function handleToggleShowSections() {
    setSecondSection('showSecondSection-block')
    setFirstSection('showFirstSectionSection-none')
  }
  function handleToggleShowThirdSection() {
    setSecondSection('showSecondSection-none')
    setThirdSection('showThirdSection-block')
  }
  function handleBackToggleShowSections() {
    setSecondSection('showSecondSection-none')
    setFirstSection('showFirstSectionSection-block')
  }
  function handleBackToggleShowThirdSection() {
    setThirdSection('showThirdSection-none')
    setSecondSection('showSecondSection-block')
    
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
    const countries = data.sort((a:any, b:any) => a.name.common.localeCompare(b.name.common));
    console.log(countries)
    setCountryArray(data)
  }

  function handleCloseRegisterWindow() {
    setMenteeWindow(false)
    setMentorWindow(false)
  }

  return (

    <div className='homeContainer'>

      <div className='welcomeText'>
        <div className='logo'><img src={logo} alt="logo" /></div>
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
        <img src="./video.png" alt="" />
      </div>
      <Login loginWindow={loginWindow} setLoginWindow={setLoginWindow} setCurrentUserType={ setCurrentUserType} setCurrentUser={setCurrentUser} />
      <UserSelection registerWindow={registerWindow} setRegisterWindow={setRegisterWindow} menteeWindow={menteeWindow} setMenteeWindow={setMenteeWindow} mentorWindow={mentorWindow} setMentorWindow={setMentorWindow} />
      <RegisterMentee setCurrentUserType={ setCurrentUserType} registerWindow={registerWindow} setRegisterWindow={setRegisterWindow} menteeWindow={menteeWindow} setMenteeWindow={setMenteeWindow} countryArray={countryArray} handleCloseRegisterWindow={handleCloseRegisterWindow} secondSection={secondSection} firstSection={firstSection} thirdSection={thirdSection} showProgressBar={showProgressBar} handleToggleShowSections={handleToggleShowSections} handleBackToggleShowSections={handleBackToggleShowSections} handleBackToSelection={handleBackToSelection} handleToggleShowThirdSection={handleToggleShowThirdSection} handleBackToggleShowThirdSection={handleBackToggleShowThirdSection}/>
      <RegisterMentor setCurrentUserType={ setCurrentUserType} countryArray={countryArray} registerWindow={registerWindow} setRegisterWindow={setRegisterWindow} mentorWindow={mentorWindow} setMenteeWindow={setMenteeWindow} handleCloseRegisterWindow={handleCloseRegisterWindow} secondSection={secondSection} firstSection={firstSection}  thirdSection={thirdSection} showProgressBar={showProgressBar} handleToggleShowSections={handleToggleShowSections} handleBackToggleShowSections={handleBackToggleShowSections} handleBackToSelection={handleBackToSelection} handleToggleShowThirdSection={handleToggleShowThirdSection} handleBackToggleShowThirdSection={handleBackToggleShowThirdSection}/>

    </div>
  )
}

export default HomePage