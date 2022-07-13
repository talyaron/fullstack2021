import React from 'react';
import {useState, useEffect} from 'react';
import Matching from '../../matching/Matching';
import Profile from '../..//mentee/Profile'

interface navBarMentorProps{
  setRequest:Function;
  request:Boolean;
  setMyMentee:Function;
  myMentee:Boolean;
  setMatching:Function;
  matching:Boolean;
  loggedInUser:any;
  setMyProfile:Function;
  myProfile:Boolean;
}

function NavBarMentor(props:navBarMentorProps) {


  const {setRequest,
    request,
    setMyMentee,
    myMentee,
    setMatching,
    matching,
    loggedInUser,
    setMyProfile,
    myProfile,}=props;
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
        <img src={loggedInUser && loggedInUser.image ? loggedInUser.image : null} alt="profile logo" onClick={(id) => { setMyProfile(!myProfile) }}/>
        </div>
      </div>
      </div>
    </div>
     <Profile  myProfile={myProfile} id={loggedInUser._id}/>
     {/* <Matching matching={matching}/>
         */}
      </div>
    </div>
  )
}

export default NavBarMentor