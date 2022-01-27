
let details = document.querySelectorAll('.input');
const card = document.querySelector('.main-card')


function displaycard(ev){
    ev.preventDefault();

    const formDetails = {};
    console.log(ev)

    for(let field of ev.target){
        console.log(field.name);
        console.log(field.value);
        
        if(field.type !== "submit"){
            if (field.type === 'number') {
                formDetails[field.name] = field.valueAsNumber;
        }else{
            formDetails[field.name] = field.value
    }
    }
}

    creatCard(formDetails)
}

function creatCard(object){
    const cardDetails = `<p>First Name : ${object.firstName}</p> ` + `<p>Last Name : ${object.LastName}</p> ` +`<p>Email : ${object.email}</p> ` 
    + `<p>BirthDay : ${object.birthDay}</p> ` + `<p>Gender : ${object.gender}</p> ` + `<p>Phone Number : ${object.phoneNumber}</p> `;

    card.innerHTML = cardDetails;
    
}