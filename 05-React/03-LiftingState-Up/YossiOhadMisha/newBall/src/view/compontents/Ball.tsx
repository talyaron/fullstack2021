import React from 'react'

interface BallProps {
  handleClick: Function;
  randomPositin: number;
  randomDelay: number;
  img: string
  id: string
  setHits: Function
  hits: number
  ball: any
}



const ball = (props: BallProps) => {

  const { handleClick, randomPositin, randomDelay, img, id, setHits, hits, ball } = props;

  setTimeout(tfisa, 300)
  setTimeout(speedUp, 10000)
  setTimeout(speedUp2, 20000)

  const ballsElement: any = document.getElementById(id)

  function speedUp(){

    ballsElement.classList.add(`falafel2`);
  }
  function speedUp2(){
    ballsElement.classList.add(`falafel3`);
  }

  function tfisa() {

    if (ballsElement) {

        ballsElement.addEventListener('animationend', () => {
          // console.log('Animation ended');
          if (!ball.tahiny) {
            setHits(hits - 1)
          }

        });
    }
  }

  return (

    <div><img src={img} id={id} className='falafel' alt='ball' style={{ left: `${randomPositin}%`, animationDelay: `${randomDelay}s` }} onClick={(event) => handleClick(id)} /></div>
  )
}

export default ball