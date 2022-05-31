import React, { useEffect, } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface IcecreamnProps {
  icecream: String;
  setIcecream: Function;
}

const IceCream = (props: IcecreamnProps) => {
  const { icecream, setIcecream } = props
  const { iceCreamId } = useParams()


  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get('/icecream/taste')
  //     const {result} = data
  //     console.log(result[0]._id);  
  //     // setIcecream(result[0]._id)
      
  //   })()
  // }, [])

  return (
    <div className='comp'>


      <h1>Ice Cream Comp {iceCreamId} </h1>

    </div>
  )
}

export default IceCream