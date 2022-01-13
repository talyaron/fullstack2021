//1 + 4
const michaelF = {
   name: "michael",
   lastName: "frankel", 
   age: 42,
   position: "father",
   friends: ["meir", "hagai", "nadav"],
}

const netaF = {
    name: "neta",
    lastName: "frankel", 
    age: 38.5,
    position: "mother",
    friends: ["efrat", "ruthiB", "ruthiS"],
 }

 const achinoamF = {
    name: "achinoam",
    lastName: "frankel", 
    age: 14,
    position: "firstSister",
    friends: ["talor", "noa", "lia"],
 }

 const ayeletF = {
    name: "ayelet",
    lastName: "frankel", 
    age: 12.5,
    position: "seconSister",
    friends: ["romi", "chen", "fayumi"],
 }

 const davidF = {
    name: "david",
    lastName: "frankel", 
    age: 9,
    position: "firstBrother",
    friends: ["eliraz", "neta", "sinai"],

 }

 const ethenF = {
    name: "ethen",
    lastName: "frankel", 
    age: 6.5,
    position: "secondBrother",
    friends: ["ori"],
 }

 const tamarF = {
    name: "tamar",
    lastName: "frankel", 
    age: 6.5,
    position: "thirdSister",
    friends: ["arava", "bereshit", "adi"],
 }

 const beeriF = {
    name: "beeri",
    lastName: "frankel", 
    age: 5,
    position: "thirdBrother",
    friends: ["shoham"],
 }


 let frankelArrayAll = [michaelF, netaF, achinoamF, ayeletF, davidF, ethenF, tamarF, beeriF];


//2
 let frankelArray = [michaelF.name, netaF.name, achinoamF.name, ayeletF.name, davidF.name, ethenF.name, tamarF.name, beeriF.name];

  //3
 for (let i in frankelArray){
    console.log(frankelArray[i]);
 }

 //5
 let frankelArray1 = [...frankelArray, michaelF.friends, netaF.friends, achinoamF.friends, ayeletF.friends, davidF.friends, ethenF.friends, tamarF.friends, beeriF.friends];
 for (let j in frankelArray1){
   console.log(frankelArray1[j]);
}

//6 
 let funcFamily = (arg) => {for (let k in arg){console.log(arg[k]);}}

 funcFamily (frankelArrayAll);





 //------------------------------------
 
  //.log(`${beeriF.name}`);
 //.log(beeriF.name);

 //console.log(frankelArray[0], ...frankelArray);


  //console.log(`${beeriF.name} is ${beeriF[`age`]}`);
/*
  arr1 = [true, true, false, 2, "d"]

  for (let j in arr1){
      console.log(arr1[j]);
  }
 

 let family = [michaelF, netaF, achinoamF, ayeletF, davidF, ethenF, tamarF, beeriF];

 console.log(family[0])
 console.log(family[1])


 function familyMembers (array){
    for (let i in family){
        console.log(family[i]);
    }
 }

 familyMembers (family);
=====================
destructuring arrays=
=====================
 let alphBet = ['A', 'B', 'C', 'D', 'E', 'F'];
 let numbers = [1, 2, 3, 4];
 [a, , s, ...rest] = alphBet;
 [w,q] = numbers;

let newArray = [...numbers, ...alphBet, ...numbers]
let newArray1 = alphBet.concat(numbers);

 console.log(a);
 console.log(s);
 console.log(rest);
 console.log(w);
 console.log(q);
 
 console.log(newArray);
 console.log(newArray1);


 const grade1 = {
     studentName: "john",
     studentLastName: "deer",
     math: 90,
     leng: 80,
     pysc: 91,
     chmys: 92,
 }

 const grade2 = {
    math: 80,
    leng: 95,
    pysc: 82,
 }

 
let newArr = {...grade1, ...grade2};
console.log(newArr);

let newArr2 = {`${grade1.studentName}`}
console.log(newArr2);
 */




