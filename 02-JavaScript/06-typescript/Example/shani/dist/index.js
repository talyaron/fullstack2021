var m = 24;
var w = 22;
function average(a, b) {
    try {
        var avg;
        (a + b) / 2;
        console.log("The average of m & w is " + average(m, w));
    }
    catch (error) {
        console.error(error);
        return 0;
    }
}
