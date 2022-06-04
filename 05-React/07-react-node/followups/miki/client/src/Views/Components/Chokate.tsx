import React from 'react';
import { useParams } from 'react-router-dom';


const Chokate = () => {
  const { chokate } = useParams()

  return (
    <div className='chokateComp'>
      <p>We have flavours: {chokate} </p>
       </div>
  )
}

export default Chokate