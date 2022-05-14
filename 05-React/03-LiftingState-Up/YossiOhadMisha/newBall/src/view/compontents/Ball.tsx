import React from 'react'

interface BallProps {
  handleClick: Function;
  randomPositin: number;
  randomDelay: number;
  img:string
  id:string
}

const ball = (props: BallProps) => {

  const { handleClick, randomPositin, randomDelay, img,id } = props;

  return (
    <div><img src={img} id={id} className='falafel' alt='ball' style={{ left: `${randomPositin}%`, animationDelay: `${randomDelay}s` }} onClick={(event) => handleClick(id)} /></div>
  )
}

export default ball