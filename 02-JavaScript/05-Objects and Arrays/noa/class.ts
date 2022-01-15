interface Obj {
    age1: number
}

const x = {};
let a = "age"
x.age1 = 12;
x["age2"] = 12
x[a] = 13

console.log(x)


const keys = ['author', 'yearOfPublication', 'pages'];
const values = ['J K Rolings', 2001, 500];

const book = {};

// for (let i = 0; i<keys.length; i++) {
// book[keys[i]]=values[i];
// }

keys.forEach((elm,a)=>{
    book[keys[elm]]=values[elm];
})

console.log(book)