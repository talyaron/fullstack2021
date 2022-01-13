// 1)
var x = { age: 12 };
x.age = 13;
console.log(x);
x['age'] = 14;
console.log(x);
var age = 'ggg';
x[age] = 15;
console.log(x);
// 2)
var keys = ['author', 'yearOfPublication', 'pages'];
var values = ['J K Roling', 2001, 500];
var book = {};
keys.forEach(function (elem) {
    book[elem] = keys[elem];
});
// values.forEach(elem =>{
//     book.elem = 
// })
//console.log(book);
