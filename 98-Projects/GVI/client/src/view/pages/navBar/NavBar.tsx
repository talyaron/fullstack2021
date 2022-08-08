
import { Link } from "react-router-dom";
const logo = require("./components/gvi_logo.png");


interface navBarProps {
  currentUserType: String;
  profilePic:any;
}
function NavBar(props: navBarProps) {

  const { currentUserType,profilePic } = props;

  
  
  return currentUserType === "mentee" ? (
    <div className="navBar">
      <div className="logo">
        <Link className="link" to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="btns">
        <div className="btn">
          <Link className="link" to="request">
            Requests
          </Link>
        </div>
        <div className="btn">
          <Link className="link" to="chat">
            My Mentors
          </Link>
        </div>
        <div className="btn">
          <Link className="link" to="matching">
            {" "}
            Mentor Matching
          </Link>
        </div>

        <div className="profileIMG">
         
          <Link to="profile">
            <img
              src={profilePic}
             
            />
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className="navBar">
      <div className="logo">
        <Link className="link" to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="btns">
        <div className="btn">
          <Link className="link" to="request">
            Requests
          </Link>
        </div>
        <div className="btn">
          <Link className="link" to="chat">
            My Mentees
          </Link>
        </div>
        <div className="btn">
          <Link className="link" to="matching">
            Matching
          </Link>
        </div>
        <div className="profileIMG">
          
          <Link to="profile">
            <img
              src={profilePic}
              alt="profile imge"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
