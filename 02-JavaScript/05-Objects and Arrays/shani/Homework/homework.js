const tamar = {
    name: 'Tamar',
    lastName: 'Rom',
    my:'Mother',
    age: 50,
    hobbies: 'Sports and Art ' ,
    friends: ['Betty','Orit' ,'Smadar']

}

const rotem = {
    name: 'Rotem',
    lastName:'Rom',
    my:'Sister',
    age: 19,
    hobbies: 'Drawing, Jewelry making and Music',
    friends: ['Rosa',' Rachel']
}

const keren = {
    name: 'Keren',
    lastName:'Rom',
    my:'Sister',
    age: 19,
    hobbies: 'Drawing, Jewelry making and Sewing',
    friends: ['Alice', 'Ofir']

}

const family = [tamar ,rotem ,keren]; 

for(let i= 0; i < family.length; i++ ) {

    console.log(family[i].name);
    console.log(`${family[i].name}'s friends:`);
 
for(let q=0; q<family[i].friends.length; q++)

    console.log(` ${family[i].friends[q]}`);
}
 
//how do i show the friends array in the function. and why did we need the friends in array?
 
function myFamily(member){
    return (`${member.name} ${member.lastName} is my ${member.my},
        is ${member.age} and hobbies are ${member.hobbies}.
        ${member.name}'s friends are ${member.friends}. `)

}

console.log(myFamily(tamar));
console.log(myFamily(rotem));
console.log(myFamily(keren));
