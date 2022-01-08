const text = document.getElementById(`text`);//needed for both options

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
const img = document.querySelectorAll("img");

img.forEach(item => {
    item.addEventListener("mouseover", () => {
        text.innerHTML = item.alt;
    })
})
