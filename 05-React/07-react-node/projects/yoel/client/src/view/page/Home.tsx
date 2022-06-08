// import {link} from 'react'

import {Link} from 'react-router-dom'


function Home() {
  return (
    <div className='home'>
         <Link to = '/register' className='home__register' >register</Link>
         <Link to = '/login' className='home__login' >log-in</Link>
        {/* <Link to = '/login' className='home__login'>log-in</Link>  */}
    </div>
  )
}

export default Home