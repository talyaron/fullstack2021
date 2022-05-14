import React ,{useState,useEffect}from 'react';
import useSound from "use-sound";
import './View/styles/global.scss';

import Ball from "./View/Components/Ball";
import Counter from "./View/Components/Counter";

function App() {
  const explosion="audio/ballClicked.mp3";
  const beachBackground='audio/beachBackground.mp3';
  const splash="audio/splash.mp3"

  const [playBallExplosion,setPlay]=useState(0.00);
  const [playBackgroundMusic,setPlayBackground]=useState(1.50);
  const [playSplash,setPlaySplash]=useState(0.00)
  
  const [playExplosion] = useSound(explosion,{
    playBallExplosion,
    volume: 0.5,
    
  });
  const [playBackground] = useSound(beachBackground,{
    playBackgroundMusic,
    volume: 0.5,
    
    
  });
  const [playSplashNoise] = useSound(splash,{
    playSplash,
    volume: 0.5,
    
  });

  const [counter,setCounter]=useState(0)
 
  return (
    
    <div className="App" onMouseEnter={() => playBackground()} >
     <Counter counter={counter}/>
     <Ball  playSplashNoise={playSplashNoise} playExplosion={playExplosion} counter={counter} setCounter={setCounter}/>
     

     
    </div>
  );
}

export default App;
