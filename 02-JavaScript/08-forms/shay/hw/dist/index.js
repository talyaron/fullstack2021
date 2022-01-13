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
var preview = document.getElementById('#preview');
preview.addEventListener('onclick', handleSubmit);
function handleSubmit(ev) {
    var myName = document.querySelector('#myName');
    var myRole = document.querySelector('#myRole');
    var myId = document.querySelector('#myIdNum');
    var myDate = document.querySelector('#myDate');
    var name = document.querySelector('#name');
    var role = document.querySelector('#role');
    var id = document.querySelector('#id');
    var dateOfBirth = document.querySelector('#dateOfBirth');
    name.innerHTML = myName;
    role.innerHTML = myRole;
    id.innerHTML = myId;
    dateOfBirth.innerHTML = myDate;
}
function loadImage(e) {
    var image = document.getElementById('imgDisplay');
    image.src = URL.createObjectURL(e.target.files[0]);
}
