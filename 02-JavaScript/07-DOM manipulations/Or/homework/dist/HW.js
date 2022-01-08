var text = document.getElementById("text"); //needed for both options
//OPTION 1
// const rabbiYoramAbargel = document.getElementById(`rabbiYoramAbargel`);
// const rabbiOvadiaYosef = document.getElementById(`rabbiOvadiaYosef`);
// const rabbiMordechaiEliahu = document.getElementById(`rabbiMordechaiEliahu`);
// const rabbi = document.getElementById(`rabbi`);
// rabbi.addEventListener(`mouseenter`,()=>{
//     text.innerHTML=`הרבי מליובוויטש`;
// })
// rabbiOvadiaYosef.addEventListener(`mouseenter`,()=>{
//     text.innerHTML=`הרב עובדיה יוסף`;
// })
// rabbiMordechaiEliahu.addEventListener(`mouseenter`,()=>{
//     text.innerHTML=`הרב מרדכי אליהו`;
// })
// rabbiYoramAbargel.addEventListener(`mouseenter`,()=>{
//     text.innerHTML=`הרב יורם אברג'ל`;
// })
// OPTION 2
var img = document.querySelectorAll("img");
img.forEach(function (item) {
    item.addEventListener("mouseover", function () {
        text.innerHTML = item.alt;
    });
});
