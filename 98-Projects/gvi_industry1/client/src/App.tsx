import { socket } from "./index";
import Profile from "./view/pages/mentee/Profile";
// import Card from "./view/pages/mentee/Card"//
import React from "react";
import SelectedMentor from "./view/pages/mentee/SelectedMentor";
import "./view/Styles/global.scss";
import HomePage from "./view/Components/HomePage";
import Matching from "./view/pages/matching/Matching";
import Chat from "./view/pages/Chat/Chat";
import WelcomePage from "./view/Components/WelcomePage";
import { useState, useEffect } from "react";
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
  let { userId } = useParams();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="navBar" element={<Layout />}>
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
      </Routes>
    </Router>
  );
}

export default App;
