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
events: var thefirstbtn = document.getElementById('theone');
var thesecbtn = document.getElementById('thetwo');
var thetherbtn = document.getElementById('thethe');
var theforbtn = document.getElementById('thefor');
var thefivebtn = document.getElementById('thefive');
thefirstbtn.addEventListener('mouseenter', runbtn1);
function runbtn1() {
    console.log('tamir');
}
// thesecbtn.addEventListener('click',runbtn2,);
function runbtn2() {
    console.log('dont click on me');
}
setTimeout(function () { thefirstbtn.style.borderRadius = '40px'; }, 3000);
setTimeout(function () { thefirstbtn.style.color = 'red'; }, 3000);
setTimeout(function () { thesecbtn.style.borderRadius = '40px'; }, 4000);
setTimeout(function () { thesecbtn.style.color = 'brown'; }, 4000);
setTimeout(function () { thetherbtn.style.borderRadius = '40px'; }, 5000);
setTimeout(function () { thetherbtn.style.color = 'blue'; }, 5000);
setTimeout(function () { theforbtn.style.borderRadius = '40px'; }, 6000);
setTimeout(function () { theforbtn.style.color = 'yellow'; }, 6000);
setTimeout(function () { thefivebtn.style.borderRadius = '40px'; }, 7000);
setTimeout(function () { thefivebtn.style.color = 'green'; }, 7000);
