//exercise 1 present it in three ways the age
var x = {};
var a = "age";
x[a] = 12;
console.log(x);
x.age = 13;
console.log(x);
x["age"] = 14;
console.log(x);
//exercise 2
var keys1 = ["author", "year", "pages"];
var values2 = ["shani", 1999, 8030];
var result = {};
keys1.forEach(function (keys, i) { return result[keys] = values2[i]; });
console.log(result);
//second way
var ob = {};
var keys = ["author", "year published", "page number"];
var values = ["J.K Rollings", 2001, 360];
for (var i = 0; i < keys.length; i++) {
    ob[keys[i]] = values[i];
}
console.log(ob);
