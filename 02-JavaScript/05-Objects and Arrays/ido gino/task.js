// 1) create objects which describe your family (an object for each family member).



const Ido = {name : 'Ido' ,lastName: 'Gino', age: 29 , Field : 'sales' , birthMonth : 'January' , friends : ['Didi','Shahar','Ben','Sahar']}
const Tamir = {name: 'Tamir' ,lastName: 'Gino', age: 27 , Field : 'Bartender' , birthMonth : 'November' , friends : ['Din','Gilad', 'Etai']}
const Neta = {name: 'Neta' ,lastName: 'Gino', age: 20 , Field : 'Army' , birthMonth : 'July' , friends : ['Ori','Noam','Romi']}
const Edna = {name: 'Edna' ,lastName: 'Gino', age: 58 , Field : 'hightech' , birthMonth : 'August' , friends : ['Yael','Frida' , 'Kobe']}
const Shimon = {name: 'Shimon' ,lastName: 'Gino', age: 61 , Field : 'engineer' , birthMonth : 'December' , friends : ['Aviv','Yael','Kobe']}



// 2) add the objects to an array called family (array which contains objects)

let Gino = [Ido , Tamir , Neta , Edna , Shimon];


// 3) loop through the array, and print the name of each member.


// let x;

// for(let i in Gino){
//     x = Gino[i];
//     console.log(x.name);
// }


// 4) add to each object of members in your family, the list of his friends (array under the object)





// 5) with a loop, print again the names of the family members, and all their friends. 
// (for instance, "Mosh, had the following friends: David, Boaz, and Ruth")

// let y;

// for(let i in Gino){
//     y = Gino[i];
//     console.log(`${y.name} , has the following friends ${y.friends}`);
// }

// 6) set the previous parts into a function, so later, you can enter more families.

function newFamily(Family){

    let x;
    
for(let i in Family){
    x = Family[i];

    console.log(`${x.name} details :  `);
    console.log(`is working in ${x.Field} field`);
    console.log(`${x.name} , has the following friends :  ${x.friends}`);
}
}
newFamily(Gino)










