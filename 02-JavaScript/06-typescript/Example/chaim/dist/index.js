var y = 7;
var x = 5;
function getavg(y, x) {
    try {
        var avg = (y + x) / 2;
        return "the avarege is " + avg;
    }
    catch (error) {
        (console.error(error));
    }
}
