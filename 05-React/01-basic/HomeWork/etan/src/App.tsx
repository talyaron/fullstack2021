
import logo from './logo.svg';
import './View/styles/app.scss'
import Head from './View/Components/Head'
import Foot from './View/Components/Foot'
import Wrapper from './View/Components/Wrapper'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Head/>
        <Wrapper/>
        <Foot/>
      </header>
    </div>
  );
}

export default App;
