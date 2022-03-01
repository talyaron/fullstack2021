// const one = document.getElementById("one")
// const two = document.getElementById("two")
// const three = document.getElementById("three")
// const four = document.getElementById("four")

const text = document.getElementById("text")

// one.addEventListener("mouseenter", () => {
//     text.innerHTML = "one"
// })
// two.addEventListener("mouseenter", () => {
//     text.innerText = "<p>two</p>"
// })
// three.addEventListener("mouseenter", () => {
//     text.innerHTML = "<h1>three</h1>"
// })
// one.addEventListener("mouseenter", () => {
//     text.innerHTML = "one"
// })

const img = document.querySelectorAll("img")
console.log(img)

img.forEach(item => {
    item.addEventListener("mouseover", () => {
        text.innerHTML = item.alt
    })
})


// for (const item of img) {
//     console.log(item.alt)
//     item.addEventListener("mouseover", () => {
//         text.innerHTML = item.alt
//     })
// }

// if (item.alt == "one") {

// }

