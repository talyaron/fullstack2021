// let wordstring ='UcUNFYaHHJJJtGFFG';
// let zzz: any = '';
// for ( let char of wordstring){
//   if (char == char.toLowerCase()){
//       zzz = zzz + char;
//   }
// }
// console.log(zzz);
// tal video 1
// let friend: object;
// friend = {
//   name: 'tali',
//   age: 30,
//   eyeColor: 'brown',
//   heir: 'brown',
//   yearOfBirth: 1957,
//   sayName: function() {
//     console.log(`This is my name: `, friend['name']);
//   },
//   calcYearOfBirth: function (): number {
//     const currentYear = new Date().getFullYear();
//     return currentYear - friend.age;
//  }
// }
// friend.sayName();
// const yearOfBirth = friend.calcYearOfBirth();
// console.log(yearOfBirth);
// console.log(friend['name']);
// console.log(friend);
// tal video 2
// let tali = {
//   name: 'Tali',
//   age: 30,
//   height: 182,
//   eyeColor: 'brown',
//   hobbies: ['traveling', 'reading'],
//   about: function () {
//     console.log(`Here is`, tali.name, 'she`s', tali.age, `tall:`, tali.height, `Hers hobbies`, tali.hobbies[0], `and`, tali.hobbies[1]);
//   }
// }
// tali.aboutTali();
// console.log(tali.aboutTali());
// function friend (name: string, age: number, height: number, eyeColor: string, hobbies: string) {
//   this.name = name;
//   this.age = age;
//   this.height = height;
//   this.eyeColor = eyeColor;
//   this.hobbies = hobbies;
//   this.aboutFriends = function (): any {
//     return `Here is ` + this.name  + ' she`s ' + this.age  + ` tall: ` + this.height + ` Hers hobbies ` + this.hobbies[0] + ` and ` + this.hobbies[1]
//   }
//   console.log(this.aboutFriends());
// }
// let keren = new friend ('Keren', 35, 172, 'brown', ['design', 'card', 'drawing']);
// let dudu = new friend('Dudu', 42, 160, 'green', ['cars', 'traveling']);
// let myFriends = ['tali', 'keren', 'dudu'];
// console.log(myFriends[0], myFriends[1], myFriends[2]);
// console.dir(window.document.all[5].textContent);
//  tal video 3
var myFriends = [{
        name: 'Tali',
        age: 30,
        height: 182,
        eyeColor: 'brown',
        hobbies: ['traveling', 'reading'],
        about: function () {
            console.log("Here is", this.name, 'she`s', this.age, "tall:", this.height, "Hers hobbies", this.hobbies[0], "and", this.hobbies[1]);
        }
    }, {
        name: 'Dudu',
        age: 35,
        height: 178,
        eyeColor: 'brown',
        hobbies: ['cars', 'pubs']
    },
    {
        name: 'Keren',
        age: 44,
        height: 152,
        eyeColor: 'green',
        hobbies: ['dogs', 'tennis']
    }];
console.log(myFriends[0].about());
var aboutFriends = function () {
    console.log(myFriends[2]);
};
