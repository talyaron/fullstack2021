const names = document.querySelector('.name');
const images = document.querySelectorAll('img');



images.forEach(img => {
    img.addEventListener("mouseover", () => {
        console.dir(img);
        names.innerHTML = img.alt;
    })
});




//changes its background when hovering over album

const george: any = document.querySelector("#george");
george.addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = "rgb(173,216,230)";
    document.body.style.transition = "1s";
   


});

const elo: any = document.querySelector("#elo");
elo.addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = "rgb(25,25,112)";
    document.body.style.transition = "1s";
});


const elton: any = document.querySelector("#elton");
elton.addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = "rgb(238,232,170)";
    document.body.style.transition = "1s";
});


const abba: any = document.querySelector("#abba");
abba.addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = "rgb(72,61,139)";
    document.body.style.transition = "1s";
});


const arctic: any = document.querySelector("#arctic");
arctic.addEventListener("mouseenter", () => {
    document.body.style.backgroundImage = "url(https://c.tenor.com/36PHqsAC5XoAAAAC/do-i-wanna-know-arctic-monkeys.gif)";
    //document.body.style.backgroundRepeat="no-repeat";
    //document.body.style.backgroundSize="cover";


});





const mcr: any = document.querySelector("#mcr");
mcr.addEventListener("mouseenter", () => {
    document.body.style.background = "radial-gradient(white, black)";
    document.body.style.backgroundSize = "cover";


});


const r5: any = document.querySelector("#r5");
r5.addEventListener("mouseenter", () => {
    document.body.style.background = "linear-gradient(to right, rgb(143,188,143) 20%,rgb(219,112,147)40%,rgb(218,165,32)60%,rgb(147,112,219)80%,rgb(30,144,255)100%)";
    document.body.style.backgroundSize = "cover";

});


//makes the background color turn white when the mouse leaves the album pic 
images.forEach(img => {
    img.addEventListener("mouseleave", () => {
        console.dir(img);
        document.body.style.backgroundColor = "white";

    });
});

images.forEach(img => {
    img.addEventListener("mouseleave", () => {
        console.dir(img);
        document.body.style.backgroundImage = "white";

    });
});

images.forEach(img => {
    img.addEventListener("mouseleave", () => {
        console.dir(img);
        document.body.style.background = "white";
    });
});       