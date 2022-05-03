
import logo from './logo.svg';
import './View/styles/global.scss'
import Head from './View/Components/Head'
import Foot from './View/Components/Foot'
import Wrapper from './View/Components/Wrapper'

// import Eegg from './View/Components/Eegg'
// import Eegg2 from './View/Components/Eegg2'


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
