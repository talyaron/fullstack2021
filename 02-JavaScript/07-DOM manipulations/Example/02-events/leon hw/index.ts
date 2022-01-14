const text = document.getElementById("text")


const img = document.querySelectorAll("img")
console.log(img)

img.forEach(item => {
    item.addEventListener("mouseover", () => {
        text.innerHTML = item.alt
    })
})