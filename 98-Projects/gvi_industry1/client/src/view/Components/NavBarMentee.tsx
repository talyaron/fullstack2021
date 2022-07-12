import React from 'react'
import {useState} from 'react';
import Profile from '../pages/mentee/Profile'
interface navBarProps{
    id:String
    image:String
  }
function NavBarMentee(props:navBarProps) {
    const [myMentors, setMyMentors]= useState(false);
    const [myProfile, setMyProfile]= useState(false);
    const [request, setRequest]= useState(false);
    const [mentorMatching, setMentorMatching]= useState(false);
    const [myTask, setMyTask]= useState(false);
    const {image, id}=props;
  return (
    <div>
    <div className='navBar'>

    <div>
    <div className='navBar'>
                  
      <div className='logo'><img src="./gvi-logo.png" alt="logo" /></div>

      <div className="btn">
    <div><button onClick={() => { setRequest(!request) }}>Requests</button></div>
    <div><button onClick={() => { setMyMentors(!myMentors) }}>My Mentors</button></div>
    <div><button onClick={() => { setMentorMatching(!mentorMatching) }}>Mentor Matching</button></div>
    <div><button onClick={() => { setMyTask(!myTask) }}>100Task</button></div>
    <div className="profileIMG">
      <img src='image' alt="profile logo" onClick={(id) => { setMyProfile(!myProfile) }}/>
      </div>
    </div>
    </div>
  </div>
   <Profile  myProfile={myProfile} id={id}/>

      
    </div>
  </div>
  )
}

export default NavBarMentee
