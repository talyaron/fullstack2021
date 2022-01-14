const stickus = document.querySelector(`.btn1`);
const dori = document.querySelector(`.btn2`);
const confu = document.querySelector(`.btn3`);
const bob = document.querySelector(`.btn4`);
const txt = document.querySelector(`.text`);
const TXBox = document.querySelector(`.txtbox`)



stickus.addEventListener(`mouseenter`, e => {
    console.log( txt.textContent =`this is my friend Stickus`)
})

dori.addEventListener(`mouseenter`, e => {
    console.log( txt.textContent =`this is my friend dori`)
})
confu.addEventListener(`mouseenter`, e => {
    console.log( txt.textContent =`this is my friend confustick`)
})
bob.addEventListener(`mouseenter`, e => {
    console.log( txt.textContent = `this is my friend Bob`)
    
})

stickus.addEventListener(`mouseleave`, e => {
    console.log( txt.textContent =``)
})

dori.addEventListener(`mouseleave`, e => {
    console.log( txt.textContent =``)
})
confu.addEventListener(`mouseleave`, e => {
    console.log( txt.textContent =``)
})
bob.addEventListener(`mouseleave`, e => {
    console.log( txt.textContent = ``)
    
})

  TXBox.style.height = `7em`
  

   
  

