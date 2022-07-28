import { useAppSelector } from './app/hooks';
import {
  selectGivenText,
} from './features/slices/textSlice'
import { Counter } from './features/components/counter/Counter';
import './App.css';

function App() {
  const givenText = useAppSelector(selectGivenText)
  return (
    <div className="App">
      <header className="App-header">
        <img src='' className="App-logo" style={{width: '100%', overflowWrap: 'break-word'}} alt={givenText} />
        <Counter />
        
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
