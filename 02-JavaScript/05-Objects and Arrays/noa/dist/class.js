var x = {};
var a = "age";
x.age1 = 12;
x["age2"] = 12;
x[a] = 13;
console.log(x);
var keys = ['author', 'yearOfPublication', 'pages'];
var values = ['J K Rolings', 2001, 500];
var book = {};
// for (let i = 0; i<keys.length; i++) {
// book[keys[i]]=values[i];
// }
keys.forEach(function (elm, a) {
    book[keys[elm]] = values[elm];
});
console.log(book);
