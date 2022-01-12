var friends = [{
        name: 'tamer',
        sayName: function () {
            return 'My friends name is:' + this.name;
        },
        age: 28,
        hobbie: ['fortnite', 'coocking', 'netflix']
    },
    {
        name: 'david',
        sayName: function () {
            return 'My friends name is:' + this.name;
        },
        age: 30, height: 180,
        hobbie: ['reading', 'cars', 'netflix']
    },
    {
        name: 'mira',
        sayName: function () {
            return 'My friends name is:' + this.name;
        },
        age: 26, height: 160,
        hobbie: ['fortnite', 'dancing', 'netflix']
    }];
//one by one print
console.log(friends[0].sayName() + " her age is " + friends[0].age + " and her hobbies are " + friends[0].hobbie[0] + ", " + friends[0].hobbie[1] + " and " + friends[0].hobbie[2] + ". ");
console.log(friends[1].sayName() + " his age is " + friends[1].age + " and his hobbies are " + friends[1].hobbie[0] + ", " + friends[1].hobbie[1] + " and " + friends[1].hobbie[2] + ". ");
console.log(friends[2].sayName() + " her age is " + friends[2].age + " and her hobbies are " + friends[2].hobbie[0] + ", " + friends[2].hobbie[1] + " and " + friends[2].hobbie[2] + ". ");
//for each one print
friends.forEach(function (myFriends) { return console.log("My friend is " + myFriends.name + ", he/she is " + myFriends.age + " years old and " +
    " her/his hobbies are " + myFriends.hobbie[0] + ", " + myFriends.hobbie[1] + " and " + myFriends.hobbie[2] + '.'); });
//document title
console.log(document.title);
