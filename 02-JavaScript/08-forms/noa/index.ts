
function handleSubmit1(ev) {
    ev.preventDefault();
    console.log(ev)
const formobj={}

for(let botton of ev.target){
   

    if(botton.type!== 'submit'){
        formobj[botton.type]=botton.value;
    }
    console.log(formobj)
}

}