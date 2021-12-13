


//definition
function doSomthing(argument1, argument2, argument3, etc) {
    //do somthing with the arguments
    const result = argument1 + argument2 + argument3 + etc;

    //return some result
    return argument1 + argument2 + argument3 + etc;;
}

//envocation
let x = doSomthing(134,20,'ps',4);

console.log(x);
console.log(doSomthing(134,20,'ps',4))

function add(a,b){
    return a+b;
}

let q = add(1,7);


function multi(a,b){
    console.log(a);
    return a*b;
}


q = multi(5,4);
console.log(q);
q = multi(200,13);
console.log(q);

console.log(multi(12,56))
console.log(multi(76,89));

function sayHello(name){
    return `Hello ${name}`;
}

console.log(sayHello('Noa'));
console.log(sayHello('Leon'))
