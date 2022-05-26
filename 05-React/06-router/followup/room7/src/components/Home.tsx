import React from 'react';
import { useEffect } from 'react';
import { Link , useNavigate} from "react-router-dom";
const Home = () => {
    const navigate=useNavigate()
   useEffect(()=>{
       setTimeout(()=>{
           navigate('/about')
       },4000)
   })
  return (
    <div className='home'>Home
        <Link to='/About'>About</Link>

    </div>
  )
}

export default Home