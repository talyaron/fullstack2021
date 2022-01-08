const bruce = document.getElementById("bruce")
const Deep = document.getElementById("Deep")
const DM = document.getElementById("DM")
const Led = document.getElementById("Led")
const Neil = document.getElementById("Neil")

const lowertext = document.getElementById("lowertext")

const img = document.querySelectorAll("img")

for (const txt of img) {
txt.addEventListener("mouseenter", () => {
  lowertext.innerHTML = txt.alt;})
}
