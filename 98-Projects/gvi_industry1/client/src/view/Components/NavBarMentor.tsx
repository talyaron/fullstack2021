import React from 'react';
import {useState} from 'react';
import Matching from '../pages/matching/Matching';
import Profile from '../pages/mentee/Profile'

interface navBarProps{
  id:String
  image:String
}

function NavBarMentor(props:navBarProps) {
  const [myMentee, setMyMentee]= useState(false);
  const [matching, setMatching]= useState(false);
  const [request, setRequest]= useState(false);
  const [myProfile, setMyProfile]= useState(false);

  const {image, id}=props;
  return (
    <div>
      <div className='navBar'>

      <div>
      <div className='navBar'>
                    
        <div className='logo'><img src="./gvi-logo.png" alt="logo" /></div>

        <div className="btn">
      <div><button onClick={() => { setRequest(!request) }}>Requests</button></div>
      <div><button onClick={() => { setMyMentee(!myMentee) }}>My Mentees</button></div>
      <div><button onClick={() => { setMatching(!matching) }}>Matching</button></div>
      <div className="profileIMG">
        <img src='image' alt="profile logo" onClick={(id) => { setMyProfile(!myProfile) }}/>
        </div>
      </div>
      </div>
    </div>
     <Profile  myProfile={myProfile} id={id}/>
     <Matching matching={matching}/>
        
      </div>
    </div>
  )
}

export default NavBarMentor
