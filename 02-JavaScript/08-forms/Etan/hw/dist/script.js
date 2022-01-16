var ofir = {
    name: "Ofir",
    age: 23,
    height: 175,
    eyeColor: "brown",
    hobbies: ["cars", "weed"],
    description: "jksdnjsnijlwenijenwjknewkj",
    interduce: function () {
        return ("My Friends name is " +
            ofir.name +
            (", he's " + ofir.age + " years old ") +
            ("and his hobbies are " + ofir.hobbies[0] + " and " + ofir.hobbies[1]));
    }
};
// console.log(ofir.interduce())// before constructors
// function Friend(name, age, height, eyeColor, hobbies){
//     this.name = name;
//     this.age = age;
//     this.height = height;
//     this.eyeColor = eyeColor;
//     this.hobbies = hobbies;
//     this.interduction = function(){
//         return `my Friends name is `+ this.name + `, he's ` + this.age + ` years old and his hobbies are ${this.hobbies[0]}, ${this.hobbies[1]}`+ ' and ' + this.hobbies[2]
//     }
// }
// let chen = new Friend('Chen', 23, 185, 'brown', ['Video games', 'weed', 'tech']);
// let avi = new Friend('Avi', 23, 187, 'one green, one brown and a dripping pupil', ['Working out', 'working', 'studying about work']);
// let johni = new Friend('Johni', 23, 191, 'brown', ['Study', 'Run', 'Read']);
// let citron = new Friend('Ofir', 23, 175, 'brown', ['cars', 'weed', 'tattoos']);
// const myFriends = [ofir, chen, avi, johni, citron];
// console.log(myFriends[1].interduction())
// console.log(myFriends[2].interduction())
// console.log(myFriends[3].interduction())
// console.log(myFriends[4].interduction())
// console.log(myFriends)
// trying to grab the placeholder than understood how to do it in css
// const userNameHolder = document.getElementById('userName');
// console.log(userNameHolder.attributes[1])
function worker(name, description) {
    this.name = name;
    this.description = description;
}
var avi = new worker("Avi Tourklutz", "Tallest");
var johni = new worker("Johni Dror", "wide hands");
var workers = [avi, johni];
function createCard(person) {
    var formObj = {};
    for (var _i = 0, person_1 = person; _i < person_1.length; _i++) {
        var inputField = person_1[_i];
        if (inputField.id !== "nameTag")
            formObj[inputField.name] = inputField.value;
    }
    return formObj;
}
var cardTable = {};
function printCard(obj) {
    var cardTable = "<div class=card>" +
        "<span id=logo></span>" +
        "<div class=photoWrapper>" +
        "<span id=background>+</span>" +
        "<div id=text\">" +
        ("<h2>" + obj.firstName + " " + obj.lastName + "</h2>") +
        ("<p>" + obj.gender + "</p>") +
        "</div>" +
        "</div>" +
        "</div>";
    document.getElementById("placeholder").innerHTML = cardTable;
    console.log(obj.firstName.value);
}
// document.getElementById('placeholder').outerText = createCard(workers[1].description);
function handleSubmit(event) {
    event.preventDefault();
    var form = event.target;
    var formObj = createCard(form);
    printCard(formObj);
}
var keys = ["author", "yearOfPublication", "pages"];
var values = ["J K Rolings", 2001, 500];
var bookObj = {};
for (var i = 0; i < keys.length; i++) {
    bookObj[keys[i]] = values[i];
}
// keys.forEach((key, i) => {
//     bookObj[key = values[i]]
// })
console.log(bookObj);
