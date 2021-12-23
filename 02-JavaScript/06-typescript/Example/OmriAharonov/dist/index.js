function avarage(a, b) {
    try {
        var result = (a + b) / 2;
        return (" the average of the number is: " + result);
    }
    catch (error) {
        console.error(error);
    }
}
console.log(avarage(5, 7));
