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

<<<<<<< HEAD
          <Link to="profile">
          <img
            src={profilePic}
=======
        {/* {loggedInUser ? <p>{loggedInUser?.name?.first}</p> : null} */}
          <Link to="profile">
          <img
            src={
              loggedInUser && loggedInUser.image
                ? loggedInUser.image
                : 'https://t4.ftcdn.net/jpg/03/40/12/49/360_F_340124934_bz3pQTLrdFpH92ekknuaTHy8JuXgG7fi.jpg' 
            }
            alt='profile imge'
         
>>>>>>> dev
          /></Link>
        </div>
      </div>
    
    </div>
  );
}

export default NavBarMentor;
