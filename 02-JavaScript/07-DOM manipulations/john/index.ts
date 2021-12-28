let wrapper:any=document.querySelector(`.wrapper`);
wrapper.style.color=`blue`;
wrapper.style.fontSize=`120px`;
 
let box:any=document.querySelectorAll(`.box`);
box.forEach(element => {
    element.style.background='red'
    element.style.border=`2px solid black`;
});

const myTimeout:any = setTimeout(func, 5000);
function func() {
  document.querySelector("#text").innerHTML = "Merry Christmas!!!!!"
}
