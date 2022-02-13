
//1
function HoursToSeconds(hour: number) {
    return hour * 60;
}

console.log(HoursToSeconds(60));

//2
function triangleArea(altitude, side) {
    return (altitude * side) / 2;
}

console.log(triangleArea(5, 5));

//4
const Array: any = [20, 5, 66, 100, 3];

let smallest = Array[0];
let largest = Array[0];


for (let i = 0; i < Array.length; i++) {
    if (Array[i] > largest) {
        largest = Array[i];
    }

    else if (Array[i] < smallest) {
        smallest = Array[i]
    }
}

console.log(Array);
console.log('largest=', largest);
console.log('smallest=', smallest);

//5
const array1 = [1, 2, 3, 4];
const result = array1.reduce((a, b) => a + b,5);
console.log(result)


