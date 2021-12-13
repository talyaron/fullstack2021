function calcIntrest(loan, percentage, years){
    let totalSum = loan;
    for (i = 0; i <= years; i++){
        totalSum = totalSum+(totalSum*percentage)
    }
  
    return totalSum
    

    
}
let intrest = calcIntrest(500000000, .05 , 25)
console.log(intrest)
