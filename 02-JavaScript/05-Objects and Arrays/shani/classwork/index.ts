
//exercise 1 present it in three ways the age

interface Obj{
    x?:number
    age?:number
}
const x:Obj= {};
let a="age";
x[a]=12;
console.log(x)


x.age=13
console.log(x)

x["age"]=14

console.log(x)

//exercise 2


const keys1=[`author`,`year`,`pages`]

const values2=[`shani`,1999,8030]


let result={};
keys1.forEach((keys,i)=>result[keys]=values2[i]);

console.log(result);



//second way

const ob = {};
const keys=["author","year published", "page number"];
const values= ["J.K Rollings",2001,360];


for(let i=0;i<keys.length;i++){
    ob[keys[i]] = values[i];
}
console.log(ob);