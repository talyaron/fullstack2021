///1)
var age = 12;
var x = { age: age };
x.age = 13;
x["age"] = 15;
x[age] = 16;
// console.dir(x)
///2)
var key = ['aurthor', 'yearOfPublication', 'pages'];
var value = ['robirt', '2003', '500'];
var object = {};
for (var i = 0; i < key.length; i++) {
    object[key[i]] = value[i];
}
console.log(object);
