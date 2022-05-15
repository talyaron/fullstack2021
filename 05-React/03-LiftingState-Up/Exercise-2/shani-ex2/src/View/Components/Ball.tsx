import React from "react";

interface ClickProp {
  setCounter: Function;
  counter: any;
  playExplosion: Function;
  playSplashNoise: Function;
}
const Ball = (props: ClickProp) => {
  const { setCounter, counter, playExplosion, playSplashNoise } = props;
  const ball: any = document.querySelector(".ball");
  const text: any = document.querySelector(".text");

  function handleClickBall(ev: any) {
    setCounter(counter + 1);
    console.log(counter)
    
      setTimeout(() => {
        if(counter>=5){
        ball.style.width = "500px";
        ball.style.height = "50px";
        playExplosion();
        setTimeout(() => {
          ball.style.display= "none";
          text.innerText="WINNER!"
          text.style.color="white";
          text.style.opacity='1';
          text.style.fontSize='100px'
        }, 2000);
      }
      
    }, 1000);
    
  
  }

  function handleAnimationEnd(ev: any) {
    const ball: any = document.querySelector(".ball");
    const text: any = document.querySelector(".text");
    if(counter>1 && (ball.style = { transform: "translateY(460px)" })){
      setCounter(counter)
      playSplashNoise();
      ball.style.width = "300px";
      ball.style.height = "100px";
      ball.src =
        "https://rosevillechamber.com/wp-content/uploads/2019/06/SPLASH-logo.png";
    }else if(ball.style = { transform: "translateY(460px)" }){   

      setCounter(counter - 1);
      playSplashNoise();
      ball.style.width = "300px";
      ball.style.height = "100px";
      ball.src =
        "https://rosevillechamber.com/wp-content/uploads/2019/06/SPLASH-logo.png";
      text.innerText="loser:("
      text.style.color="red";
      text.style.opacity='1';
      text.style.fontSize='100px'
       
    }
  }
  return (
    <div style={{cursor:'url("pin.png"),default'}}>
      <img
        src="https://freesvg.org/img/tikigiki_simple-beach-ball-01.png"
        className="ball"
        onClick={handleClickBall}
        onAnimationEnd={handleAnimationEnd}
      />
    </div>
  );
};

export default Ball;
