import React ,{useEffect,useState} from "react";
import axios from 'axios'
import NavBar from "./navBar/NavBar";
import { Outlet } from "react-router-dom";

interface navBarLayoutProps {
  currentUserType: String;
  currentUser: any;
}

const Layout = (props: navBarLayoutProps) => {

  const { currentUserType, currentUser } = props;

  
  const profilePic = currentUser.image

  
  
  return (
    <>
      <NavBar profilePic={profilePic} currentUserType={currentUserType} />

      <Outlet />
    </>
  );
};

export default Layout;
