import React,{useEffect,useState} from 'react'
import axios from 'axios';
import RegisterMentee from './RegisterMentee';
import RegisterMentor from './RegisterMentor'
interface RegisterProps{
    registerWindow:boolean;
    setRegisterWindow:Function;
} 
const UserSelection = (props:RegisterProps) => {
    const {registerWindow,setRegisterWindow}=props
    // function handleCheck(ev:any){
    //     const name= ev.target.value
    //     console.log(name)
    // }
    const [countryArray, setCountryArray] = useState([]);
    const [menteeWindow,setMenteeWindow]=useState(false)
    // const [mentorWindow,setMentorWindow]=useState()



  useEffect(() => {
    getCountries()
  }, [])

  async function getCountries() {
    const { data } = await axios.get('https://restcountries.com/v3.1/all')
    setCountryArray(data)
  }
  function handleRegisterWindow(){
    setMenteeWindow(!menteeWindow)
  }
  return (
    <div className={ registerWindow?'register showRegister':'register dontShowRegister'}>
       
        <button className='closeButton' onClick={()=>{setRegisterWindow(false)}} >X</button>
        <RegisterMentee registerWindow={registerWindow} setRegisterWindow={setRegisterWindow} menteeWindow={menteeWindow} countryArray={countryArray} />
        <div className='register__text'>
        <h1 >Join Now The GVI <span>Global Accelerator</span></h1>
        </div>
       
        <div className='register__options' >
           
            <input type="button"  name="entreprenuer" value="Entreprenuer" onClick={handleRegisterWindow} />
            <input type="button"  name="mentor" value="Mentor" />
            <input type="button"  name="investor" value="Investor" />
            <input type="button"  name="gviPartner" value="GVI Partner" />
            
           
        </div>
        {/* <RegisterMentor registerWindow={registerWindow} setRegisterWindow={setRegisterWindow} countryArray={countryArray} /> */}
    </div>
  )
}

export default UserSelection