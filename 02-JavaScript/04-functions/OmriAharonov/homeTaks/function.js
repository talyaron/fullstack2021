// 1) function function that gets two numbers, and returns the largest number

function LargestNumber(num1, num2){
    
    if(num1 > num2) return num1;
    else return num2;
};

console.log('The largest number is: ' + LargestNumber(23, 9));
//#####################################################################################
// 2) a function that gets a number between 1 and 12, and returns the name of the month

function month(number){
    let month;
    
    if(number <= 0 || number > 12){
        console.log('ERROR, number should be between 1-12');
    }
    else{
        if (number === 1) month = 'January';
        else if (number === 2) month = 'February';
        else if (number === 3) month = 'March';
        else if (number === 4) month = 'April';
        else if (number === 5) month = 'May';
        else if (number === 6) month = 'June';
        else if (number === 7) month = 'July';
        else if (number === 8) month = 'August';
        else if (number === 9) month = 'September';
        else if (number === 10) month = 'October';
        else if (number === 11) month = 'November';
        else if (number === 12) month = 'December';
        
    }

    return month;
};

console.log('Month is: ' + month(9));
//#####################################################################################
// 3) function that gets the year the user was born and calculates his/her age

function age(yearOfBirth){
    let CurrentYear = 2021;
    let age = CurrentYear - yearOfBirth;
    return age;
};

console.log('Your age is: ' + age(1970));
//#####################################################################################
// 4) function that get number in the range of 2-100 and calculate how many prime numbers has till that number 


function primeNumber(primeNum){

    let primeAmount = 0;

    for(let i = primeNum; i >= 2; i--){

        let counter = 0;
        for(let j = 1 ; j <= i; j++){

            if((i % j) === 0){
                counter++;
            };
        };

        if(counter === 2){
            primeAmount++;
        }
    }

    return primeAmount 
}

console.log('In the range of 1-' + 56 + ' there are ' + primeNumber(56) + ' prime numbers');


