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
var myName = document.getElementById('myName');
var myRole = document.getElementById('myRole');
var myId = document.getElementById('myIdNum');
var myDate = document.getElementById('myDate');
var preview = document.getElementById('preview');
preview.addEventListener('onClick', handleSubmit);
function handleSubmit(ev) {
    var name = document.getElementById('name');
    var role = document.getElementById('role');
    var id = document.getElementById('id');
    var dateOfBirth = document.getElementById('dateOfBirth');
    name.innerHTML = myName;
    role.innerHTML = myRole;
    id.innerHTML = myId;
    dateOfBirth.innerHTML = myDate;
}
function loadImage(e) {
    var image = document.getElementById('imgDisplay');
    image.src = URL.createObjectURL(e.target.files[0]);
}
