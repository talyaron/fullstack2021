let x:number = 5;
let y:number = 4;

function multi(a:number, b:number):number {
    try {
        
        return a * b;
    } catch (error) {
        console.error(error)
        return 0;
    }

}

function sayHello(name:string):string{
    return `Hi ${name}`;
}

console.log(sayHello('4'))

console.log(multi(x, y))
console.log(multi(6,7));
