const text = document.getElementById('text')

text.style.cssText =
    `
color: orange;
font-size: 7vh;
`
const img = document.querySelectorAll('img')
console.log(img)

img.forEach(item => {
    item.addEventListener('mouseenter', () => {
        text.innerHTML = item.alt
    })
})
