import React from "react";
import { UserInfo } from "../../AnimatedRoutes";

interface UserNavbarProps {
  currentUser?: UserInfo;
}

const UserNavBar = (props: UserNavbarProps) => {
  const { currentUser } = props;
  // const { title, content } = articleInfo

  return (
    <div className="comp-navBar">
      <p>{currentUser?.firstName}</p>
      <p>{currentUser?.lastName}</p>
      <p>{currentUser?.position}</p>
      <p>{currentUser?.workSpace}</p>
    </div>
  );
};

export default UserNavBar;
