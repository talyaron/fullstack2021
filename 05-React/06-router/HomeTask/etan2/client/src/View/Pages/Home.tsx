import React from 'react';
import {useNavigate} from 'react-router-dom'


function Home() {
    const navigate = useNavigate();

  return (
    <div>
        <button onClick={()=>{navigate('/Layouts')}} className="navigate__toIceCream">
            Lets start
        </button>
    </div>
  )
}

export default Home