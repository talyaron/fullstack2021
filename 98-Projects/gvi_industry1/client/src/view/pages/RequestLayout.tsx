import React from "react";
import NavBar from "./navBar/NavBar";
import { Outlet } from "react-router-dom";
import NavBarRequest from "./navBar/NavBarRequest";

interface navBarRequestLayoutProps {
  currentUserType: String;
  loggedInUser: any;
}
const RequestLayout = (props: navBarRequestLayoutProps) => {
  const { currentUserType, loggedInUser } = props;
  
  return (
    <>
      <NavBarRequest loggedInUser={loggedInUser} currentUserType={currentUserType} />

      <Outlet />
    </>
  );
};

export default RequestLayout;
