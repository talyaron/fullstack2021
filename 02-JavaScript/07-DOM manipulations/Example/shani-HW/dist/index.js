var greetings = document.querySelector("#Greetings");
greetings.style.fontFamily = "Impact,Charcoal,sans-serif";
//how do i do upper case
var pathway = document.querySelector("#path");
pathway.style.width = "100%";
pathway.style.height = "3rem";
pathway.style.backgroundColor = "black";
pathway.style.marginTop = "5rem";
pathway.style.display = "flex";
pathway.style.flexDirection = "row";
pathway.style.justifyContent = " space-between";
var pacman = document.querySelector(".pacman");
pacman.style.backgroundColor = "yellow";
pacman.style.width = "3rem";
pacman.style.height = "3rem";
pacman.style.borderRadius = "50%";
//why wont my white dots showw????
var dots = document.querySelector(".dot");
var _loop_1 = function (i) {
    function type() {
        dots_1.style.backgroundColor = "white";
        dots_1.style.width = "1rem";
        dots_1.style.height = "1rem";
        dots_1.style.borderRadius = "50%";
        dots_1.style.margin = "15px";
    }
    //or  
    var dots_1 = document.querySelector(".dot");
    dots_1.style.backgroundColor = "white";
    dots_1.style.width = "1rem";
    dots_1.style.height = "1rem";
    dots_1.style.borderRadius = "50%";
    dots_1.style.margin = "15px";
    var dot2 = document.querySelector(".2");
    dot2.style.backgroundColor = "red";
    dot2.style.width = "1rem";
    dot2.style.height = "1rem";
    dot2.style.borderRadius = "50%";
    dot2.style.margin = "15px";
};
for (var i = 0; i <= dots.length; i++) {
    _loop_1(i);
}
