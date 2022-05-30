import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom'

const Medical = () => {
  const [colorToggle, setColorToggle] = useState(true)
  const [colorSelector, setColorSelector] = useState("")
  const location = useLocation()

  const empagliflozin =  '#008c7d' 
  const nintedanibColor =  '#150773' 


  useEffect(() => {

    if (location.pathname === '/home/medical') {
      setColorSelector(empagliflozin)
      return;
    } else if (location.pathname === '/home/medical/nintedanib') {
      setColorSelector(nintedanibColor)
    }

  }, [colorToggle])


  const leftMedicalStyling = {
    color: colorSelector
  }

  return (
    <div className='medical'>

      <div className="links">
        <Link onClick={() => { setColorToggle(!colorToggle) }} to='/home/medical'>empagliflozin</Link>
        <Link onClick={() => { setColorToggle(!colorToggle) }} to='/home/medical/nintedanib'>nintedanib</Link>
      </div>

      <h1
        style={leftMedicalStyling}


      >Medical</h1>

      <div className="right-medical">
        <Outlet />
      </div>




    </div>
  )
}

export default Medical