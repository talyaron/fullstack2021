interface card{
    image?: File;
    name?: string;
    dept?: string;
    idNum?:number;
    date?:number;
    email?:string;
    phone?:number;
}

// function handleSubmit(ev){
//     ev.preventDefault();
//     const formObj ={}
//     console.log(ev)
//     for(let filed of ev.target){
//         console.dir(filed)
//         console.log(filed.name, filed.value)
//         if(filed.name!== 'submit') formObj[filed.name]= filed.value;
//     }
//     console.log(formObj)
// }




const preview = document.getElementById('#preview');
preview.addEventListener('onclick',handleSubmit);
function handleSubmit(ev){
    
const myName = document.querySelector('#myName');
const myRole = document.querySelector('#myRole');
const myId = document.querySelector('#myIdNum');
const myDate = document.querySelector('#myDate');

    
const name = document.querySelector('#name');
const role = document.querySelector('#role');
const id = document.querySelector('#id');
const dateOfBirth = document.querySelector('#dateOfBirth');

   name.innerHTML = myName;
   role.innerHTML = myRole;
   id.innerHTML = myId;
   dateOfBirth.innerHTML = myDate;

}



function loadImage(e){
    const image = document.getElementById('imgDisplay');
    image.src = URL.createObjectURL(e.target.files[0]);
}