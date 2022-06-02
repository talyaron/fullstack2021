import React from 'react'
import {Outlet, Link} from 'react-router-dom';
import {motion} from 'framer-motion';


function HomePage() {
  return (
    <motion.div
    initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration:2}}>
        HomePage
        <Outlet/>
        </motion.div>
  )
}

export default HomePage