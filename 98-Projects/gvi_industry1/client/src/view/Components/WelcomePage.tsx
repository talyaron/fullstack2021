import React from 'react'
import { Link } from 'react-router-dom'
import { time } from 'console'

function WelcomePage() {
  return (
    <>
      <div>
        <h1 style={{ 'textAlign': 'center' }}>GVI Global Accelerator</h1>
      </div>

      <div className='lastActWrapper'>
        <h2>Last Activities</h2>
        <p>{Date.now()}</p>
        <ul>

          <li>
            <Link to='./chat' className='notification'>
              <p>You have a new match - </p>

            </Link>
          </li>
          <li>
            <Link to='./matching' className='notification'>
              <p>You have a new request - </p>
            </Link>
          </li>
          <li>
            <Link to='./chat' className='notification'>
              <p>You have new messages - </p>
            </Link>
          </li>
          <li>
            <Link to='./matching' className='notification'>
              <p>You have a new answered request - </p>
            </Link>
          </li>

        </ul>
      </div>
    </>
  )
}

export default WelcomePage
