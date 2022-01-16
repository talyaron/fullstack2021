// const keys = ['author', 'year', 'pages', 'readers']
// const values = ['Rolings', 2001, 500, 20000]
// let books = {};
// // Option1+++
// for(let i in keys){
//     books[keys[i]] =values[i]; 
// }
// // Option2+++
// // for(let i=0; i<keys.length; i++){
// //     books[keys[i]] = values[i]
// // // console.log(`${keys[i]}, ${values[i]}`);
// // }
// // Option3+++
// // keys.forEach(pair);
// // function pair(item: any, index: any) {
// // books[keys[index]] =values[index];
// // }
// console.log(books);
var lessons = ['Coocking', 'Eating', 'Dancingg'];
var students = ['Moshe', 'Ahron', 'Simi', 'Obama', 'Chiwawa'];
var grades = [];
lessons.forEach(function (lesson) {
    document.getElementById("wrapper").innerHTML +=
        "<div id=\"lesson\">Lesson name : " + lesson + "</div>";
    for (var i in students) {
        var randomNum = Math.round(Math.random() * 60) + 40;
        grades[students[i]] = randomNum;
        document.getElementById("wrapper").innerHTML +=
            "<div id=\"name\"> Name: " + students[i] + "</div>";
        document.getElementById("wrapper").innerHTML +=
            "<div id=\"grade\"> Grade : " + randomNum.valueOf() + "</div>";
    }
});
