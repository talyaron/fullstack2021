import React ,{useEffect,useState} from "react";
import axios from "axios";
import { Link} from "react-router-dom";


interface navBarMenteeProps {

  loggedInUser: any;
  profilePic:any;
}
function NavBarMentee(props: navBarMenteeProps) {

  
  const {loggedInUser,profilePic} = props;

  console.log(loggedInUser);
  
  return (
          <div className="navBar">
            <div className="logo">
              <Link className="link" to='/'>
              <img src={ require('../../../../public/gvi-logo.png') } alt="logo" />
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
                  src={profilePic} 
                  alt="profile logo"
               
                /></Link>
              </div>
            </div>

          </div>

  );
}

export default NavBarMentee;
