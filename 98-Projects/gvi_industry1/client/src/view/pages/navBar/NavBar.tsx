import React from "react";
import NavBarMentee from "./components/NavBarMentee";
import NavBarMentor from "./components/NavBarMentor";
import { useState, useEffect } from "react";
import axios from "axios";
import { type } from "os";

function NavBar() {
  const [myMentors, setMyMentors] = useState(false);
  const [myProfile, setMyProfile] = useState(false);
  const [request, setRequest] = useState(false);
  const [mentorMatching, setMentorMatching] = useState(false);
  const [myTask, setMyTask] = useState(false);
  const [loggedInUser, setloggedInUser] = useState({});
  const [myMentee, setMyMentee] = useState(false);
  const [matching, setMatching] = useState(false);
  const [currentUserType, setCurrentUserType] = useState("");
 
 
  useEffect(() => {
    //get data on the user and show the chosen user by id

    (async () => {
      try {
        const { data } = await axios.post("/api/users/get-LoggedIn-Profile");
        const { currentUser } = data;
    
     
        setloggedInUser(currentUser);
          setCurrentUserType(currentUser.type);

        if (!loggedInUser) {
          throw new Error("no profile");
        }
      } catch (err: any) {
        console.error(err.message);
      }
    })();
  }, []);

  return(
  
    currentUserType === "mentee" ? (
      <>
        <NavBarMentee
          myProfile={myProfile}
          setMyProfile={setMyProfile}
          request={request}
          setRequest={setRequest}
          myMentors={myMentors}
          setMyMentors={setMyMentors}
          mentorMatching={mentorMatching}
          setMentorMatching={setMentorMatching}
          loggedInUser={loggedInUser}
          myTask={myTask}
          setMyTask={setMyTask}
        />
      </>
    ) : (
      <>
        <NavBarMentor
          myProfile={myProfile}
          setMyProfile={setMyProfile}
          request={request}
          setRequest={setRequest}
          myMentee={myMentee}
          setMyMentee={setMyMentee}
          matching={matching}
          setMatching={setMatching}
          loggedInUser={loggedInUser}
        />
      </>
    )
  )
}

export default NavBar;
