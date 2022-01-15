var x = { age: 12 };
x.age = 12;
x["age"] = 12;
console.log(x);
var keys1 = ["author", "year", "pages"];
var values2 = ["shani", 1993, 184];
var result = {};
keys1.forEach(function (keys, i) { return result[keys] = values2[i]; });
console.log(result);
var ob = {};
var keys = ["author", "year published", "page number"];
var values = ["J.K Rollings", 2001, 360];
for (var i = 0; i < keys.length; i++) {
    ob[keys[i]] = values[i];
}
console.log(ob);
