// תרגיל 1 לכתוב ב3 הצורות
var x = { age: 12 };
x.age = 12;
x["age"] = 12;
console.log(x);
// תרגיל 2 לבנות אובייקט מ2 מערכים
var keys = ["author", "year", "pages"];
var values = ["leon", 1993, 184];
var result = {};
keys.forEach(function (keys, i) { return result[keys] = values[i]; });
console.log(result);
// אופציה שניה לפתרון
var ob = {};
var keys = ["autur", "year published", "page number"];
var values = ["J.K Rollings", 2001, 360];
for (var i = 0; i < keys.length; i++) {
    ob[keys[i]] = values[i];
}
console.log(ob);
