
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




function createCard(cardObject: any) {

    const lessons:Array<String> = [`${cardObject.lessonInput}`];
    const students:Array<string> = ['Jesus', 'Muhamad', 'Sami', 'Obama', 'Chiwawa'];
    let grades:Array<number> = [];
  
    lessons.forEach(function(lesson) {
        document.getElementById("wrapper").innerHTML += 
        `<div id="lesson">Lesson name : ${lesson}</div>`;

        for (let i in students) {
            let randomNum = Math.floor(Math.random() * 61) + 40;
            grades[students[i]] = randomNum;
            document.getElementById("wrapper").innerHTML += 
            `<div id="name"> Name: ${students[i]}</div>`;
            document.getElementById("wrapper").innerHTML += 
            `<div id="grade"> Grade : ${randomNum.valueOf()}</div>`;
        }
        console.log(lesson, grades);
    })
}


function handleCard(e: any) {
    e.preventDefault();
    const object = {}
    for (let field of e.target) {
        if (field.type !== 'submit') {
            if (field.type === 'number') {
                object[field.name] = field.valueAsNumber;
            }
            else {
                object[field.name] = field.value;
            }
        }
    }
    createCard(object);
}








