var radio = document.querySelectorAll("input[type='radio']");
console.log(radio);
for (var i = 0; i < radio.length; i++) {
    console.log(radio[i]);
    radio[i].addEventListener('click', function (ev) {
        if (ev.target.value == "red") {
            console.log(ev.target.value);
        }
    });
}
// function clicked(color){
//     // if(color==="red"){
//     // }else if(color==="green"){
//     // }else(color==="blue"){
//     // }
// }
