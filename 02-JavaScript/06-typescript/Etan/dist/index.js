var a = 5;
var b = 5;
var whatAge = function (x, y) {
    try {
        var sum = x + y;
        var avrg = sum / 2;
        return "the avrage of ages is " + avrg;
    }
    catch (error) {
        console.log('wrong input');
    }
};
console.log(whatAge(a, b));
