// 1)

const x = {age:12};

x.age = 13;
console.log(x);
x['age'] = 14;
console.log(x);
let age = 'ggg';
x[age] = 15
console.log(x);


// 2)

const keys = ['author', 'yearOfPublication', 'pages'];
const values = ['J K Roling', 2001, 500];
const book = {}

// keys.forEach(elem =>{
//     book[elem] = keys[elem];
// })

// values.forEach(elem =>{
//     book.elem = 
// })


//console.log(book);



// const keys = ['author', 'yearOfPublication', 'pages'];
// const values = ['T.J', 2010, 350]

// let result = {};


for(let i=0; i<keys.length; i++) {
   book[keys[i]]= values[i];
}

console.log(book);