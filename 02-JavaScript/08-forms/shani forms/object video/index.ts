const friends = [
    { name: 'Keren', age: 19, height: 1.61, hobbies: ['drawing', 'annoying shani', 'breathing'], limbs: 4 },
    { name: 'Tamar', age: 50, height: 1.69, hobbies: ['smelling bleach', 'running', 'drawing'], limbs: 4.5 },
    { name:'Rotem',sayName:function(){ 
        console.log('My friends name is:',friends[2].name)
    } ,  age: 19, height: 1.61, hobbies: ['drawing', 'dancing', 'breathing'], limbs: 8 },

]

console.log(friends)

//one by one 
console.log(`${friends[2].sayName}, she is ${friends[2].age} years old and ${friends[2].height} tall.
Her hobbies are ${friends[2].hobbies[0]}, ${friends[2].hobbies[1]} and ${friends[2].hobbies[2]}.  `)




//for each one 

friends.forEach(f => console.log("My friends name is " + f.name + ", she is " + f.age+" years old and "+ f.height+
" tall. Her hobbies are "+ f.hobbies[0]+", "+f.hobbies[1]+" and "+f.hobbies[2] + " and she has "+ f.limbs+" limbs"));

friends[2].sayName();



//console.log(window)
//finding the document tab title and changing it
console.log(document.title="Shani")
