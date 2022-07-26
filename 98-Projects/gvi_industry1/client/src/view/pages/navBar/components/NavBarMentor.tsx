import React from "react";

import {Link} from "react-router-dom";

interface navBarMentorProps {

  loggedInUser: any;

}

function NavBarMentor(props: navBarMentorProps) {
  const {

    loggedInUser,

  } = props;


  return (
    <div className="navBar">
      <div className="logo">
      <Link className="link" to='/'>
        <img src="../gvi-logo.png" alt="logo" />
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

        {loggedInUser ? <p>{loggedInUser?.name?.first}</p> : null}
          {/* <Link to="profile">
          <img
            src={
              loggedInUser && loggedInUser.image
                ? loggedInUser.image
                : null
            }
            alt='{loggedInUser.name.first}'
         
          /></Link> */}
        </div>
      </div>
    
    </div>
  );
}

export default NavBarMentor;
