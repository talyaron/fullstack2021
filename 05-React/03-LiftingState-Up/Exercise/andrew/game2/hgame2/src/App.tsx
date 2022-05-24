import { useState, useEffect } from 'react';
import './view/style/global.scss'
import Room from './view/components/Room'
import HUD from './view/components/HUD';
import './App.css';
import ShotSound from './view/audio/shotSound.mp3'
import hitSound from './view/audio/hitSound.mp3'
import buzzerSound from './view/audio/buzzerSound.mp3'

interface position {
  x: number;
  y: number;
}

let gameStarted: any = false;
let lastTarget = 0;
let shotAudio = new Audio(ShotSound)
let hitAudio = new Audio(hitSound)
let buzzerAudio = new Audio(buzzerSound)
buzzerAudio.volume = 0.2;

function App() {
  const [position, setPosition] = useState<position>({ x: 0, y: 0 });
  const [score, setScore] = useState<number>(0);
  const time = 1500;
  let init = 1;
  useEffect(() => {
    if (init) {
      init--;
      popTarget()
    }
  }, [score])


  function handleMouseClick() {
    shotAudio.pause();
    shotAudio.currentTime = 0;
    shotAudio.play()
    const cross: any = document?.querySelector('.crosshair');
    const muzzle: any = document?.querySelector('.muzzle');
    const targets: any = document?.querySelectorAll('.target');
    let targetToShoot: any = ''

    targets.forEach((target: any) => {
      if (!target.classList.contains('hit')) {
        targetToShoot = target;
      }
    });

    const hitBox: any = targetToShoot.firstChild


    muzzle.classList.add('fire')
    setTimeout(() => {
      muzzle.classList.remove('fire');
    }, 100);

    let TargetRect = hitBox?.getBoundingClientRect();
    let crossRect = cross?.getBoundingClientRect();
    if (TargetRect) {
      if (TargetRect.top <= (crossRect.top + 10) && (crossRect.top + 10) <= TargetRect.bottom && TargetRect.right >= (crossRect.left + 10) && (crossRect.left + 10) >= TargetRect.left) {
        setScore(score + 500);
        targetToShoot.classList.add('hit');
        hitAudio.play();
      }
    }
  }
  function popTarget() {
    const targets: any = document?.querySelectorAll('.target');
    let id = 0;
    do {
      id = Math.ceil(Math.random() * 4);
    } while (id == lastTarget);
    lastTarget = id;


    let targetToShoot: any = '';
    targets.forEach((target: any) => {
      if (target.id == id) {
        targetToShoot = target;
      }
    });
    targetToShoot.classList.remove('hit');
    setTimeout(() => {
      if (!targetToShoot.classList.contains('hit')) {
        setScore(score - 250);
        targetToShoot.classList.add('hit');
        buzzerAudio.play();
      }
    }, time);

  }




  function handleMouse(ev: any) {
    const mousePosition = { x: ev.clientX, y: ev.clientY }
    const viewPort = { x: window.screen.width, y: window.screen.height }
    setPosition({ x: (mousePosition.x / viewPort.x * 200) - 50, y: (mousePosition.y / viewPort.y * 200) - 50 })
  }
  return (
    <div className="App">
      <header className="App-header" tabIndex={0} style={{ cursor: "none" }}>
        <HUD score={score} />
        <Room view={handleMouse} position={position} clickFunction={handleMouseClick} />
      </header>
    </div>
  );
}

export default App;
