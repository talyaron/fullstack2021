var x = {};
var abc = "age";
x.age = 12;
x['age'] = 12;
x[abc] = 12;
////
var keys = ["name", "author", "yearOfPublication", "pages"];
var values = ["le petit prince", "Antoine de Saint-Exupéry", "1943", "69",];
var bookObj = {};
// for (let i = 0; i < book.length; i++) {
//     bookObj[book[i]] = values[i]; 
// }
keys.forEach(function (key, i) {
    bookObj[key] = values[i];
});
values.forEach(function (value, i) {
    bookObj[keys[i]] = value;
});
console.log(bookObj);
