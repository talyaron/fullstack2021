import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './view/styles/global.scss';
import Chat from './view/pages/Chat/Chat';
import { socket } from './index'

function App() {


    return (
      <div className="wrapper">
       <Router>
        <Routes>
          <Route path="/chat" element={<Chat/>}/>
        </Routes>
       </Router>
      </div>
    );
}

export default App;
