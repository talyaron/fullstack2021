import React from "react";
import { Link } from "react-router-dom";

interface navBarMentorProps {
  loggedInUser: any;
}
function NavBarMentorRequest(props: navBarMentorProps) {
  const { loggedInUser } = props;

  return (
    <div className="req_navBar">
      <div className="req_btns">
        <div className="req_btn_ans_pen">
          <div className="req_btn">
            <Link className="link" to="answered">
              Answered
            </Link>
          </div>
          <div className="req_btn">
            <Link className="link" to="pending">
              {" "}
              Pending
            </Link>
          </div>
        </div>
        <div className="req_btn">
          <Link className="link" to="from-mentee">
            From Mentee
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBarMentorRequest;
