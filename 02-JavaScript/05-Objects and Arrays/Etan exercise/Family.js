const Etan = {
  sex: "male",
  firstName: "Etan",
  lastName: "Heyman",
  birthday: "03/07/1998",
  birthplace: "Jerusalem",
  height: 189,
  age: 23,
  friends: [" Chen", " Avi", " Johni", " Ofir"],
};
const Tamir = {
  sex: "male",
  firstName: "Tamir",
  lastName: "Heyman",
  birthday: "15/07/2001",
  birthplace: "Jerusalem",
  height: 185,
  age: 20,
  friends: [" Dan", " lior", " Yuval"],
};
const Mozhgan = {
  sex: "female",
  firstName: "Mozgan",
  lastName: "Heyman",
  birthday: "12/06/1972",
  birthplace: "Abadan",
  height: 165,
  age: 49,
  friends: [" Liora", " Yehudit"],
};
const Romina = {
  sex: "female",
  firstName: "Elizabeth Romina",
  lastName: "Aguilera Meza",
  birthday: "25/04/1995",
  birthplace: "asuncion",
  height: 156,
  age: 26,
  friends: ["Lorry", " Sol", " Nico"],
};

// const David = {
  //     sex: 'male',
  // firstName 'David',
  // lastName: 'Heyman',
  // birthday:
  // birthplace: 'Rochester',
  // height: 186
  // age:
  // }
  // const Ning = {
    //     sex: 'female',
    // firstName: 'Ning',
    // lastName: 'Heyman',
    //     birthday:
    //     birthplace:
    // height:
    // age:
    // }
    // const Benjamin = {
      // sex: 'male',
      // firstName: 'Benjamin',
      // lastName: 'Heyman',
      // birthday:
      // birthplace:
      // height:
      // age:
      // }
      
      let familyDetails = [ Etan, Tamir, Mozhgan, Romina]
      



      /* this gives you the description of the person you'll choose */
      function fullDescription(name) {
  if (name.sex == "male") {
    console.log(`His name is ${name.firstName} ${name.lastName},`);
    console.log(`He was born in ${name.birthplace}`);
    console.log(
      `And his date of birth is ${name.birthday} and he is ${name.age} years old`
    );
  } else if (name.sex == "female") {
    console.log(`Her name is ${name.firstName} ${name.lastName},`);
    console.log(`She was born in ${name.birthplace}`);
    console.log(
      `And her date of birth is ${name.birthday} and she is ${name.age} years old`
    );
  }
}
console.log(fullDescription(Romina));

// this prints all their names:

function showFamily() {
  for(let i in familyDetails){
    console.log(familyDetails[i].friends);
    // console.log(`${familyDetails[i].firstName} ${familyDetails[i].lastName}'s best friends are ${familyDetails[i].friends}`)
  }
  /* and their friends */
  familyDetails.forEach((item) => {
    console.log(`${item.firstName} ${item.lastName}'s best friends are: ${item.friends}`)
  })
}
showFamily();



// every time the loop goes through, 
//I want it to go inside the family array, choose the next object and display its friends



