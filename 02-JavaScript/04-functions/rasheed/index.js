let h = 1.7;
let m = 65;

function bmi(m,h){

    let sum = 0;
    sum = m/(h*h);
    return sum;
    
    console.log(sum);
}

function show(sum) {
    if (sum<18.5){
        alert('this is underweight')
    }
    else if (sum>18.5, sum<28.5){
        alert('this is underweight')
    }

    else alert('this is goodweight')
    
    
}



