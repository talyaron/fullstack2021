var m = 24;
var w = 22;
function average(a, b) {
    try {
        var avg = (a + b) / 2;
        console.log("The average of m & w is " + avg);
    }
    catch (error) {
        console.error(error);
        return 0;
    }
}
console.log(average(m, w));
