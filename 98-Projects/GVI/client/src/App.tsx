import {socket} from './index';
import Profile from './view/pages/mentee/Profile';
// import Card from "./view/pages/mentee/Card"//
import React from 'react';
import './view/styles/global.scss';

import Matching from './view/pages/matching/Matching';
import Request from './view/components/Request';
import Chat from './view/pages/Chat/Chat';
import {useState, useEffect} from 'react';
import AdminLayout from './view/pages/AdminLayout';
import axios from 'axios'
import {BrowserRouter as Router, Routes, Route, useParams, BrowserRouter} from 'react-router-dom';
import SelectedUsers from './view/components/SelctedUsers';
import Layout from './view/pages/Layout';
import RequestUsers from './view/pages/mentee/RequestUsers';
import HomePage from './view/components/HomePage';
import WelcomePage from './view/components/WelcomePage';
import AdminPage from './view/components/AdminPage';
import RequestLayout from './view/pages/RequestLayout';
import Answered from './view/components/Answered';
import Pending from './view/components/Pending';


function App() {
  const [usersList, setUsersList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
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
                <Route index element={<Request />} />
                <Route path="from-mentee" element={<Request />} />
                <Route path="answered" element={<Answered />} />
                <Route path="pending" element={<Pending />} />
                  ):(
                    <Route index element={<Request />} />
                <Route path="from-mentor" element={<Request />} />
                <Route path="answered" element={<Answered />} />
                <Route path="pending" element={<Pending />} />
                  )


            </Route>

          
        </Route>

        
        <Route path="mainPageAdmin" element={<AdminLayout loggedInUser={loggedInUser} />}
        >
          <Route index element={<AdminPage />} />
          <Route path="chat" element={<Chat />} />
          <Route path="request" element={<RequestUsers />} />

          <Route path="profile" element={<Profile />} />

        </Route>

        
      </Routes>

      {/* the navigation system / the conditiona rendering of routes */}
   
    </Router>

    
  );
}

export default App;
