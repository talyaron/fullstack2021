import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate, Link
} from "react-router-dom";
import RootClient from './RootClient';


function App() {

  return (
    <BrowserRouter>
      <RootClient />
    </BrowserRouter>
  );
}

export default App;
