
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky,} from '@react-three/drei';

import './App.css';


import Grid from './view/components/Grid'
import Ocean from './view/components/Ocean'
import Blocks from './view/components/Blocks'
import Button from './view/components/Button'
import Display from './view/components/Display'

interface cell {
  isVacant: boolean
  isActive: boolean
  color: string
}




const shapes = ['O', 'I', 'T', 'J', 'L', 'S', 'Z'];

const tetrominoes: any = {
  I: [[10, 11, 12, 13], [2, 12, 22, 32], [30, 31, 32, 33], [1, 11, 21, 31]],
  O: [[1, 2, 11, 12], [1, 2, 11, 12], [1, 2, 11, 12], [1, 2, 11, 12]],
  T: [[1, 10, 11, 12], [1, 11, 12, 21], [10, 11, 12, 21], [1, 10, 11, 21]],
  J: [[0, 10, 11, 12], [1, 2, 11, 21], [10, 11, 12, 22], [1, 11, 20, 21]],
  L: [[2, 10, 11, 12], [1, 11, 21, 22], [10, 11, 12, 20], [0, 1, 11, 21]],
  S: [[1, 2, 10, 11], [1, 11, 12, 22], [11, 12, 20, 21], [0, 10, 11, 21]],
  Z: [[0, 1, 11, 12], [2, 11, 12, 21], [10, 11, 21, 22], [1, 10, 11, 20]],
}
 export const tetColor: any = {
  I: '#93d192',
  O: '#8d80d1',
  T: '#d99948',
  J: '#ab63b8',
  L: '#0a74d1',
  S: '#995c5c',
  Z: '#40d7db',
}
// const position = [0, 2, 0];
// const size = [2, 1, 4];

let current: any = [];
let scorePlaceHolder: number = 0;
let currentColor: string = '';
let currentType: string = '';
let currentSpin: number = 0;
let lines: number = 0;
const speeds: Array<number> = [48, 43, 38, 33, 28, 23, 18, 13, 8, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 3, 2]
let interval: any;
let twoCounter: number = 2;


