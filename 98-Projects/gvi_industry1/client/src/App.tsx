import {socket} from './index';
import Profile from './view/pages/mentee/Profile';
// import Card from "./view/pages/mentee/Card"//
import React from 'react';
import './view/styles/global.scss';

import Matching from './view/pages/matching/Matching';
import Request from './view/Components/Request';
import Chat from './view/pages/Chat/Chat';
import {useState, useEffect} from 'react';
import AdminLayout from './view/pages/AdminLayout';
import axios from 'axios'
import {BrowserRouter as Router, Routes, Route, useParams, BrowserRouter} from 'react-router-dom';
import SelectedUsers from './view/Components/SelctedUsers';
import SelectedUsersAns from './view/Components/SelctedUsersAns';

import Layout from './view/pages/Layout';
import RequestUsers from './view/pages/mentee/RequestUsers';
import HomePage from './view/Components/HomePage';
import WelcomePage from './view/Components/WelcomePage';
import AdminPage from './view/Components/AdminPage';
import RequestLayout from './view/pages/RequestLayout';
import Answered from './view/Components/Answered';
import Pending from './view/Components/Pending';
import FromMentee from './view/Components/FromMentee';
import FromMentors from './view/Components/FromMentors';
import Form1 from './view/Components/Form1';
import SelctedUsersAns from './view/Components/SelctedUsersAns';


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
         

          <Route path="matching/selected-users" element={<SelectedUsers />} />
          {/* <Route path="request" element={<Request />} /> */}
            <Route path="request" element={<RequestLayout  loggedInUser={loggedInUser}
              currentUserType={currentUserType} />}>
                {currentUserType==='mentor'}?(
                <Route index element={<FromMentee />} />
                <Route path="from-mentee" element={<FromMentee />} />
                <Route path="answered" element={<Request />} />
                <Route path="pending" element={<Request />} />
                  ):(
                    <Route index element={<FromMentors />} />
                <Route path="from-mentor" element={<FromMentors />} />
                <Route path="answered" element={<Request />} />
                <Route path="pending" element={<Request />} />
                  )


            </Route>

          
        </Route>

        
        <Route path="mainPageAdmin" element={<AdminLayout loggedInUser={loggedInUser} />}
        >
          <Route index element={<AdminPage />} />
          <Route path="chat" element={<Chat />} />
          <Route path="request" element={<Request />} />

          <Route path="profile" element={<Profile />} />

        </Route>

        
      </Routes>

      {/* the navigation system / the conditiona rendering of routes */}
   
    </Router>

    
  );
}

export default App;
