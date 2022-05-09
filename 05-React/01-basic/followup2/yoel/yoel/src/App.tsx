
import logo from './logo.svg';
import './View/style/global.scss';

import Box from './View/Components/Box'
import Card from './View/Components/Card';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Box  title='first box' text='hello'/>
        <Box  title='second box' text='hello'/>
        <Box  title='third box' text='hello'/>
        <Card/>
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
