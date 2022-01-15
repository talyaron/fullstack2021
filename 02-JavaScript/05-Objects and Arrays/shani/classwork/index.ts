

const x= {age:12}
x.age=12
x["age"]=12

console.log(x)


const keys1=[`author`,`year`,`pages`]

const values2=[`shani`,1993,184]


let result={};
keys1.forEach((keys,i)=>result[keys]=values2[i]);

console.log(result);





const ob = {};
const keys=["author","year published", "page number"];
const values= ["J.K Rollings",2001,360];


for(let i=0;i<keys.length;i++){
    ob[keys[i]] = values[i];
}
console.log(ob);