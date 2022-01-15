const form = document.querySelector('.wrapper')
const card = document.querySelector('.wrapper2')

const fname = document.getElementById('fname')
const date = document.getElementById('carddate')
const gend = document.getElementById('cardgend')
const mail = document.getElementById('cardmail')
const phone = document.getElementById('cardphone')

function createCard(event) {
    event.preventDefault();

    const formObj:any = {};
    for (let field of event.target) {
        if (field.name !== 'Submit') formObj[field.name] = field.value;
    }
   
    fname.innerHTML = `${formObj.name} the ${formObj.last}`;
    date.innerHTML = formObj.date;
    gend.innerHTML = formObj.gender;
    mail.innerHTML = formObj.username;
    phone.innerHTML = formObj.phone;
    
    console.log(formObj);
    



    form.classList.toggle("visable");
    card.classList.toggle("visable");
 
}

