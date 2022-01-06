document.getElementById("name").style.color = "red"
document.getElementById("name").style.background = "blue"
document.getElementById("name").style.fontSize = ("6rem")




const names = document.querySelectorAll(".lastName1")

names.forEach((element:any) => {
    console.dir(element)
    element.style.color = "yellow"
    element.style.fontSize = "4rem"
});