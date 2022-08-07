import React from "react";
import NavBar from "./navBar/NavBar";
import { Outlet } from "react-router-dom";

interface navBarLayoutProps {
  currentUserType: String;
  currentUser: any;
}
const Layout = (props: navBarLayoutProps) => {
  const { currentUserType, currentUser } = props;
  
  return (
    <>
      <NavBar currentUser={currentUser} currentUserType={currentUserType} />

      <Outlet />
    </>
  );
};

export default Layout;
