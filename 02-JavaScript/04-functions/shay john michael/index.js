function bmi (weight, height){
    let x = weight/Math.pow(height, 2);
    let result ='';
    if (x<18.4){
        alert('underweight');
    } else if (x<24.9 && x>=18.4){
        alert('normal');
    } else if(x<29.9 && x>25) {
        alert('overweight');
 
    }
    else{
        alert('obese');
    }
}
bmi(weight = prompt('weight'), height = prompt('height'));
