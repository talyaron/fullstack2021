var radio = document.querySelectorAll("input[type='radio']");
console.log(radio);
var greenCheck;
var blueCheck;
var redCheck;
for (var i = 0; i < radio.length; i++) {
    console.log(radio[i]);
    radio[i].addEventListener('click', function (ev) {
        if (ev.target.value == "greenCheck") {
            console.log(ev.target.value);
            // amount.style.display = 'block';
        }
        else {
            // amount.style.display = 'none';
        }
        if (ev.target.value == "blueCheck") {
            console.log(ev.target.value);
            // amount.style.display = 'block';
        }
        else {
            // amount.style.display = 'none';
        }
        if (ev.target.value == "redCheck") {
            console.log(ev.target.value);
            // amount.style.display = 'block';
        }
        else {
            // amount.style.display = 'none';
        }
    });
}
// function clicked(color){
//     // if(color==="red"){
//     // }else if(color==="green"){
//     // }else(color==="blue"){
//     // }
// }
