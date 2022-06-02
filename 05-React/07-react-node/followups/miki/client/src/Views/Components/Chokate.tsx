import React from 'react';
import { useParams } from 'react-router-dom';


const Chokate = () => {
  const { chokate } = useParams()

  return (
    <div>
      <p>Chokate: {chokate} 111</p>
       </div>
  )
}

export default Chokate