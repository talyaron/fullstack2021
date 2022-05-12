import React from 'react'



interface ClickProp{
    setCounter:Function;
    counter:any
}
 const Ball = (props:ClickProp) => {
     const {setCounter,counter}=props
     
     function handleClickBall(ev:any){
      setCounter(counter+1)
     // console.log(counter)
      const ball:any=document.querySelector(".ball");

      if(ball.animation([{transform : 'translateY (600px)'}])){
        setCounter(counter-1)
        console.log(ball)
      }
      
     }
  return (
    <div onClick={handleClickBall} >
        <img src="https://freesvg.org/img/tikigiki_simple-beach-ball-01.png" className="ball"/>
    </div>
  )
}

export default Ball
