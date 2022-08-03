import React from "react";
import { Link} from "react-router-dom";


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
              {/* {loggedInUser ? <p>{loggedInUser?.name?.first}</p> : null} */}
                    <Link to="profile">
                <img 
                  src={
                    loggedInUser && loggedInUser.image
                      ? loggedInUser.image
                      : 'https://t4.ftcdn.net/jpg/03/40/12/49/360_F_340124934_bz3pQTLrdFpH92ekknuaTHy8JuXgG7fi.jpg' 
                  }
                  alt="profile logo"
               
                /></Link>
              </div>
            </div>

          </div>

  );
}

export default NavBarMentee;
