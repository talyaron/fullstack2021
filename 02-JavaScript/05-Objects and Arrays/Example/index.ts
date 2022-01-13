interface Obj {
    a?: number;
    r?: number;
}

const x: Obj = {};
let a = "eee";
x.a = 2;
console.log(x)
x["a"] = 5;
x['a'] = 1000;
x.a = 7000;
x[a] = 7; //x['b'] = 7

x.r = 44;

let arr: Array<string> = ['q', 'w', 'e'];

arr.forEach((elm: string) => {
    x[elm] = 100;
});

console.log(x);

//exercise

//1)
// const x = {age:12}
//write in all three forms


// 2)

//take two arrays, and create one object that holds information about the book
const keys = ['author', 'yearOfPublication', 'pages'];
const values = ['J K Rolings', 2001, 500]









