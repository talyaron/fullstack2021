import logo from './logo.svg';
import './View/styles/global.scss';

import Box from './View/Components/Box';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Box text='aaa' title='The big title'/>
        <p><Box text='bbb' title='The 2nd big title'/></p>
        <p><div>dgdg</div></p>
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
