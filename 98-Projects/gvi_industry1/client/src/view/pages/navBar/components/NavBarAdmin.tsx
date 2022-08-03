import React from "react";
import { Link} from "react-router-dom";
interface navBarAdminProps {
  loggedInUser: any;
}
function NavBarAdmin(props: navBarAdminProps) {
  const { loggedInUser } = props;
  return (
    <div className="navBar">
      <div className="logo">
        <Link className="link" to="/">
          <img src="./gvi-logo.png" alt="logo" />
        </Link>
      </div>
      <div className="profileIMG">
        <Link to="profile">
          <img
            src={loggedInUser && loggedInUser.image ? loggedInUser.image : null}
            alt="profile logo"
          />
        </Link>
      </div>
    </div>
  );
}

export default NavBarAdmin;
