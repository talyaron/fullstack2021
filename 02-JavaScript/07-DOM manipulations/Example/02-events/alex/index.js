const touchBox = document.querySelectorAll(".boxes_box");
const changeWords = document.getElementById("write");
const touchCircle = document.getElementById("circle");


touchBox[0].addEventListener("mouseover", () => {
    changeWords.innerHTML = "g"
});
touchBox[1].addEventListener("mouseover", () => {
    changeWords.innerHTML = "go"
});
touchBox[2].addEventListener("mouseover", () => {
    changeWords.innerHTML = "goo"
});
touchBox[3].addEventListener("mouseover", () => {
    changeWords.innerHTML = "good"
});

touchCircle.addEventListener("mouseover", () => {
    changeWords.innerHTML = "goodbye"
});

for (const i of touchBox) {

    i.addEventListener("mouseout", () => {
        changeWords.innerHTML = ""
    });
}

