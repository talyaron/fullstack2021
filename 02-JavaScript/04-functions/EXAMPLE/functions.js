//regular function
function sayHello(name) {
    return `Hello ${name}`;
}

const hello = sayHello('Eliya');
console.log(hello)

//anonymous function
const sayHello2 = function (name) {
    return `Hello ${name}`;
}

const hello2 = sayHello2('Leon');
console.log(hello2);

//arrow function
const sayHello3 =  (name) => {
    return `Hello ${name}`;
}

const sayHello4 = name => `Hello ${name}`;


const hello3 = sayHello3('Shay');
console.log(hello3);

const hello4 = sayHello4('Michael');
console.log(hello4);

console.log(sayHello4('Eytan'))


const students = ['Yoel', 'Yahya', 'Michael', 'Omri'];
console.log('----------------------')
for (let i in students) {
   const hello =  sayHello4(students[i]);
   console.log(hello)
}
