
function bmi(ma,he){
    return ma/(he*he);
}

let sum = bmi(65,1.7);

console.log(sum);

function show(sum){
    
    if (sum > 18.5 && sum <= 25.5){
        console.log(sum +' undrweight');
    }
    
    else if (sum > 25.5 && sum <=  38.5){
        console.log(sum +' undrweight');
    }

    else {
        console.log(sum +' undrweight');
    }
    
    
}



