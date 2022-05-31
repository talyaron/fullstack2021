import React, { useState } from 'react'
import michael from '../imgs/michael.png';
import neta from '../imgs/neta.png';
import { Link } from 'react-router-dom';

//components
import JardianceToggle from './JardianceToggle'
import JardianceTeamLeader from './JardianceTeamLeader';


const Jardiance = () => {
  const [showJardianceProductManager, setShowJardianceProductManager] = useState(false)
  const [showJardianceTeamLeader, setShowJardianceTeamLeader] = useState(false)


  return (
    <div className='jardiance'>
      <h1>Jardiance</h1>

      <div className="jardiance-content">

        <div className="productManagerCard">

          <img src={michael} alt="" />
          <h2>Michael Frankel</h2>
          <h3 style={{ color: '#ffc800', marginTop: '0px' }}>Product Manager</h3>



          <div className="buttonCard">

            <button onClick={() => setShowJardianceProductManager(!showJardianceProductManager)}>i</button>
            <form action="https://www.linkedin.com/in/michael-frankel-fullstack-developer/">
              <input type="submit" value="in" />
            </form>

          </div>



          {showJardianceProductManager ? <JardianceToggle /> : null}
        </div>

        <div className="teamLeaderCard">

          <img src={neta} alt="" />
          <h2>Neta Frankel</h2>
          <h3 style={{ color: '#ffc800', marginTop: '0px' }}>Team Leader</h3>



          <div className="buttonCard">

            <button onClick={()=> {setShowJardianceTeamLeader(!showJardianceTeamLeader)}}></button>
            <form action="https://www.linkedin.com/in/michael-frankel-fullstack-developer/">
              <input type="submit" value="in" />
            </form>

          </div>



          {showJardianceTeamLeader ? <JardianceTeamLeader /> : null}
        </div>

      </div>


    </div>
  )
}

export default Jardiance