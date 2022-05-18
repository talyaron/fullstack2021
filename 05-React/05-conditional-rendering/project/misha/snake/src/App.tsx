import React, { useEffect, useState } from 'react';
import './App.css';
import styled from "styled-components";

const BIRD_SIZE = 20;
const GAME_WIDTH = 500;
const GAME_HEIGHT = 500;
const GRAVITY = 5;
const JUMP_HEIGHT=100;
interface BirdProps {
  size: number;
  top: number;
}

interface GameBoxProps {
  height: number;
  width: number;
}

function App() {

  const [birdPosition, setBirdPosition] = useState(250);
  const [gameHasStarted, setGameHasStarted] = useState(false)

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
  },[birdPosition, gameHasStarted])

  function handleClick(){
    let newBirdPosition = birdPosition - JUMP_HEIGHT;
    
    if(!gameHasStarted){
      setGameHasStarted(true)
    }

    else if(newBirdPosition < 0){
      setBirdPosition(0)
    }

    else{
      setBirdPosition(newBirdPosition)
    }
  }
  return (
    <div className="App">
      <Div onClick={handleClick}>
        <GameBox height={GAME_HEIGHT} width={GAME_WIDTH}>
          <Bird size={BIRD_SIZE} top={birdPosition}></Bird>
        </GameBox>
      </Div>
    </div>
  );
}


const Bird = styled.div`
position: absolute;
background-color: red;
height: ${(props: BirdProps) => props.size}px;
width: ${(props: BirdProps) => props.size}px;
top: ${(props: BirdProps) => props.top}px;
border-radius:50%;
`

const Div = styled.div`
display:flex;
width:100%;
justify-content: center;
`

const GameBox = styled.div`
height: ${(props: GameBoxProps) => props.height}px;
width: ${(props: GameBoxProps) => props.width}px;
background-color: antiquewhite;
`

export default App;
