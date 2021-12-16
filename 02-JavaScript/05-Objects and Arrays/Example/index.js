//Primitve types

let x = '222' //string
let y = true; //boolean
let z = 23 //number

//Objects

// let obj = {
//     key:value,
//     key2:value,
//     key3:value
// }

const ohad = {
    name: 'Ohad',
    lastName: 'Gur',
    age: 20,
    isMarried: false
}

const rasheed = {
    name: "rasheed",
    lastName: 'Jaber',
    age: 27,
    isMarried: false
}

const noa = {
    name: "noa",
    lastName: 'chasha',
    age: 21,
    isMarried: false
}

const michaelF = {
    name: "Michael",
    lastName: 'Frankel',
    age: 42,
    isMarried: true
}

console.log(rasheed.name);
console.log(rasheed['isMarried']);


//definr function
function tellAboutTheStudent(student) {
    if (student.isMarried) {
        console.log(`${student.name} ${student.lastName} is ${student.age} years old and he is married`)
    } else {
        console.log(`${student.name} ${student.lastName} is ${student.age} years old and he is not married`)
    }
};

tellAboutTheStudent(rasheed);
tellAboutTheStudent(michaelF);
tellAboutTheStudent(ohad);
tellAboutTheStudent(noa);








