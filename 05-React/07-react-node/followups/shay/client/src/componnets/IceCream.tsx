import { Outlet, useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
const IceCream = () => {
    const {IceCreamId} = useParams()
    // const [id, setId]=useState([])
    useEffect(()=>{
        //get data on the icecream

        (async () => {
          const { data } = await axios.get(`/${IceCreamId}`)
          console.log(data);
       
        })();
       
    },[])
    console.log(IceCreamId);
    
  return (
    <div className='idIce'>Ice Cream :{IceCreamId}</div>
  )
}

export default IceCream