import React, { useEffect, useState } from 'react';
import { useParams, Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

// interface IcecreamnProps {
//   // icecream: String;
//   // setIcecream: Function;
//   vanilla: String;
//   setVanilla: Function;
//   chokate: String;
//   setChokate: Function;
// }

const IceCream = () => {
  // const { icecream, setIcecream } = props
  // const [toggle, setToggle] = useState(true)
  // const { chokate, vanilla } = useParams()
  // const navigate = useNavigate()
  // const location = useLocation()




  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get('/icecream/taste')
  //     const {result} = data
  //     console.log('icecream');
      
  //     // console.log(result[0]._id);  
  //     // setIcecream(result[0]._id)

  //   })()
  // }, [])

  // useEffect(() => {

  //   if (location.pathname === '/home/iceCream/chokate') {
  //     navigate('/home/iceCream/chokate')
  //     return;
  //   }
  //   if (location.pathname === '/home/iceCream/vanilla') {
  //     navigate('/home/iceCream/vanilla')
  //   }

  // }, [toggle])

  return (
    <div className='comp'>


      <h1>Vanilla Ice</h1>

      <Outlet />

    </div>
  )
}

export default IceCream