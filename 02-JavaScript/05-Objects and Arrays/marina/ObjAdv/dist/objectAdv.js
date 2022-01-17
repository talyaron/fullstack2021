// 1. to express in 3 different ways (age 12)
var x = { age: 12 };
x.age = 12;
x['age'] = 12;
console.log(x);
var y = {};
var abc = 'age';
y.age = 20;
y['age'] = 20;
y[abc] = 20;
console.log(y);
// option 1
var keys = ["autor", "year", "pages"];
var values = ['Sheckly', 1976, 253];
var bookObj = {};
keys.forEach(function (key, i) { return bookObj[key] = values[i]; });
console.log(bookObj);
// option 2
var book = ["name", "autor", "year", "pages"];
var meanings = ["Monday start on Satoday", 'Strugazkie', 1958, 312];
var bookOb = {};
for (i = 0; i < book.length; i++) {
    bookOb[book[i]] = meanings[i];
}
console.log(bookOb);
// option 3
var story = ["name", "autor", "year", "pages"];
var meaning = ["Animal Farm", 'George Orwell', 1974, 214];
var storyObj = {};
story.forEach(function (a, b) {
    storyObj[a] = meaning[b];
});
console.log(storyObj);
