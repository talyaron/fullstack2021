const betty = document.getElementById("betty")
const selena = document.getElementById("selena")
const tom = document.getElementById("tom")
const zendaya = document.getElementById("zendaya")

const text = document.getElementById("text")

const img = document.querySelectorAll("img")

for(const item of img){
  item.addEventListener("mouseenter", ()=>{
    text.innerHTML = item.alt;  
  })
}