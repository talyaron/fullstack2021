var buttons = document.querySelectorAll(".btn");
buttons.forEach(function (button) {
    button.addEventListener("click", handleClick);
});
var image = document.querySelector(".img1");
function handleClick(ev) {
    var clickedLink = ev.target.id;
    console.log(clickedLink);
    if (clickedLink == "left") {
        document.getElementsByClassName("img1").style.left = "100px";
    }
}
