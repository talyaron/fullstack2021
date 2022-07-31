import React from "react";
import {Link} from "react-router-dom";


interface navBarMentorProps {

  loggedInUser: any;
  profilePic:any;
  logo:String;
}

function NavBarMentor(props: navBarMentorProps) {
  const {loggedInUser,profilePic,logo} = props;

console.log(loggedInUser);

  return (
    <div className="navBar">
      <div className="logo" >
      <Link className="link" to='/'>
        <img src={`${logo}`} alt="logo" />
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
            src={profilePic}
          /></Link>
        </div>
      </div>
    
    </div>
  );
}

export default NavBarMentor;
