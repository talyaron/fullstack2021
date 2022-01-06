const rabbiYoramAbargel = document.getElementById(`rabbiYoramAbargel`);
const rabbiOvadiaYosef = document.getElementById(`rabbiOvadiaYosef`);
const rabbiMordechaiEliahu = document.getElementById(`rabbiMordechaiEliahu`);
const rabbi = document.getElementById(`rabbi`);
const text = document.getElementById(`text`);

rabbi.addEventListener(`mouseenter`,()=>{
    text.innerHTML=`הרבי מליובוויטש`
})
rabbiOvadiaYosef.addEventListener(`mouseenter`,()=>{
    text.innerHTML=`הרב עובדיה יוסף`
})
rabbiMordechaiEliahu.addEventListener(`mouseenter`,()=>{
    text.innerHTML=`הרב מרדכי אליהו`
})
rabbiYoramAbargel.addEventListener(`mouseenter`,()=>{
    text.innerHTML=`הרב יורם אברג'ל`
})
