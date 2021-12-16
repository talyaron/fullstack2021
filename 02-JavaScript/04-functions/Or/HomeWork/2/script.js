function months(x) {
    if (x === 1)
        return 'You chose January';
    else if (x === 2)
        return 'You chose February';
    else if (x === 3)
        return 'You chose March';
    else if (x === 4)
        return 'You chose April';
    else if (x === 5)
        return 'You chose May';
    else if (x === 6)
        return 'You chose June';
    else if (x === 7)
        return 'You chose July';
    else if (x === 8)
        return 'You chose August';
    else if (x === 9)
        return 'You chose September';
    else if (x === 10)
        return 'You chose October';
    else if (x === 11)
        return 'You chose November';
    else if (x === 12)
        return 'You chose December';
    else return 'you chose an invalied number, please choose a number between 1-12';
}
//choose a number between 1-12
let x = months(12);
console.log(x);

//Also you can you prompt() function, to get numbers of user grom the brauser