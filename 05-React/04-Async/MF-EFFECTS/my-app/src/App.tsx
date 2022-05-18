import React, { useState } from 'react';
import './Views/styles/global.scss';

function App() {

  const [dark, setDark] = useState(true);
  return (
    <div className="App">
      {dark ? <header className="App-header">

        <p>
          dark
        </p>

        {/* {dark?<div className='dark'></div>:null} */}

        {/* {dark?<div className='dark'>dark</div>:null} */}

        <button onClick={() => setDark(!dark)}>Light Mode</button>



      </header> : <header className="App-header-light">

        <p style={{ color: 'black' }}>
          Light
        </p>

        {/* {dark?<div className='dark'></div>:null} */}

        {/* {dark?<div className='dark'>dark</div>:null} */}

        <button onClick={() => setDark(!dark)}>Dark Mode</button>





      </header>}


    </div>
  );
}

export default App;
