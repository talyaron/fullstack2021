import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Products = () => {
  return (
    <section className='pageContainer'>
      <section >

        <div className='productsTitleContainer'>
          <Link to='./casual' className='categoryTitle'>Casual</Link>
          <Link to='./periodic' className='categoryTitle'>Periodic</Link>
        </div>
        <div className='cont'>
          <Outlet />
        </div>

      </section>


    </section>
  )
}

export default Products