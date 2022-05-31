import React from 'react'
import { Link } from 'react-router-dom'

const ChocolateFlavor = () => {
  return (
    <div>
         <button><Link to="/Flavor/Chocolate/Chocolatevanile">Chocolatevanile</Link></button>
         <button><Link to="/Flavor/Chocolate/ChocolateBanena">ChocolateBanena</Link></button>

    </div>

  )
}

export default ChocolateFlavor