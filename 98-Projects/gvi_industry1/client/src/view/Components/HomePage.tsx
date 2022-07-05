import React,{useState,useEffect} from 'react'
import Login from './Login'
import axios from 'axios';
import UserSelection from './UserSelection'
import RegisterMentee from './RegisterMentee';
const HomePage = () => {
    const [loginWindow,setLoginWindow]=useState(false)
    const [registerWindow,setRegisterWindow]=useState(false)
    const[menteeWindow,setMenteeWindow]=useState(false)
    const [menteeWindowFirstSectionForm,setMenteeWindowFirstSectionForm]=useState(false)
    
    const [countryArray, setCountryArray] = useState([]);
    async function getCountries() {
      const { data } = await axios.get('https://restcountries.com/v3.1/all')
      setCountryArray(data)
    }
    useEffect(() => {
      getCountries()
    }, [])
  return (
    <div className='homeContainer'>
        
        <div className='welcomeText'>
            <h1>Welcome to GVI</h1>
            <h3>Global Accelerator</h3>
            <p>The GVI Global Accelerator would assist startups from  ideation to global expansion hand in hand with GVI global partners across borders</p>
            
            <div className='loginBtns'>
                <button onClick={()=>{setLoginWindow(!loginWindow)}}>Login </button>
                
                <button onClick={()=>{setRegisterWindow(!registerWindow)}}>Request Access</button>
            </div>
           
        </div>
       
        <div className='videoWindow'>
         <>video</>
        </div>
        <Login loginWindow={loginWindow} setLoginWindow={setLoginWindow}/>
        <UserSelection registerWindow={registerWindow} setRegisterWindow={setRegisterWindow} setMenteeWindowFirstSectionForm={setMenteeWindowFirstSectionForm} menteeWindowFirstSectionForm={menteeWindowFirstSectionForm}/>
        <RegisterMentee menteeWindow={menteeWindow} setMenteeWindow={setMenteeWindow} setMenteeWindowFirstSectionForm={setMenteeWindowFirstSectionForm} menteeWindowFirstSectionForm={menteeWindowFirstSectionForm} countryArray={countryArray} />
        <div className='feed'>
            
            <div className='feed__news' id="news"> news</div>
            
            <div className='feed__events' id="events"> events</div>
         </div>
        
    </div>
  )
}

export default HomePage