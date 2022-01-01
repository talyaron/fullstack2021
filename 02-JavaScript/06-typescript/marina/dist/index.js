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
console.log(getAvg(6, 57));
console.dir(document);
console.dir(window);
var greet = function (user) {
    console.log(user.name + " says hello");
};
var greetAgain = function (user) {
    console.log(user.name + " says hello");
};
