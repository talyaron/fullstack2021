import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../../mentee/Profile";
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

  const navigate = useNavigate()

  useEffect(()=>{
    if(myProfile===true) {
      navigate('/profile')
    }
    console.log(myProfile)
  },[myProfile])

  return (
          <div className="navBar">
            <div className="logo">
              <img src="./gvi-logo.png" alt="logo" />
            </div>

            <div className="btn">
              <div>
                <button
                  onClick={() => {
                    setRequest(!request);
                  }}
                >
                  Requests
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    setMyMentors(!myMentors);
                  }}
                >
                  My Mentors
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    setMentorMatching(!mentorMatching);
                  }}
                >
                  Mentor Matching
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    setMyTask(!myTask);
                  }}
                >
                  100Task
                </button>
              </div>
              <div className="profileIMG"    onClick={(id) => {
                    setMyProfile(!myProfile);
                  }}>
                <img
                  src={
                    loggedInUser && loggedInUser.image
                      ? loggedInUser.image
                      : null
                  }
                  alt="profile logo"
               
                />
              </div>
            </div>
            {/* <Profile  myProfile={myProfile} id={loggedInUser._id}/> */}
          </div>

  );
}

export default NavBarMentee;
