

// 1.

function number(number1, number2) {

    let bigestNumber = number;

    if (number1 > number2) {
        console.log(number1);

    } else console.log(number2);
    return bigestNumber;

}

let result = number(3, 7);



console.log('-------------------------------')







// 2.



const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

month.forEach(list);

function list(index, item) {

    year = item + 1 + ' = ' + index;
    console.log(year)
}




console.log('-------------------------------------');




["January ", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

.forEach(function list(value, index) {


    console.log(`${index +=1} = ${value}`);

});



console.log('-------------------------------')









// 3.



function getAge (years){

    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
     age = today.getFullYear() - years;

    return age;
}

console.log('My age is:' + getAge(1998));



console.log('-------------------------------')



let now = new Date();
let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let birth = new Date(1984, 0, 27);
let birthnow = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
age = today.getFullYear() - birth.getFullYear();
    
console.log((`My age is: ${age}`));
    



console.log('-------------------------------')






// 4.

function toMiles(kilometer) {

    let miles = kilometer * 0.62137;
    return kilometer + ' kilometers' + ' is ' + miles + ' miles';
}

console.log(toMiles(7));