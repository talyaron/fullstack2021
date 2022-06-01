import React from 'react'
import {useParams} from 'react-router-dom'
import {useEffect} from 'react'
import axios from "axios";

const IceCream = () => {
  const {icecreamId}=useParams()

  useEffect(()=>{
    (async () => {
      const { data } = await axios.get(`/${icecreamId}`);
      console.log(data);
         
    })()
  },[])
  
    
  
  return (
    <div>
      <p>IceCream:{icecreamId}</p>
     

    </div>
  )
}

export default IceCream