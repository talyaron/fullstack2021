const person1 = {
    name: 'Yoni',
    age: 28,
    skill: 'Lawyer',
    friends: ['Shimy', 'Dimy']
}

const person2 = {
    name: 'Avi',
    age: 30,
    skill: 'Director',
    friends: ['Jimy', 'Hary']
}

const person3 = {
    name: 'Roni',
    age: 10,
    skill: 'Student',
    friends: ['Duby', 'Dudy']
}

const family = [person1, person2, person3];

for (let i in family) {
    console.log(family[i].name);
    console.log(`friends of ${family[i].name} are ${family[i].friends}`);
}


function familyAndFriends(family) {

    for (let i in family) {
        
    }
}

console.log (family);


