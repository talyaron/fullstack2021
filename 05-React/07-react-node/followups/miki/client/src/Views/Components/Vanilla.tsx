import React from 'react';
import { useParams } from 'react-router-dom';

const Vanilla = () => {
  const { vanilla } = useParams()

  return (
    <div className='vanillaComp'>
      <p>We have flavours: {vanilla} </p>
    </div>
  )
}

export default Vanilla