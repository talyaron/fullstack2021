function numbers(numberA, numberB) {
    if (numberA > numberB)
        return numberA
    else return numberB
}
//choose 2 numbers
let x = numbers(20, 15);
console.log(x);

// What about if you get numberB bigger than numberA.
// Also import not forget about equal numbers, (if (numberA==numberB))