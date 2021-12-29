var a = 5;
var c = 4;
function getAvg(a, c) {
    try {
        var avg = (a + c) / 2;
        return "The avarege is " + avg;
    }
    catch (error) {
        console.error(error);
    }
}
console.log(getAvg(2, 40));
console.dir(document);
console.dir(window);
