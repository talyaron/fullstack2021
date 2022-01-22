const inputItem=document.querySelector(`#item`);
const inputPrice=document.querySelector(`#price`);
const mybutton=document.querySelector(`.btn-list`);
const list=document.querySelector(`.container`)



mybutton.addEventListener(`click`, (e)=>{
    if (inputText.value!=""){
        e.preventDefault();
        // create li
    const myLi=document.createElement(`li`);
    myLi.innerHTML=inputText.value;
    list.appendChild(myLi);
    }
   

});




