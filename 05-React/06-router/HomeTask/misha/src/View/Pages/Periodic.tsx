import React from 'react'
import products from  '../../products.json'
import Card from '../Components/Card'

interface Item{
id: number,
name: string,
price: number,
url: string
}

const Periodic = () => {
  return (
    <section className='gridWrapper'>
      {products.periodic.map((item:Item) => {
        <Card dataProps={item}></Card>
      })}
    </section>
  )
}

export default Periodic