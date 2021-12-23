var x = 5;
var y = 4;
function multi(a, b) {
    try {
        return a * b;
    }
    catch (error) {
        console.error(error);
        return 0;
    }
}
function sayHello(name) {
    return "Hi " + name;
}
console.log(sayHello('4'));
console.log(multi(x, y));
console.log(multi(6, 7));
