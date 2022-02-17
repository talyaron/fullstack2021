//1
function HoursToSeconds(hour) {
    return hour * 60;
}
console.log(HoursToSeconds(60));
//2
function triangleArea(altitude, side) {
    return (altitude * side) / 2;
}
console.log(triangleArea(5, 5));
//4
var Array = [20, 5, 66, 100, 3];
var smallest = Array[0];
var largest = Array[0];
for (var i = 0; i < Array.length; i++) {
    if (Array[i] > largest) {
        largest = Array[i];
    }
    else if (Array[i] < smallest) {
        smallest = Array[i];
    }
}
console.log(Array);
console.log('largest=', largest);
console.log('smallest=', smallest);
//5
var array1 = [1, 2, 3, 4];
var result = array1.reduce(function (a, b) { return a + b; }, 5);
console.log(result);
