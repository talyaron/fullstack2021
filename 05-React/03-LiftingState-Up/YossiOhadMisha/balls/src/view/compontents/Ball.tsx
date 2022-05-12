import React from 'react'

interface BallProps{
    click: Function;
    position: number;
    delay: number;
}

const ball = (props: BallProps) => {

    const {click, position, delay} = props;

  return (
    <div><img src='https://pngimg.com/uploads/falafel/falafel_PNG54.png' className='falafel' alt='ball' style={{left:`${position}%`, animationDelay:`${delay}s`}} onClick={()=>click()}  /></div>
  )
}

export default ball