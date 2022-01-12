const friends = [
    { name: 'Keren', age: 19, height: 1.61, hobbies: ['drawing', 'annoying shani', 'breathing'], limbs: 4 },
    { name: 'Tamar', age: 50, height: 1.69, hobbies: ['smelling bleach', 'running', 'drawing'], limbs: 4.5 },
    { name: 'Rotem', age: 19, height: 1.61, hobbies: ['drawing', 'dancing', 'breathing'], limbs: 8 },

]

console.log(friends)
//one by one 
console.log(`My friends name is ${friends[0].name}, she is ${friends[0].age} years old and ${friends[0].height} tall.
Her hobbies are ${friends[0].hobbies[0]}, ${friends[0].hobbies[1]} and ${friends[0].hobbies[2]}.  `)




//for each one 

friends.forEach(f => console.log("My friends name is " + f.name + ", she is " + f.age+" years old and "+ f.height+
" tall. Her hobbies are "+ f.hobbies[0]+", "+f.hobbies[1]+" and "+f.hobbies[2] + " and she has "+ f.limbs+" limbs"));


console.log(window)
//finding the document tab title and changing it
console.log(document.title="Shani")
