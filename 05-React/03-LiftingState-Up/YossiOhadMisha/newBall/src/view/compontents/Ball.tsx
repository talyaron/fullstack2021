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

  function tfisa() {
    const ballsElement: any = document.getElementById(id)

    if (ballsElement) {


        ballsElement.addEventListener('animationend', () => {
          console.log('Animation ended');
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