const text = document.getElementById("text")

const img = document.querySelectorAll("img")

img.forEach(item => {
    item.addEventListener("mousedown", () => {
        text.innerHTML = item.alt
    })
})