import React from "react";

import "./View/styles/global.scss";

import Header from "./View/Pages/Header";
import Footer from "./View/Pages/Footer";
import Container from "./View/Components/Container";

import { useState } from "react";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header pageName="Fullstack Development Memes" logoUrl="" />
        
        
     
        <Container />

        <Footer footerText="<Footer footerText='No more memes to see here...get back to coding '/>" />
      </header>
    </div>
  );
}

export default App;
