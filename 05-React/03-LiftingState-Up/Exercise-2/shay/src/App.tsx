import "./view/style/global.scss";
import Ball from "./view/components/Ball";
import React, { useState } from "react";
import useSound from "use-sound";

function App() {
  const explosion = './audio/explosions.mp3';
  const backgroundMusic = './audio/avengers.mp3';
  const splash ='./audio/splash.mp3'

  const [counter, setCounter] = useState(0);

  const [playExplosion,setPlay]=useState(0.00);
  const [playBackgroundMusic,setPlayBackground]=useState(1.50);
  const [playSplash,setPlaySplash]=useState(0.00)
  
  const [playExplosionNoise] = useSound(explosion,{
    playExplosion,
    volume: 0.4,
    
    
  });
  const [playBackground] = useSound(backgroundMusic,{
    playBackgroundMusic,
    volume: 0.1,
    
    
  });
  const [playSplashNoise] = useSound(splash,{
    playSplash,
    volume: 1.0,
    
    
  });
  return (
    <div className="App"  onMouseEnter={() => playBackground()}>
      <header className="App-header">
        <Ball playExplosionNoise ={playExplosionNoise} playSplashNoise={playSplashNoise} counter={counter} setCounter={setCounter} />
      </header>
    </div>
  );
}

export default App;
