import { socket } from "./index";
import Profile from "./view/pages/mentee/Profile";
// import Card from "./view/pages/mentee/Card"//
import React from "react";
import SelectedMentor from "./view/pages/mentee/SelectedMentor";
import "./view/styles/global.scss";
import HomePage from "./view/components/HomePage";
import Matching from "./view/pages/matching/Matching";
import Chat from "./view/pages/Chat/Chat";
import WelcomePage from "./view/components/WelcomePage";
import { useState, useEffect } from "react";
import AdminPage from "./view/components/AdminPage";
import AdminLayout from "./view/pages/AdminLayout";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

import SelctedMentors from "./view/pages/mentee/SelctedMentors";
import NavBar from "./view/pages/navBar/NavBar";
import NavBarMentee from "./view/pages/navBar/components/NavBarMentee";
import Layout from "./view/pages/Layout";


function App() {
  const [mentorsList, setMentorsList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [myProfile, setMyProfile] = useState(false);
  const [loggedInUser, setloggedInUser] = useState({});
  const [currentUserType, setCurrentUserType] = useState("");
  let { userId } = useParams();
  useEffect(() => {
    //get data on the user and show the chosen user by id

    (async () => {
      try {
        const { data } = await axios.post("/api/users/get-LoggedIn-Profile");
        const {currentUser} = data;
        
     
        setloggedInUser(currentUser);
          setCurrentUserType(currentUser.type);

        if (!loggedInUser) {
          throw new Error("no profile");
        }
      } catch (err: any) {
        console.error(err.message);
      }
    })();
  }, [currentUserType]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="navBar" element={<Layout  loggedInUser={loggedInUser}  currentUserType={ currentUserType}/>}>
          <Route index element={<WelcomePage/>} />
          <Route path="profile" element={<Profile id="" />} />
          <Route path="chat" element={<Chat />} />
          <Route
            path="matching"
            element={
              <Matching
                mentorsList={mentorsList}
                setMentorsList={setMentorsList}
                currentUser={currentUser}
              />
            }
          />
          <Route path=":id" element={<SelctedMentors />} />
        </Route>
        <Route path="navBarAdmin" element={<AdminLayout  loggedInUser={loggedInUser}/>}>
          <Route index element={<AdminPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
