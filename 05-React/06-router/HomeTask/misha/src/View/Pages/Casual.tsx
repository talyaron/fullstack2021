import React from 'react'
import casualItems from '../../casual.json'
import Card from '../Components/Card'

const casualDresses = casualItems;

const Casual = () => {
  return (
    <section className='gridWrapper'>
    {
      casualDresses.map((dress: any, i: React.Key | null | undefined) => (
        <Card dress={dress} key={i}/>
      ))
    }
    </section>
  )
}

export default Casual