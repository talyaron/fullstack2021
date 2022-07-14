import React from "react";
import { useState, useEffect } from "react";
import Matching from "../../matching/Matching";
import Profile from "../..//mentee/Profile";
import {Link, useNavigate } from "react-router-dom";

interface navBarMentorProps {
  setRequest: Function;
  request: Boolean;
  setMyMentee: Function;
  myMentee: Boolean;
  setMatching: Function;
  matching: Boolean;
  loggedInUser: any;
  setMyProfile: Function;
  myProfile: Boolean;
}

function NavBarMentor(props: navBarMentorProps) {
  const {
    setRequest,
    request,
    setMyMentee,
    myMentee,
    setMatching,
    matching,
    loggedInUser,
    setMyProfile,
    myProfile,
  } = props;


  return (
    <div className="navBar">
      <div className="logo">
      <Link className="link" to='/'>
        <img src="./gvi-logo.png" alt="logo" />
        </Link>
      </div>

      <div className="btns">
      <div className="btn">
          
          <Link className="link" to="request">Requests</Link>
        </div>
        <div className="btn">
          <Link className="link" to='chat'>My Mentees</Link>
        </div>
        <div className="btn">
           <Link className="link" to='matching'>Matching</Link>
        </div>
        <div className="profileIMG"> 

          <Link to="profile">
          <img
            src={
              loggedInUser && loggedInUser.image
                ? loggedInUser.image
                : null
            }
            alt="profile logo"
         
          /></Link>
        </div>
      </div>
    
    </div>
  );
}

export default NavBarMentor;
