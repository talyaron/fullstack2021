const dad = {
name:'yossi',
age:64,
job:'carpenter',
food: 'pasta',
animal: 'cat',
friends: [{name:'shem '}, {name:'lilli '},{name: 'orna'}]

};

const mom = {
name:'yael',
age:62,
job: 'teacher',
food: 'pizza',
animal: 'dog',
friends: [{name:'shem '}, {name:'lilli '},{name: 'orna'}]
}
const child = {
name:'yaniv',
age:32,
job: 'teacher',
food: 'pizza',
animal: 'rat',
friends: [{name:'shem '}, {name:'lilli '},{name: 'orna'}]
}

const family = [dad,mom,child];

for(let i=0; i< family.length; i++ ){
    console.log(family[i].name +' '+'has the following friends:'); 
    for(let j in family[i].friends){
         console.log(family[i].friends[j].name)
    }

}



 function familyMembers(person) {
 
         console.log(person.name + ' '+ 'has the following friends: ' + person.friends+'.');  
 }

 familyMembers(dad)
 familyMembers(mom)
 familyMembers(child)



// let i=1;
// let sum;
// if (i>=0 ){
//  sum=i-1;
//  console.log(family[sum].name); 

// }



