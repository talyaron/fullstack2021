import React from "react";
import images from "../img/images.jpg";

// const uid = function () {
//     return Date.now().toString(36) + Math.random().toString(36).substr(2);
//   };
//const id = uid();
interface BallProps {
  setCounter: Function;
  counter: number;
  playExplosionNoise:Function;
  playSplashNoise:Function
}

const ball = (props: BallProps) => {
    const { counter, setCounter, playExplosionNoise, playSplashNoise } = props;
  function handleCounter(ev:any) {
      const ball:any=document.querySelector(".thor");
      console.log(ev);
      
    setCounter(counter + 1);
   // if(counter==1){
       playExplosionNoise()
 //   }    ball.style.width='500px';
    ball.style.height='500px';
    ball.style.marginTop='-100px'
   ball.src='https://i.pinimg.com/originals/62/ff/f9/62fff943d7e386c33823103cf15dd1fb.png';
  
console.log(counter);
  }
  function handleEndAnimation(ev:any){
     const ball:any=document.querySelector(".thor");
    //  if(ball.onClick()){
    //    setCounter(counter)
    //  }
 console.log(ev);
   // if(ev){
    //   setCounter(counter)
    // }
    if(counter == 1){
      setCounter(counter)
    }
   else {
    setCounter(counter - 1);
    playSplashNoise()
    //transform: matrix(2, 3, 5, 5, 5, 6);
     ball.style.marginTop='-15px'
    ball.style.width='20%';
    // ball.style.height='200px';
    ball.src='https://d2r55xnwy6nx47.cloudfront.net/uploads/2021/12/Lightning_2880x1620_Lede_Still.jpg';
//  ball.style={'background-image':'url("")', 'background-repeat':'repeat'}
    
    }
  }
 

  return (
    <div className="contain">
      <div className="counter">
        <p>counter:{counter}</p>
      </div>
      <img onClick={handleCounter} onAnimationEnd={handleEndAnimation} src={images} alt="" className="thor"/>
    </div>
  );
};

export default ball;
