var or = 22;
var refael = 25;
function avg(a, b) {
    try {
        var avgAge = (a + b) / avg.length;
        return "the avarage age of refael and or is " + avgAge;
    }
    catch (error) {
        console.error(error);
    }
}
console.log(avg(or, refael));
