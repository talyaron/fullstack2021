import React from 'react'
import PeriodicItems from '../../periodic.json'
import Card from '../Components/Card'

// interface Item{
// id: number,
// name: string,
// price: number,
// url: string
// }

// interface Items{
//   casual:Array<Item>;
//   periodic:Array<Item>;
// }

const periodicDresses = PeriodicItems
console.log(periodicDresses)

const Periodic = () => {
  return (
    <section className='gridWrapper'>
     {
        periodicDresses.map((dress, i) => (
          <Card dress={dress} key={i}/>
        ))
      }
    </section>

 
  )
}

export default Periodic