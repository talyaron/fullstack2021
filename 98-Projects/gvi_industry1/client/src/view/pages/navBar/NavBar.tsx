import React from "react";
import NavBarMentee from "./components/NavBarMentee";
import NavBarMentor from "./components/NavBarMentor";
import { useState, useEffect } from "react";
import axios from "axios";
import { type } from "os";
interface navBarProps {
  currentUserType:String,
  loggedInUser: any;

}
function NavBar(props:navBarProps) {
  const {
    currentUserType,
    loggedInUser,

  } = props; 

console.log(currentUserType)
//  useEffect(()=>{
  
//  },[loggedInUser])



  return(
  
    currentUserType==="mentee" ? (
      <>
        <NavBarMentee

          loggedInUser={loggedInUser}
 
        />
      </>
    ) : (
      <>
        <NavBarMentor
          loggedInUser={loggedInUser}
        />
      </>
    )
  )
}

export default NavBar;
