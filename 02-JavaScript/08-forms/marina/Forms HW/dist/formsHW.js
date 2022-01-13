// const form: any = document.querySelector('.formWrapper');
var formName = document.getElementById('nameF');
var formId = document.getElementById('idF');
var formDOB = document.getElementById('dobF');
var formJoined = document.getElementById('joinedF');
var formExpire = document.getElementById('expireF');
// const card: any = document.querySelector('.card');
var cardName = document.getElementById('personName');
var cardId = document.getElementById('idC');
var carDOB = document.getElementById('dobC');
var carJoined = document.getElementById('joinedC');
var carExpire = document.getElementById('expireC');
function handleSubmit(e) {
    e.preventDefault();
    cardName.innerHTML = formName.value;
    cardId.innerText = formId.value;
    carDOB.innerText = formDOB.value;
    carJoined.innerText = formJoined.value;
    carExpire.innerText = formExpire.value;
    console.log(e);
}
