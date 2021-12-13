
function bmi(ma,he){
    return ma/(he*he);
}

let sum = bmi(65,1.7);

console.log(sum);

function show(sum){
    
    if (sum<18.5){
        alert('this is underweight');
        console.log(show(sum))
    }
    
    else if (sum>18.5, sum<28.5){
        alert('this is underweight');
        console.log(show(sum))
    }

    else alert('this is goodweight');
    
    
}



