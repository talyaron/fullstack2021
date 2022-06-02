import { useParams } from 'react-router-dom'
import {useEffect} from 'react'

const IceCream = () => {
    const {icecreamId} = useParams()
  
  return (
    <div>IceCream: {icecreamId}</div>
  )
}

export default IceCream