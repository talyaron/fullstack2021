function avg(a, b) {
    try {
        var avg2 = (a + b) / 2;
        return 'the average is ' + avg2;
    }
    catch (error) {
        console.log(error);
    }
}
console.log(avg(7, 6));
