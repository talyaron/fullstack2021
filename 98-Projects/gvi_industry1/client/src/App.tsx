import { socket } from "./index";
import Profile from "./view/pages/mentee/Profile";
// import Card from "./view/pages/mentee/Card"//
import React from "react";
import SelectedMentor from "./view/pages/mentee/SelectedMentor";
import "./view/styles/global.scss";
import HomePage from "./view/components/HomePage";
import Matching from "./view/pages/matching/Matching";
import Chat from "./view/pages/Chat/Chat";
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
// interface app{
//   id:String;
//   image:String;

// }

function App() {
  const [mentorsList, setMentorsList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [myProfile, setMyProfile] = useState(false);
  let { userId } = useParams();

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get('/api/users/get-user')
  //     const {user} = data
  //     setCurrentUser(user)
  //     console.log(user)
  //   })();
  // }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="profile" element={<Layout />}>
          <Route index element={<Profile id="1234" myProfile={myProfile} />} />

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
