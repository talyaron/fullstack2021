import { useParams } from 'react-router-dom'
import {useEffect} from 'react'

const IceCream = () => {
    const {icecreamId} = useParams()
    useEffect(()=>{
        //get data on the icecream
    },[])
  return (
    <div>IceCream: {icecreamId}</div>
  )
}

export default IceCream