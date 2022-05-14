import React from 'react'
  

interface CounterProps{
    counter:any
}
 const Counter = (props:CounterProps) => {
     const {counter}=props
  return (
    <div  className="counter">
      {/* <p className='counter__text'>click till pops</p> */}
      {counter}</div>
  )
}
export default Counter