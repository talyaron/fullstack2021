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

  function handleClickBall(ev: any) {
    setCounter(counter + 1);
    console.log(counter)
    setTimeout(() => {
      if (counter==1) {
        ball.style.width = "500px";
        ball.style.height = "50px";
        playExplosion();
        setTimeout(() => {
          ball.style.display= "none";
        }, 2000);
      }
      
    }, 1000);
  }

  function handleAnimationEnd(ev: any) {
    const ball: any = document.querySelector(".ball");
    

    if ((ball.style = { transform: "translateY(460px)" })) {
      setCounter(counter - 1);
      console.log(ball);
      playSplashNoise();
      ball.style.width = "300px";
      ball.style.height = "100px";
      ball.src =
        "https://rosevillechamber.com/wp-content/uploads/2019/06/SPLASH-logo.png";
       
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
