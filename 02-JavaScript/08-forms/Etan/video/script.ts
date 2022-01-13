/* Part 1 */

const ofir = {
    name: 'Ofir',
    age: 23,
    height: 175,
    eyeColor: 'brown',
    hobbies: ['cars', 'weed'],
    interduce:function(){
        return 'My Friends name is '+ ofir.name +`, he's ${ofir.age} years old `+`and his hobbies are ${ofir.hobbies[0]} and ${ofir.hobbies[1]}`
    }
}
console.log(ofir.interduce())// before constructors

function Friend(name, age, height, eyeColor, hobbies){
    this.name = name;
    this.age = age;
    this.height = height;
    this.eyeColor = eyeColor;
    this.hobbies = hobbies;
    this.interduction = function(){
        return `my Friends name is `+ this.name + `, he's ` + this.age + ` years old and his hobbies are ${this.hobbies[0]}, ${this.hobbies[1]}`+ ' and ' + this.hobbies[2] 
    }
}


let chen = new Friend('Chen', 23, 185, 'brown', ['Video games', 'weed', 'tech']);
let avi = new Friend('Avi', 23, 187, 'one green, one brown and a dripping pupil', ['Working out', 'working', 'studying about work']);
let johni = new Friend('Johni', 23, 191, 'brown', ['Study', 'Run', 'Read']);
let citron = new Friend('Ofir', 23, 175, 'brown', ['cars', 'weed', 'tattoos']);

const myFriends = [ofir, chen, avi, johni, citron];
console.log(myFriends[1].interduction())
console.log(myFriends[2].interduction())
console.log(myFriends[3].interduction())
console.log(myFriends[4].interduction())
console.log(myFriends)


/* part 2 */
console.dir(window.document.all[6].textContent)
console.dir(window.document.all[6])
console.log(window.document.all[6].outerHTML)