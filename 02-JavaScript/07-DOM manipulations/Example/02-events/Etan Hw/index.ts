/* this is meant to seperate each letter in a description ID */
const text = document.querySelector("#description");
const strText = text.innerHTML;
const splitText = strText.split("");
console.log(splitText)
text.textContent = "";
splitText.forEach(i => {
  text.innerHTML +=  '<span>' + `${i}` + '</span>';
});
// for (i = 0; i < splitText.length; i++) {
//   text.innerHTML += "<span>" + splitText[i] + "</span>";
// }
/* this is the animation part */
let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}


const mom = document.getElementById('mom')
const dadndBen = document.getElementById('dadndBen')
const Tamir = document.getElementById('Tamir')
const Romi = document.getElementById('Romi')
const Mejohnindavi = document.getElementById('Mejohnindavi')
const Citron = document.getElementById('Citron')
const Chen = document.getElementById('Chen')

mom.addEventListener('mouseenter',() => {
    text.innerHTML = 'this-is-my-mother'
})
mom.addEventListener('mouseleave',() => {
    text.innerHTML = "Who's-next?"
})
dadndBen.addEventListener('mouseenter',() => {
    text.innerHTML = 'this-is-my-father-and-his-new-son,-benjamin.'
})
dadndBen.addEventListener('mouseleave',() => {
    text.innerHTML = "Who's-next?"
})
Tamir.addEventListener('mouseenter',() => {
    text.innerHTML = 'this-is-my-mother'
})
Tamir.addEventListener('mouseleave',() => {
    text.innerHTML = "Who's-next?"
})
Romi.addEventListener('mouseenter',() => {
    text.innerHTML = 'this-is-my-mother'
})
Romi.addEventListener('mouseleave',() => {
    text.innerHTML = "Who's-next?"
})
Mejohnindavi.addEventListener('mouseenter',() => {
    text.innerHTML = 'this-is-my-mother'
})
Mejohnindavi.addEventListener('mouseleave',() => {
    text.innerHTML = "Who's-next?"
})
Citron.addEventListener('mouseenter',() => {
    text.innerHTML = 'this-is-my-mother'
})
Citron.addEventListener('mouseleave',() => {
    text.innerHTML = "Who's-next?"
})
Chen.addEventListener('mouseenter',() => {
    text.innerHTML = 'this-is-my-mother'
})
Chen.addEventListener('mouseleave',() => {
    text.innerHTML = "Who's-next?"
})