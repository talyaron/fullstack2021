import React from 'react';
import logo from './logo.svg';
import './App.scss';
import debounce from './ThrottleDebounce/debounce'
import StatusState from './StatusState';
const name = 'Etan'
let status = document.readyState;
const updatedStatus = debounce((text:any) => {
  status = text
  console.log(text , 'hi');
  
})


const statusUpdate:any = updatedStatus(status)
console.log(statusUpdate);




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {name}
          <StatusState
          status={statusUpdate}
/>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
