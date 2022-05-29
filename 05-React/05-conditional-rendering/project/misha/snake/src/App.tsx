import React, { useEffect, useState } from 'react';
import './App.css';
import styled from "styled-components";
import { createNoSubstitutionTemplateLiteral } from 'typescript';

const BIRD_SIZE = 20;
const GAME_WIDTH = 500;
const GAME_HEIGHT = 500;
const GRAVITY = 7;
const JUMP_HEIGHT = 70;
const OBSTACLE_WIDTH = 40;
const OBSTACLE_GAP = 150;
let GAMES_PLAYED = 0;

interface BirdProps {
  size: number;
  top: number;
}

interface GameBoxProps {
  height: number;
  width: number;
}

interface ObsticleProps {
  top: number;
  width: number;
  height: number;
  left: number;
}

function App() {

  const [birdPosition, setBirdPosition] = useState(250);
  const [gameHasStarted, setGameHasStarted] = useState(false)
  const [obstacleHeight, setObstacleHeight] = useState(150)
  const [obstacleLeft, setObstacleLeft] = useState(GAME_WIDTH - OBSTACLE_WIDTH)
  const [score, setScore] = useState(0);
  const [record, setRecord] = useState(0);
  const [tempScore, setTempScore] = useState(0);

  const bottomObstacleHeight = GAME_HEIGHT - OBSTACLE_GAP - obstacleHeight

  useEffect(() => {

    let audioSewers = new Audio('./mp3/Sewer.mp3');

    if (GAMES_PLAYED<1) {

      audioSewers.play();
      audioSewers.volume = 0.5;
      audioSewers.muted = false;

    }

  }, [gameHasStarted])

  document.onkeydown = checkKey;

  function checkKey(e: any) {

    e = e || window.event;
    console.log(e.key)
    //eslint-disable-next-line
    if (e.key == 'ArrowUp') {
      // up arrow

      handleClick();

      let index = Math.floor(Math.random() * 3) + 1;
      let audioFly1 = new Audio(`./mp3/flyjump${index}.mp3`)
      audioFly1.play();
      audioFly1.volume = 0.5;
    }

  }


  useEffect(() => {

    let timeId: any;

    if (gameHasStarted && birdPosition < GAME_HEIGHT - BIRD_SIZE) {
      timeId = setInterval(() => {
        setBirdPosition(birdPosition => birdPosition + GRAVITY)
      }, 24)
    }

    return () => {
      clearInterval(timeId);
    }
  }, [birdPosition, gameHasStarted])

  useEffect(() => {

    let obstacleId: any;

    if (gameHasStarted && obstacleLeft >= -OBSTACLE_WIDTH) {
      obstacleId = setInterval(() => {
        setObstacleLeft((obstacleLeft) => obstacleLeft - 9);
      }, 24);


      return () => {
        clearInterval(obstacleId)
      }

    }

    else {

      setObstacleLeft(GAME_WIDTH - OBSTACLE_WIDTH)
      setObstacleHeight(Math.floor(Math.random() * (GAME_HEIGHT - OBSTACLE_GAP))
      );
      if (gameHasStarted) {
        setScore((score) => score + 1)
      }
    }


  }, [gameHasStarted, obstacleLeft])

  useEffect(() => {
    const hasCollidedWithTopObstacle = birdPosition >= 0 && birdPosition < obstacleHeight;
    const hasCollidedWithBottomObstacle = birdPosition <= 500 && birdPosition >= 500 - bottomObstacleHeight;

    if (obstacleLeft >= 0 && obstacleLeft <= OBSTACLE_WIDTH && (hasCollidedWithTopObstacle || hasCollidedWithBottomObstacle)) {
      if (score > record) {
        setRecord(score)
      }
      setTempScore(score)
      setGameHasStarted(false)
      setBirdPosition(250)
      setScore(0)
      let audioSquish = new Audio('./mp3/Squish.mp3');
      audioSquish.play();
      audioSquish.volume = 0.03;
      GAMES_PLAYED = GAMES_PLAYED +1;
    }
  }, [birdPosition, obstacleHeight, bottomObstacleHeight, obstacleLeft])

  function handleClick() {
    let newBirdPosition = birdPosition - JUMP_HEIGHT;

    if (!gameHasStarted) {
      setGameHasStarted(true)
    }

    else if (newBirdPosition < 0) {
      setBirdPosition(0)
    }

    else {
      setBirdPosition(newBirdPosition)
    }
  }
  return (
    <div className="App">
      <Div onClick={handleClick}>
        <GameBox height={GAME_HEIGHT} width={GAME_WIDTH}>
          <span> {score} </span>
          <Obstacle
            top={0}
            width={OBSTACLE_WIDTH}
            height={obstacleHeight}
            left={obstacleLeft}

          >
            <div className='tube tubeup'>
            </div>
          </Obstacle>
          <Obstacle
            top={GAME_HEIGHT - (obstacleHeight + bottomObstacleHeight)}
            width={OBSTACLE_WIDTH}
            height={bottomObstacleHeight}
            left={obstacleLeft}

          >

            <div className='tube'>
            </div>

            {/* <img src='https://i.imgur.com/utpUw92.png' className='tube' alt='tube'></img> */}
          </Obstacle>
          <Bird size={BIRD_SIZE} top={birdPosition}>
            <img src="https://i.imgur.com/Fq4O4Un.png" alt="" className='flyPhoto' />
          </Bird>
          {!gameHasStarted ? <div className='scoreBoard'>
            <h3>TAP TO START</h3>
            <h6>Your Score</h6>
            <div className='yourScore'>{tempScore}</div>
            <h6>Your Record</h6>
            <div className='yourRecord'>{record}</div>
          </div> : <div></div>}
        </GameBox>

      </Div>
    </div>
  );
}


const Bird = styled.div`
position: absolute;
background-color: red;
background-image: url('https://i.imgur.com/TOdagmp.png');
transform: translate(25px, 0px);
height: ${(props: BirdProps) => props.size}px;
width: ${(props: BirdProps) => props.size}px;
top: ${(props: BirdProps) => props.top}px;
border-radius:50%;
`



const Div = styled.div`
display:flex;
width:100%;
justify-content: center;
& span{
  color:yellow;
  font-size:30px;
  font-weight:700;
  position:absolute;
}
`

const GameBox = styled.div`
height: ${(props: GameBoxProps) => props.height}px;
width: ${(props: GameBoxProps) => props.width}px;
background-color: antiquewhite;
overflow: hidden;
`

const Obstacle = styled.div`
position: relative;
// background-color: green;
top:${(props: ObsticleProps) => props.top}px;
width:${(props: ObsticleProps) => props.width}px;
height:${(props: ObsticleProps) => props.height}px;
left:${(props: ObsticleProps) => props.left}px;
`

export default App;


// 48 - wants three === but doesnt work
// 200 divs