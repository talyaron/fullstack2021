import React from 'react';
// import logo from './logo.svg';
import './view/style/global.scss'
import Header from './view/components/Header';
import Footer from './view/components/Footer';
import Main from './view/components/Main';

export interface MemeInterface {
  front:string, back:string
}


const memes = [
  { front: "https://gcdnb.pbrd.co/images/G8VhxM5N9EQj.png?o=1", back: "https://gcdnb.pbrd.co/images/nwtTu6bJGp7r.png?o=1" },
  { front: "https://gcdnb.pbrd.co/images/q9KEEB3gh8CW.png?o=1", back: "https://gcdnb.pbrd.co/images/IWbSFz7FTWAu.png?o=1" },
  { front: "https://gcdnb.pbrd.co/images/fiWFQAfqL9Do.png?o=1", back: "https://gcdnb.pbrd.co/images/uQ3yG8RE8Mlp.png?o=1" },
  { front: "https://gcdnb.pbrd.co/images/9KTdlfa3ukIi.png?o=1", back: "https://gcdnb.pbrd.co/images/wPPQVRh5JYPD.png?o=1" },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Main memes={memes}/>
        <Footer />
      </header>
    </div>
  );
}

export default App;
