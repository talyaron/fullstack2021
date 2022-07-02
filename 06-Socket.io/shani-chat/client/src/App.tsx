import {socket} from './index';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import React,{useEffect,useState} from 'react';
import ChatRoom from './Components/ChatRoom';
import Login from './Components/Login';
import RoomsNavigator from './Components/RoomsNavigator';

function App() {
  const [user,setUser]=useState<string>('')
  console.log(user)
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Login setUser={setUser} user={user}/>} />
     <Route path='rooms' element={<RoomsNavigator/>}/>
     <Route path=':chatRoomNumber' element={<ChatRoom user={user}/>}/>
    
    </Routes>
  </BrowserRouter>
   
  );
}

export default App;
