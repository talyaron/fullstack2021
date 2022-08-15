import React from "react";
import { Link} from "react-router-dom";
const logo = require('./gvi_logo.png');

interface navBarAdminProps {
  loggedInUser: any;
}
function NavBarAdmin(props: navBarAdminProps) {
  const { loggedInUser } = props;
  return (
    <div className="navBar">
      <div className="logo">
        <Link className="link" to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="profileIMG">
        <Link to="profile">
          <img
            src={loggedInUser && loggedInUser.image ? loggedInUser.image : 'https://t4.ftcdn.net/jpg/03/40/12/49/360_F_340124934_bz3pQTLrdFpH92ekknuaTHy8JuXgG7fi.jpg' }
            alt="profile logo"
          />
        </Link>
      </div>
    </div>
  );
}

export default NavBarAdmin;
