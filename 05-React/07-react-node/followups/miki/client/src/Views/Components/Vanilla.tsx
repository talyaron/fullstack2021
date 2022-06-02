import React from 'react';
import { useParams } from 'react-router-dom';

const Vanilla = () => {
  const { vanilla } = useParams()

  return (
    <div>
      <p>Vanilla: {vanilla}  222</p>
    </div>
  )
}

export default Vanilla