let a = prompt('type your first number')
let b = prompt('type tour sec number')

function whoisbiger(a,b) {
    if (a > b) {
        return a;

    } else {
        return b;
    }
}
console.log('the largest number is ' + whoisbiger(a,b))
