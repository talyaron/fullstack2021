var myFreinds = {
    frineds: [
        {
            name: 'Yossi',
            age: 40,
            height: 190,
            hobbies: ['Sky diving', 'Skiing'],
            showInfo: function () {
                console.log('My name is: ', myFreinds.frineds[0].name);
                console.log('my height is: ', myFreinds.frineds[0].height);
                console.log("my hobbies are:  " + myFreinds.frineds[0].hobbies);
            }
        },
        {
            name: 'Alex',
            age: 38,
            height: 192,
            hobbies: ['Welding', 'carpentry'],
            showInfo: function () {
                console.log('My name is: ', myFreinds.frineds[1].name);
                console.log('my height is: ', myFreinds.frineds[1].height);
                console.log("my hobbies are:  " + myFreinds.frineds[1].hobbies);
            }
        },
        {
            name: 'Pini',
            age: 30,
            height: 178,
            hobbies: ['motorcycle', 'swiming'],
            showInfo: function () {
                console.log('My name is: ', myFreinds.frineds[2].name);
                console.log('my height is: ', myFreinds.frineds[2].height);
                console.log("my hobbies are:  " + myFreinds.frineds[2].hobbies);
            }
        }
    ]
};
// myFreinds[0].showInfo
myFreinds.frineds[0].showInfo();
myFreinds.frineds[1].showInfo();
myFreinds.frineds[2].showInfo();
console.log(window.document.title);
