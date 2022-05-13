import React from 'react'

interface BallProps {
  handleClick: Function;
  randomPositin: number;
  randomDelay: number;
}

const ball = (props: BallProps) => {

  const { handleClick, randomPositin, randomDelay } = props;

  return (
    <div><img src='https://pngimg.com/uploads/falafel/falafel_PNG54.png' className='falafel' alt='ball' style={{ left: `${randomPositin}%`, animationDelay: `${randomDelay}s` }} onClick={() => handleClick()} /></div>
  )
}

export default ball