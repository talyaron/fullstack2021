const Maya = {
  name: 'Maya',
  lastName: 'Mirmelshtein',
  Age: 45,
  occupation: 'Marketing Coordinator',
  Education: 'B.A. in Education',
  hobbies: 'Travel, Movies & Resturants',
}

const Roi = {
  name: 'Roi',
  lastName: 'Mirmelshtein',
  Age: 45,
  occupation: 'Serivce Program Manager',
  Education: 'B.A. graphic design & Electronics Parctical engineer',
  hobbies: 'Sports, Music & Programming',
}

const Omer = {
  name: 'Omer',
  lastName: 'Mirmelshtein',
  Age: 10.5,
  Education: '5th grade elementy school',
  hobbies: 'Football, Ninja & Playing video games',
}

const Yahli = {
  name: 'Yahli',
  lastName: 'Mirmelshtein',
  Age: 9,
  Education: '3rd grade elementy school',
  hobbies: 'Football, Computers & playing with friends',
}

const family = [Maya, Roi, Omer, Yahli];

for(var i = 0; i < family.length; i++) {
  console.log(family[i].name) }
