import React from 'react'
import products from  '../../products.json'
import Card from '../Components/Card'

interface Item{
id: number,
name: string,
price: number,
url: string
}

interface Items{
  casual:Array<Item>;
  periodic:Array<Item>;
}
// eslint-disable-next-line react-hooks/exhaustive-deps
const periodicItems:any = products.periodic

const Periodic = () => {
  return (
    <section className='gridWrapper'>
      {/* {periodicItems.map((item:Item) => {
        <Card data={item}></Card>
      })} */}
      asdasd
    </section>

 
  )
}

export default Periodic