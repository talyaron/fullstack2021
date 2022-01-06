var btn1 = document.querySelector("#first");
var btn2 = document.querySelector("#second");
var btn3 = document.querySelector("#third");
var btn4 = document.querySelector("#fourth");
var field = document.querySelector("h1");
var btns = document.querySelectorAll(".btn");
field.style.margin = "20vw";
btns.forEach(function (button) {
    button.addEventListener("click", handleClick);
});
function handleClick(ev) {
    var id = ev.target.id;
    switch (id) {
        case "first":
            field.style.marginTop = "0";
            break;
        case "second":
            field.style.marginLeft = "1vw";
            break;
        case "third":
            field.style.marginLeft = "50%";
            break;
        case "fourth":
            field.style.marginTop = "70vh";
            break;
    }
}
btn3.addEventListener("dblclick", toRight2);
// // function toUp(){
// //     field.style.marginTop = '0';
// // }
// function toLeft() {
//   field.style.marginLeft = "0";
// }
// function toRight() {
//   field.style.marginLeft = "50%";
// }
// function toDown() {
//   field.style.marginTop = "30vw";
// }
function toRight2() {
    field.style.marginRight = "30vw";
    field.style.transform = "rotate(180deg)";
}
// btn1.addEventListener('click', hello);
// function hello(){
//     field.textContent = 'Hello!'
// }
// field.addEventListener('click', () =>{
//     field.textContent = 'Change me!';
// })
// function goodBye(){
//     field.textContent = 'Good Bye!'
// }
// function how(){
//     field.textContent = 'how\'s it going?'
// }
