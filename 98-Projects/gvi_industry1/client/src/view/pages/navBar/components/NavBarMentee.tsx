import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Profile from "../../mentee/Profile";

interface navBarMenteeProps {
  setRequest: Function;
  request: Boolean;
  setMyMentors: Function;
  myMentors: Boolean;
  setMentorMatching: Function;
  mentorMatching: Boolean;
  setMyTask: Function;
  myTask: Boolean;
  loggedInUser: any;
  setMyProfile: Function;
  myProfile: Boolean;
}
function NavBarMentee(props: navBarMenteeProps) {
  const {
    setRequest,
    request,
    setMyMentors,
    myMentors,
    setMentorMatching,
    mentorMatching,
    setMyTask,
    myTask,
    loggedInUser,
    setMyProfile,
    myProfile,
  } = props;


  return (
          <div className="navBar">
            <div className="logo">
              <Link to='/'>
              <img src="./gvi-logo.png" alt="logo" />
              </Link>
            </div>

            <div className="btn">
              <div>
                {/* <button
                  onClick={() => {
                    setRequest(!request);
                  }}
                >
                  Requests
                </button> */}
                <Link to="/request">Requuests</Link>
              </div>
              <div>
                {/* <button
                  onClick={() => {
                    setMyMentors(!myMentors);
                  }}
                >
                  My Mentors
                </button> */}
                 <Link to="/mymentor">My Mentors</Link>
              </div>
              <div>
                {/* <button
                  onClick={() => {
                    setMentorMatching(!mentorMatching);
                  }}
                >
                  Mentor Matching
                </button> */}
                <Link to='matching'> Mentor Matching</Link>
              </div>
              <div>
                {/* <button
                  onClick={() => {
                    setMyTask(!myTask);
                  }}
                >
                  100Task
                </button> */}
                <Link to='/task'>
                100Task
                </Link>
              </div>
              <div className="profileIMG" >  
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

export default NavBarMentee;
