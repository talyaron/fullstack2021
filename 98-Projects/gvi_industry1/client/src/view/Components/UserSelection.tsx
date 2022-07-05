import React,{useEffect,useState} from 'react'
import axios from 'axios';
// import RegisterMentee from './RegisterMentee';
// import RegisterMentor from './RegisterMentor'
interface RegisterProps{
    registerWindow:boolean;
    setRegisterWindow:Function;
    menteeWindowFirstSectionForm:boolean;
    setMenteeWindowFirstSectionForm:Function;
    menteeWindow:boolean;
    setMenteeWindow:Function
} 
const UserSelection = (props:RegisterProps) => {
    const {registerWindow,setRegisterWindow,menteeWindowFirstSectionForm,setMenteeWindowFirstSectionForm,menteeWindow,setMenteeWindow}=props
    // function handleCheck(ev:any){
    //     const name= ev.target.value
    //     console.log(name)
    // }
    
    
    // const [mentorWindow,setMentorWindow]=useState()



  

  
  function handleRegisterWindow(){
     setMenteeWindowFirstSectionForm(!menteeWindowFirstSectionForm)
    setMenteeWindow(!menteeWindow)
    setRegisterWindow(false)
    
  }
  return (
    <div className={ registerWindow?'register showRegister':'register dontShowRegister'}>
       
        <button className='closeButton' onClick={()=>{setRegisterWindow(false)}} >X</button>
       
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