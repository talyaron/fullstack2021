

// const form: any = document.querySelector('.formWrapper');
const formName: any = document.getElementById('nameF');
const formId = document.getElementById('idF');
const formDOB: any = document.getElementById('dobF');
const formJoined: any = document.getElementById('joinedF');
const formExpire: any = document.getElementById('expireF');

// const card: any = document.querySelector('.card');
const cardName: any = document.getElementById('personName');
const cardId: any = document.getElementById('idC');
const carDOB: any = document.getElementById('dobC');
const carJoined: any = document.getElementById('joinedC');
const carExpire: any = document.getElementById('expireC');




function handleSubmit(e) {
    e.preventDefault();

    cardName.innerHTML = formName.value;
    cardId.innerText = formId.value;
    carDOB.innerText = formDOB.value;
    carJoined.innerText = formJoined.value;
    carExpire.innerText = formExpire.value;

    console.log(e)
  
}








