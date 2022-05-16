import React from 'react'
  

interface CounterProps{
    counter:any
}
 const Counter = (props:CounterProps) => {
     const {counter}=props
  return (
    <div  className="counter">
      
      {counter}</div>
  )
}
export default Counter