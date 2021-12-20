const john={
    firstname:"john",
    age:23,
    sex:"male",
    city:"raanana",
    loveDogs:true,

}
const prissou={
    firstname:"priscilia",
    age:23,
    sex:"female",
    city:"raanana",
    loveDogs:true,

}
const papa={
    firstname:"dan",
    age:52,
    sex:"male",
    city:"netanya",
    loveDogs:false,

}
const maman={
    firstname:"laetitia",
    age:45,
    sex:"female",
    city:"netanya",
    loveDogs:true,

}
const chloe={
    firstname:"chloe",
    age:18,
    sex:"female",
    city:"netanya",
    loveDogs:true,

}
const family= [john,prissou,maman,papa,chloe];

for (let i = 0; i < family.length; i++){
    alert(family[i].firstname);
}
john.friends=["david","beri","roey","osher"];
prissou.friends=["fanny","elsa","lara","fiona"];
papa.friends=["ygal","richard","charlie"];
maman.friends=["stefan","yonni","elie","karen"];
chloe.friends=["linoy","sarah","lorna"];

let firstName = "";
for (let i = 0; i< family.length; i++){
    for (let j = 0; j<family[i].friends.length; j++){
        firstName = firstName+" "+family[i].friends[j];
    }
    alert(`${family[i].firstname} has the following friends: ${firstName}`);
    firstName = "";
}