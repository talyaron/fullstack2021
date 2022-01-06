/* this is meant to seperate each letter in a description ID */

const text = document.querySelector("#description");
const strText = text.textContent;
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
const dad = document.getElementById('dad')
const Benji = document.getElementById('Benji')
const Ning = document.getElementById('Ning')
const Tamir = document.getElementById('Tamir')
const Romi = document.getElementById('Romi')
const Mejohnindavi = document.getElementById('Mejohnindavi')
const Citron = document.getElementById('Citron')
const Chen = document.getElementById('Chen')

mom.addEventListener('mouseenter',() => {
    text.innerHTML = 'this is my mother.'
})
mom.addEventListener('mouseleave',() => {
    text.innerHTML = "Who's next?"
})
dad.addEventListener('mouseenter',() => {
    text.innerHTML = 'this is my father.'
})
dad.addEventListener('mouseleave',() => {
    text.innerHTML = "Who's-next?"
})
Benji.addEventListener('mouseenter',() => {
    text.innerHTML = 'this is my half brother, Benjamin (Benji).'
})
Benji.addEventListener('mouseleave',() => {
    text.innerHTML = "his mother is to the right"
})
Ning.addEventListener('mouseenter',() => {
    text.innerHTML = "this is Ning, she's my fathers wife."
})
Ning.addEventListener('mouseleave',() => {
    text.innerHTML = "Who's next?"
})
Tamir.addEventListener('mouseenter',() => {
    text.innerHTML = 'this is my brother, Tamir.'
})
Tamir.addEventListener('mouseleave',() => {
    text.innerHTML = "Who's next?"
})
Romi.addEventListener('mouseenter',() => {
    text.innerHTML = "this is my wife, Romina, she's from paraguay"
})
Romi.addEventListener('mouseleave',() => {
    text.innerHTML = "Who's next?"
})
Mejohnindavi.addEventListener('mouseenter',() => {
    text.innerHTML = 'oh no that picture again? johni and avi are two of my best friends who dont have recent pics'
})
Mejohnindavi.addEventListener('mouseleave',() => {
    text.innerHTML = "Who's next?"
})
Citron.addEventListener('mouseenter',() => {
    text.innerHTML = 'this is my friend citron.'
})
Citron.addEventListener('mouseleave',() => {
    text.innerHTML = "Who's next?"
})
Chen.addEventListener('mouseenter',() => {
    text.innerHTML = 'this is my friend chen'
})
Chen.addEventListener('mouseleave',() => {
    text.innerHTML = "Who's next?"
})