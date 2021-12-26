function AVG(num1, num2) {
    try {
        var average = (num1 + num2) / 2;
        return "the average of both numbers is " + average;
    }
    catch (error) {
        console.error(error);
    }
}
console.log(AVG(15, 3));
