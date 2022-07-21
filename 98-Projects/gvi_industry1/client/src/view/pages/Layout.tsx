import React from "react";
import NavBar from "./navBar/NavBar";
import { Outlet } from "react-router-dom";

interface navBarLayoutProps {
  currentUserType: String;
  loggedInUser: any;
}
const Layout = (props: navBarLayoutProps) => {
  const { currentUserType, loggedInUser } = props;
  //console.log(currentUserType, loggedInUser+` layout`);
  
  return (
    <>
      <NavBar loggedInUser={loggedInUser} currentUserType={currentUserType} />

      <Outlet />
    </>
  );
};

export default Layout;
