"use strict";

var Maya = {
  name: 'Maya',
  lastName: 'Mirmelshtein',
  Age: 45,
  occupation: 'Marketing Coordinator',
  Education: 'B.A. in Education',
  hobbies: 'Travel, Movies & Resturants',
  friends: ['Avivit', 'Anat', 'Lesly', 'Osnat', 'Sima']
};
var Roi = {
  name: 'Roi',
  lastName: 'Mirmelshtein',
  Age: 45,
  occupation: 'Serivce Program Manager',
  Education: 'B.A. graphic design & Electronics Parctical engineer',
  hobbies: 'Sports, Music & Programming',
  friends: ['Yaniv', 'Ilan', 'Oded', 'Hadas', 'Eliad']
};
var Omer = {
  name: 'Omer',
  lastName: 'Mirmelshtein',
  Age: 10.5,
  Education: '5th grade elementy school',
  hobbies: 'Football, Ninja & Playing video games',
  friends: ['Alon', 'Omri', 'Nuriel', 'Omer', 'Yoav']
};
var Yahli = {
  name: 'Yahli',
  lastName: 'Mirmelshtein',
  Age: 9,
  Education: '3rd grade elementy school',
  hobbies: 'Football, Computers & playing with friends',
  friends: ['Mietar', 'Amit', 'Itay', 'Adele', 'Dvir']
};
var family = [Maya, Roi, Omer, Yahli];

for (var i = 0; i < family.length; i++) {
  console.log(family[i].name);
  console.log("".concat(family[i].name, " has the following friends:").concat(family[i].friends));
}