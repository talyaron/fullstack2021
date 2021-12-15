
//1//

function number(a, b) {
    if (a > b) {
        return a
    }
    else {
        return b
    }
}

console.log(number(5, 7));
console.log(number(9, 2));

//2//

function month(a) {
    if (a == 1) {
        return a + ' January';
    }
    else if (a == 2) {
        return a + ' February';
    }
    else if (a == 3) {
        return a + ' March';
    }
    else if (a == 4) {
        return a + ' April';
    }
    else if (a == 5) {
        return a + ' May';
    }
    else if (a == 6) {
        return a + ' June';
    }
    else if (a == 7) {
        return a + ' July';
    }
    else if (a == 8) {
        return a + ' August';
    }
    else if (a == 9) {
        return a + ' September';
    }
    else if (a == 10) {
        return a + ' October';
    }
    else if (a == 11) {
        return a + ' November';
    }
    else if (a == 12) {
        return a + ' December';
    }
}

console.log(month(5));
console.log(month(11));

//3//

function age(i) {
    return 2021 - i;
}
console.log(age(2000));
console.log(age(1974));

//4//

function distance(m) {
    return m + ' m = ' +
        m * 100 + ' cm = ' +
        m / 100 + ' km';
}

console.log(distance(50));