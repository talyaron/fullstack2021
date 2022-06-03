import React from 'react'
import { Link , Outlet , useParams} from 'react-router-dom'


function Cream() {
  const {userName} = useParams();
  return (
    <div className='ice'>
      <button><Link className='ice-link-vanilla' to='/vanilla'>to go to the ice vaniila</Link></button>
      <h1>welcome {userName}</h1>
      <button><Link  className = 'ice-link-chocolate' to='/chocolate'>to go to the ice chcolate</Link></button>
      <Outlet/>
      <footer></footer>
      

      {/* <Link to='chocolate'>to go to the chocolate</Link> */}
    </div>
  )
}

export default Cream;