import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Profile from "../../mentee/Profile";

interface navBarMenteeProps {

  loggedInUser: any;

}
function NavBarMentee(props: navBarMenteeProps) {
  const {

    loggedInUser,

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
       
                 <Link className="link" to="chat">My Mentors</Link>
              </div>
              <div className="btn">
   
                <Link className="link" to='matching'> Mentor Matching</Link>
              </div>
              <div className="btn">

                <Link className="link" to='task'>
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
