// const members = [
//     { name: 'yosef', age: 65, city: 'netivot', year: 1950 },
//     { name: 'aliza', age: 60, city: 'netivot', year: 1955 },
//     { name: 'aviel', age: 26, city: 'netivot', year: 1995 },
//     { name: 'tamir', age: 24, city: 'netivot', year: 1997 },
// ];


// function changecity(members, name:string, newcity:string) {
//     try {
//         if (!Array.isArray(members)) throw new Error("this is not your array");
//         if (typeof name !== 'string') throw new Error("name is not a string");
//         if (typeof newcity !== 'string') throw new Error("the new city is not a string");

//         const index = members.findIndex(member => member.name === name)
//         if (index === -1) {
//             return members
//         } else {
//             members[index].city = newcity;
//             return members;
//         }
//     }
//     catch (error) {
//         console.log(error)
//     }
// }

// const newcity1 = changecity(members, 'aliza', 'ashdod')

// console.log(newcity1)

events:
const thefirstbtn =document.getElementById('theone');
const thesecbtn =document.getElementById('thetwo');
const thetherbtn =document.getElementById('thethe');
const theforbtn =document.getElementById('thefor');
const thefivebtn =document.getElementById('thefive');

thefirstbtn.addEventListener('mouseenter',runbtn1);

function runbtn1(){
    console.log('tamir')
}

// thesecbtn.addEventListener('click',runbtn2,);

function runbtn2(){
    console.log('dont click on me')
}
 
setTimeout(()=>{thefirstbtn.style.borderRadius='40px';},3000);
setTimeout(()=>{thefirstbtn.style.color='red';},3000);
setTimeout(()=>{thesecbtn.style.borderRadius='40px';},4000);
setTimeout(()=>{thesecbtn.style.color='brown';},4000);
setTimeout(()=>{thetherbtn.style.borderRadius='40px';},5000);
setTimeout(()=>{thetherbtn.style.color='blue';},5000);
setTimeout(()=>{theforbtn.style.borderRadius='40px';},6000);
setTimeout(()=>{theforbtn.style.color='yellow';},6000);
setTimeout(()=>{thefivebtn.style.borderRadius='40px';},7000);
setTimeout(()=>{thefivebtn.style.color='green';},7000);



