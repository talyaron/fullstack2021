const numOne = document.getElementById('numOne')
const numTwo = document.getElementById('numTwo')
const numThree = document.getElementById('numThree')
const body = document.getSelection

const sentence = document.getElementById('sentence')

numOne.addEventListener('mouseenter' , ()=>{
    sentence.innerText= "picture num 1";
})
numTwo.addEventListener('mouseenter' , ()=>{
    sentence.innerText= "picture num 2";
})
numThree.addEventListener('mouseenter' , ()=>{
    sentence.innerText= "picture num 3";
})

// numOne.addEventListener('mouseenter')
// numOne.addEventListener('mouseenter')