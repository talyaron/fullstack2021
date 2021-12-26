//create a function which get 2 number, and return a string that says "the average of the numbers is (result)"
var first = parseFloat(window.prompt("please enter a number:"));
var second = parseFloat(window.prompt("please enter a number:"));
function avrage(a, b) {
    try {
        return "the avrage is: " + (a + b) / 2;
    }
    catch (error) {
        console.error(error);
    }
}
alert(avrage(first, second));
