
let a:number = 5;
let c:number = 4;


function getAvg (a:number, c:number):string {
    try {
        const avg = (a+c)/2;
        return `The avarege is ${avg}`;
    } catch (error) {
        console.error(error) 
    }
}

console.log(getAvg(2,40))



console.dir(document);
console.dir(window);

