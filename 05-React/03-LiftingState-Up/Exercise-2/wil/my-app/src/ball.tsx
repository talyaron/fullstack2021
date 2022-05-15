import React from 'react'

interface props {
    setCounter: Function;
}
 const Ball = (props: { setCounter: any }) => {
    const { setCounter } = props
    const handleAddCounter = () => {
        
        setCounter(counter + 1)
        console.log('counter:', counter)
    }
  return (
    <div onClick={handleAddCounter}>ball</div>
  )
}

export default Ball;