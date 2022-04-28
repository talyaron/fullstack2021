import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';

function App() {
  return (
    
     <div className='App'>
        
        <ul className='myGreetingList'>
          <Greeting theGreeting="Hola"/>
          <Greeting theGreeting="Shalom"/>
          <Greeting theGreeting="Hi"/>
         
        </ul>
        
      </div>   
  );
}

export default App;
