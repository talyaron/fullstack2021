import React,{useEffect,useState} from 'react'
import axios from 'axios';

import RegisterMentee from './RegisterMentee';
import RegisterMentor from './RegisterMentor'
interface RegisterProps{
    registerWindow:boolean;
    setRegisterWindow:Function;
    menteeWindow:Boolean;
    setMenteeWindow:Function
    mentorWindow:boolean
    setMentorWindow:Function
} 
const UserSelection = (props:RegisterProps) => {
    const {registerWindow,setRegisterWindow, menteeWindow, setMenteeWindow,mentorWindow,setMentorWindow}=props


    function handleRegisterWindow(){
      setMenteeWindow(true)
      setRegisterWindow(false)
    }
    function handleMentorRegisterWindow(){
      setMentorWindow(true)
      setRegisterWindow(false)
    }


  return (
    <div className={ registerWindow?'backgroungd-overlay':'register dontShowRegister'}>
    <div className={ registerWindow?'register showRegister':'register dontShowRegister'}>
       
        <button className='closeButton' onClick={()=>{setRegisterWindow(false)}} >X</button>
        
        <div className='register__text'>
        <h1 >Join Now The GVI <br></br> <span>Global Accelerator</span></h1>
        </div>
       
        <div className='register__options' >
           
            <input type="button"  name="entreprenuer" value="Entreprenuer" onClick={handleRegisterWindow} />
            <input type="button"  name="mentor" value="Mentor"  onClick={handleMentorRegisterWindow}/>
            <input type="button"  name="investor" value="Investor" />
            <input type="button"  name="gviPartner" value="GVI Partner" />
           
        </div>
    </div>
    </div>
  )
}

export default UserSelection