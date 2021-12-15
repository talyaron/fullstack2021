//Think of your own function. The function should calculate something that interests you
//A function that calculate a bikes gearing max and min ratio.
function gearCalc(largetCog, smallestCog, chainring){
    let r = [];
    r[0] = chainring / smallestCog;
    r[1] = chainring / largetCog;
    return r;
}
let l = window.prompt("please enter the number of teeth on the largest cog on your casset:")*1;
let s = window.prompt("please enter the number of teeth on the smallest cog on your casset:")*1;
let c = window.prompt("please enter the number of teeth on your chainring:")*1;
let ratio = gearCalc(l,s,c);
alert("your max ration is: " +ratio[0] +" and your min ration is: " +ratio[1]);