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


const myName = document.getElementById('myName');
const myRole = document.getElementById('myRole');
const myId = document.getElementById('myIdNum');
const myDate = document.getElementById('myDate');


const preview = document.getElementById('preview');
preview.addEventListener('onClick',handleSubmit);
function handleSubmit(ev){
    

const name = document.getElementById('name');
const role = document.getElementById('role');
const id = document.getElementById('id');
const dateOfBirth = document.getElementById('dateOfBirth');

   name.innerHTML = myName;
   role.innerHTML = myRole;
   id.innerHTML = myId;
   dateOfBirth.innerHTML = myDate;


}


function loadImage(e){
    const image = document.getElementById('imgDisplay');
    image.src = URL.createObjectURL(e.target.files[0]);
}