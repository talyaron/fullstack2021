import {socket} from './index';
import Profile from './view/pages/mentee/Profile';
// import Card from "./view/pages/mentee/Card"//
import React from 'react';

import './view/styles/global.scss';

import HomePage from '../.././client/src/view/components/HomePage'
import Matching from './view/pages/matching/Matching';
import Request from './view/Components/Request';
import Chat from './view/pages/Chat/Chat';
import WelcomePage from '../.././client/src/view/components/WelcomePage'
import {useState, useEffect} from 'react';
import AdminPage from '../.././client/src/view/components/AdminPage';
import AdminLayout from './view/pages/AdminLayout';
import axios from 'axios'

import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom';

<<<<<<< HEAD
import SelectedUsers from './view/Components/SelctedUsers';
=======
import SelectedUsers from '../.././client/src/view/components/SelctedUsers';
import NavBar from './view/pages/navBar/NavBar';
import NavBarMentee from './view/pages/navBar/components/NavBarMentee';
>>>>>>> origin
import Layout from './view/pages/Layout';
import RequestUsers from './view/pages/mentee/RequestUsers';
import SeletedMetors from './view/pages/mentee/SelctedMentors';

function App() {
  const [usersList, setUsersList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [currentSearch, setCurrentSearch] = useState([]);
  const [filterOptions,setFilterOptions] = useState([]);
  const [checked,setChecked] = useState(false);
  const [myProfile, setMyProfile] = useState(false);
  const [loggedInUser, setloggedInUser] = useState({});
  const [currentUserType, setCurrentUserType] = useState("");

  let { userId } = useParams();


  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/users/get-user");
      const { user } = data;
     
      setCurrentUser(user);

      const {type} = user;
      if(type){
        setCurrentUserType(type)
        
      }
    })();
  }, []);

 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage setCurrentUserType={setCurrentUserType}
        setloggedInUser={setloggedInUser}
        />} />
        <Route
          path="mainPage"
          element={
            <Layout
              loggedInUser={loggedInUser}
              currentUserType={currentUserType}
            />
          }
        >
          <Route index element={<WelcomePage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="chat" element={<Chat />} />
          <Route
            path="matching"
            element={
              <Matching
                usersList={usersList}
                setUsersList={setUsersList}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                currentSearch={currentSearch}
                setCurrentSearch={setCurrentSearch}
                filterOptions={filterOptions}
                setFilterOptions={setFilterOptions}
                checked={checked}
                setChecked={setChecked}

              />
            }
          />
<<<<<<< HEAD
          <Route path="matching/selected-users" element={<SelectedUsers />} />
          <Route path="request" element={<Request />} />
=======
          <Route path="matching/selected-mentors" element={<SeletedMetors />} />
          <Route path="request" element={<RequestUsers />} />

>>>>>>> origin
        </Route>
        <Route//
          path="mainPageAdmin"
          element={<AdminLayout loggedInUser={loggedInUser} />}
        >
          <Route index element={<AdminPage />} />
          <Route path="chat" element={<Chat />} />
          <Route path="request" element={<RequestUsers />} />

          <Route path="profile" element={<Profile />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