function App() {
  let [grid, setGrid] = useState<Array<cell>>([])
  let [score, setScore] = useState<number>(0);
  let [level, setLevel] = useState<number>(1);
  let [gameState, setGameState] = useState<string>('');
  let [freeLook, setFreeLook] = useState<boolean>(false);

  useEffect(() => {
    let initGrid: any = []
    for (let i = 0; i <= 199; i++) {
      initGrid[i] = { isVacant: true, isActive: false, color: '' }
    }
    setGrid([...initGrid])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (score < scorePlaceHolder) setScore(scorePlaceHolder)
  }, [score])

  useEffect(() => {
    if (twoCounter > 0) twoCounter--;
    else {
      clearInterval(interval)
      interval = setInterval(moveDown, (speeds[level] / 60 * 1000));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level])
  function deg2rad(deg: number) {
    return deg * (Math.PI / 180)
  }

  function handleStart() {
    if (gameState === 'ended') {
      //not working
      let initGrid: any = []
      for (let i = 0; i <= 199; i++) {
        initGrid[i] = { isVacant: true, isActive: false, color: '' }
      }
      setGrid([...initGrid])
      lines = 0;
      scorePlaceHolder = 0;
      setScore(0);
      setLevel(1);
      //
    }
    console.log('start');
    setGameState('playing');
    AddPiece()
    interval = setInterval(moveDown, (speeds[level] / 60 * 1000));
  }

  function handleKeyPress(ev: any) {
    // console.log(ev.key);

    switch (ev.key) {
      case 'ArrowDown':
        moveDown()
        break;
      case 'ArrowRight':
        moveSideways(1)
        break;
      case 'ArrowLeft':
        moveSideways(-1)
        break;
      case 'ArrowUp':
        Spin()
        break;
      case ' ':
        setFreeLook(!freeLook)
        break;

    }

  }

  function moveDown() {
    const newGrid = [...grid]

    if (
      (newGrid[current[0] + 10] && (newGrid[current[0] + 10].isVacant || newGrid[current[0] + 10].isActive))
      && (newGrid[current[1] + 10] && (newGrid[current[1] + 10].isVacant || newGrid[current[1] + 10].isActive))
      && (newGrid[current[2] + 10] && (newGrid[current[2] + 10].isVacant || newGrid[current[2] + 10].isActive))
      && (newGrid[current[3] + 10] && (newGrid[current[3] + 10].isVacant || newGrid[current[3] + 10].isActive))) {

      current.forEach((index: number) => {
        newGrid[index].isVacant = true
        newGrid[index].isActive = false
        newGrid[index].color = ''
      });
      current.forEach((index: number) => {
        newGrid[index + 10].isVacant = false
        newGrid[index + 10].isActive = true
        newGrid[index + 10].color = currentColor
      });
      current.forEach((index: number, i: number) => {
        current[i] = current[i] + 10;
      });
    }
    else {
      current.forEach((index: number, i: number) => {
        newGrid[index].isActive = false
        newGrid[index].color = currentColor;
      });
      checkLines();
      AddPiece()
    }
    setGrid([...newGrid]);
  }

  function checkLines() {
    const newGrid: Array<cell> = [...grid];
    let counter: number = 0
    let fullLines: Array<number> = []
    for (let i = 0; i < newGrid.length; i++) {
      if (!newGrid[i].isVacant) counter++;

      if (i % 10 === 9 && counter === 10) {
        fullLines.push(Math.floor(i / 10))
        counter = 0;
      }
      else if (i % 10 === 9) {
        counter = 0;
      }
    }

    for (let i = 0; i < newGrid.length; i++) {
      if (fullLines.some((index: number) => index === Math.floor(i / 10))) {
        newGrid[i].isVacant = true
        newGrid[i].isActive = false
        newGrid[i].color = ''
      }
    }


    counter = 0;
    for (let i = 0; i < newGrid.length; i++) {
      if (newGrid[i].isVacant) counter++;

      if (i % 10 === 9 && counter === 10) {
        for (let j = i; j >= 0; j--) {
          if (j < 10) {
            newGrid[j].isVacant = true
            newGrid[j].isActive = false
            newGrid[j].color = ''
          }
          else {
            newGrid[j].isVacant = newGrid[j - 10].isVacant
            newGrid[j].isActive = newGrid[j - 10].isActive
            newGrid[j].color = newGrid[j - 10].color
          }
        }
      }
      if (i % 10 === 9) {
        counter = 0;
      }
    }

    switch (fullLines.length) {
      case 1:
        scorePlaceHolder = scorePlaceHolder + (40 * level)
        setScore(score + (40 * level))
        break;
      case 2:
        scorePlaceHolder = scorePlaceHolder + (100 * level)
        setScore(score + (100 * level))
        break;
      case 3:
        scorePlaceHolder = scorePlaceHolder + (300 * level)
        setScore(score + (300 * level))
        break;
      case 4:
        scorePlaceHolder = scorePlaceHolder + (1200 * level)
        setScore(score + (1200 * level))
        break;
    }
    lines = lines + fullLines.length;
    setLevel(Math.floor(lines / 10) + 1)
    setGrid([...newGrid])

  }

  function moveSideways(direction: number) {
    const newGrid = [...grid]
    let isEmpty = true;
    if (
      ((direction === 1) && (((current[0] + direction) % 10) && ((current[1] + direction) % 10) && ((current[2] + direction) % 10) && ((current[3] + direction) % 10)))
      || (((direction === -1) && (((current[0] + direction) % 10 !== 9) && ((current[1] + direction) % 10 !== 9) && ((current[2] + direction) % 10 !== 9) && ((current[3] + direction) % 10 !== 9))))
    ) {
      isEmpty = true;
    }
    else {
      isEmpty = false;

    }

    if (isEmpty &&
      ((newGrid[current[0] + direction] && (newGrid[current[0] + direction].isVacant || newGrid[current[0] + direction].isActive))
        && (newGrid[current[1] + direction] && (newGrid[current[1] + direction].isVacant || newGrid[current[1] + direction].isActive))
        && (newGrid[current[2] + direction] && (newGrid[current[2] + direction].isVacant || newGrid[current[2] + direction].isActive))
        && (newGrid[current[3] + direction] && (newGrid[current[3] + direction].isVacant || newGrid[current[3] + direction].isActive)))) {

      current.forEach((index: number) => {
        newGrid[index].isVacant = true
        newGrid[index].isActive = false
        newGrid[index].color = ''
      });
      current.forEach((index: number) => {
        newGrid[index + direction].isVacant = false
        newGrid[index + direction].isActive = true
        newGrid[index + direction].color = currentColor;

      });
      current = current.map((index: number) => index + direction)
      setGrid([...newGrid]);

    }

  }

  function Spin() {
    const newGrid = [...grid]
    let dif: Array<number> = [];

    current.forEach((index: number, i: number) => {
      if (currentSpin !== 3) {

        dif[i] = tetrominoes[currentType][currentSpin + 1][i] - tetrominoes[currentType][currentSpin][i]
      }
      else if (currentSpin === 3) {
        dif[i] = tetrominoes[currentType][0][i] - tetrominoes[currentType][currentSpin][i]
      }
    });
    const testCurrent = [...current];
    for (let i = 0; i < 4; i++) {
      testCurrent[i] = (testCurrent[i] + dif[i]) % 10
    }
    // if(true){
    if (!((testCurrent.some((index: number) => index === 9)) && (testCurrent.some((index: number) => index === 0)))) {
      current.forEach((index: number) => {
        newGrid[index].isVacant = true
        newGrid[index].isActive = false
        newGrid[index].color = ''
      });
      current.forEach((index: number, i: number) => {
        newGrid[index + dif[i]].isVacant = false
        newGrid[index + dif[i]].isActive = true
        newGrid[index + dif[i]].color = currentColor;
      });
      current = current.map((index: number, i: number) => index + dif[i])
      setGrid([...newGrid]);
      currentSpin++;
      if (currentSpin === 4) currentSpin = 0;
    }

  }

  function AddPiece() {
    const index = Math.floor(Math.random() * 7);
    const newPieceName = shapes[index];
    let newPiece: Array<number> = tetrominoes[newPieceName][0]
    newPiece = newPiece.map(index => index + 4)
    let newGrid: Array<any> = [...grid]

    newPiece.forEach(i => {
      if (newGrid[i].isVacant) {
        newGrid[i].isVacant = false
        newGrid[i].isActive = true
        newGrid[i].color = tetColor[newPieceName];
        setGrid([...newGrid]);
        current = newPiece;
        currentColor = tetColor[newPieceName];
        currentType = newPieceName;
        currentSpin = 0;
      }
      else {
        clearInterval(interval);
        setGameState('ended');
      }
    });




    // setCurrent([newPosition]);
  }

  return (
    <div className='canvas' onKeyDown={handleKeyPress} tabIndex={0}>
      <Canvas shadows camera={{ position: [-3, 12, 30], fov: 45, rotation: [deg2rad(0), deg2rad(0), deg2rad(0)] }}>
        <Sky turbidity={2} azimuth={0.75} inclination={0.52} />
        <Ocean />
        <ambientLight intensity={0.2} color='#FFFFFF' />
        <pointLight intensity={0.3} position={[0, 50, 0]} castShadow shadow-mapSize-height={512} shadow-mapSize-width={512} />
        <directionalLight intensity={0.3} position={[3, -5, 30]} />
        <Grid />
        <Blocks grid={grid} />
        <Button handleStart={handleStart} gameState={gameState} />
        <Display score={score} level={level} />
        {freeLook && <OrbitControls />}
      </Canvas>
    </div>
  );
}

export default App;
