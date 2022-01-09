const firstbtn = document.getElementById ("firstbtn");
const secondbtn = document.getElementById ("secondbtn");
const thirdbtn = document.getElementById ("thirdbtn");


firstbtn.addEventListener("click",clickButton);

thirdbtn.addEventListener("dblclick", doubleClick)

function clickButton(){
    console.log("button number 1 was clicked")
}

function over(){
    console.log("you moved your mouse over number 2")
}



function doubleClick(){
    console.log("you double clicked number 3")
}