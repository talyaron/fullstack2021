
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

console.log(getAvg(6,57))



console.dir(document);
console.dir(window);










// Type Aliases

type StringOrNum = string|number;
type ObjWithName = { name: string, uid: StringOrNum } 

const greet = (user: {name: string, uid:string | number}) => {
    console.log (`${user.name} says hello`);
}

const greetAgain = (user: ObjWithName) => {
    console.log(`${user.name} says hello`);
}

