function calcInterest(loan,precentage,years){
    //let loan;
    for(i = 0; i - years ;i++){
        loan = loan*1
        loan = loan+(loan*(precentage/100));
    }
    return loan;
}

let a = window.prompt("please enter loan:");
let b = window.prompt("please enter precentage:");
let c = window.prompt("please enter years:");

let x = calcInterest(a,b,c);

alert("the return amont is:" +x);