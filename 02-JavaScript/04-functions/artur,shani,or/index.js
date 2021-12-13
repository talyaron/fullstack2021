function bmi (a,b,){
    return a/(b*b);
}
let x = bmi(100,1.6)
console.log (x)
if (x<18.5)console.log('under-weight')
else if (x<25)console.log('correct')
else if (x<29.9)console.log('over-weight')
else if (x<34.9)console.log('obese-lvl-1')
else if (x<39.9)console.log('obese-lvl-2')
else console.log('obese-lvl-3')
