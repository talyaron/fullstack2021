//array
const arr = [1, 2, 'hello', 34, true, 'bla bla'] //[element, element]

console.log(arr[2]);

for (let i in arr) {
    console.log(`${i} --> ${arr[i]}`)

}

//avarge
const grades = [70, 90, 68, 79, 100];
let sum = 0;

for (let i in grades) {

    sum += grades[i];
}

for (let i = 2; i < 100; i += 2) {
    console.log(`${i} --> ${grades[i]}`)
}



let avg = sum / grades.length;


