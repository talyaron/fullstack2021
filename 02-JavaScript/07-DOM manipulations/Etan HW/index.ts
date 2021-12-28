const welcome:any = document.querySelector(".hello");
const here:any = document.querySelector("#man");
const goodBye:any = document.querySelector(".bye");
const unwelcome:any = document.getElementById("everyone");

let changes = function () {
    welcome.style.fontSize = welcome.style.fontSize + 4 + "rem";
    here.style.color = "red";
    goodBye.style.padding = "20vh";
    goodBye.style.fontSize = "4rem";
    goodBye.style.background = "#3D9970";
};
changes();

unwelcome.style.opacity = '0';


function fadeIn(){
    unwelcome.style.position = 'relative';
    unwelcome.style.width = '100vw'
    unwelcome.style.display = unwelcome.style.display + 'block';
    unwelcome.style.opacity = unwelcome.style.opacity + '1';
    unwelcome.style.fontSize ='5rem'
}
setTimeout(fadeIn,1000);

function doMove() {
    unwelcome.style.padding = unwelcome.style.padding + 100 + "px"; // pseudo-property code: Move right by 100px
    
}
setTimeout(doMove, 1000); // call doMove() in 20 msec

let speed = 1000/60; // 60 Frame per second
let opacity = 100;
let display = 100;

function fadeOut(){
    unwelcome.style.opacity = unwelcome.style.opacity+0;
    unwelcome.style.display = 'none'
    
}
setTimeout(fadeOut, 2000);



console.log(unwelcome)


// function fadeOut() {
//     opacity--;
//     unwelcome.style.opacity = opacity/100;
//     unwelcome.style.display = display/100;
//     if (opacity > 0){
//         setTimeout(fadeOut,speed);
//     }
// }
// fadeOut();