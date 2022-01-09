const spiderman = document.getElementById("spiderman")
const superman = document.getElementById("superman")
const catwoman = document.getElementById("catwoman")
const supergirl = document.getElementById("supergirl")

const img = document.querySelectorAll("img")
const text = document.getElementById("text")

spiderman.addEventListener('mouseover',()=>{
    text.innerHTML = 'this is spiderman'
})
superman.addEventListener('mouseover',()=>{
    text.innerHTML = 'this is superman'
})

catwoman.addEventListener('mouseover',()=>{
    text.innerHTML = 'this is catwoman'
    
})

supergirl.addEventListener('mouseover',()=>{
    text.innerHTML = 'this is supergirl'
})
