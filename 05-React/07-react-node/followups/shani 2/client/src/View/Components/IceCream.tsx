import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from "axios";
interface IceCream {
  _id: any;
  flavourType: string;
  name: string;
  img: string;
}
const IceCream = () => {
  const {icecreamId}=useParams()
  
  useEffect(()=>{
    (async () => {
      //the `/${icecreamId}` must be the same word used in server 'icecreamId'
      const { data } = await axios.get(`/${icecreamId}`);
      console.log(data);
     
    })()
  },[])
  
    
  
  return (
    <div>
      <p>IceCream:{icecreamId} </p>
      
     
     

    </div>
  )
}

export default IceCream