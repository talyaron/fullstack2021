let sum = 0;
for (let i = 0; i <= 1000; i++) {
    if(i%5==0 && i%3==0){
        sum = sum + i;
    }
}
console.log(sum +" is the sum of the multiples of 3 and 5 up to 1000");