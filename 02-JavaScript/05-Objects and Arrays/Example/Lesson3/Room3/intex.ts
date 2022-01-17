interface Movies{
    movies:Array<Movie>;
    increasePrices:any}
interface Movie{
    title:string;
    imgSrc:string;
    averageScore:number;
    price:number;
}

let cinemaCityClass: Movies = {
    movies:[
        {
            title:'Rambo1',
            imgSrc:"",
            averageScore:8.8,
            price:100
        },
        {
            title:'Rambo2',
            imgSrc:"",
            averageScore:8.8,
            price:200
        },
       {
            title:'Rambo3',
            imgSrc:"",
            averageScore:8.8,
            price:300
        },
        
    ],
    increasePrices(x){
        this.movies.forEach(function (item) {
                item.price = Math.round(item.price * ((x+100)/100));
            })

    }
    
}
cinemaCityClass.increasePrices(10);
console.log (cinemaCityClass);
//create an object with 3 movies
//create an internal function which increases price by X for all movies


// interface Class{
//     lessons:Array<{
//         title: string,
//         grades:Array<any>
//     }>
//         insertLesson(string, Array):void
//     }
//     const students:Array<string> = ['shir', 'moshe', 'miri', 'david', 'lea'];
    
//     let fullStackClass: Class = {
//         lessons:[
//             {
//                 title: 'object - advanced',
//                 grades:[]
//             }
//         ],
//          //create a function which genrate random grades between 40 and 100 for all students   
//         //An internal function to the object

//         insertLesson(lesson_name, students_arr) {
//              this.lessons.push({ title: lesson_name, grades: [] });
//              students_arr.forEach((item, i) => {
//                  this.lessons[this.lessons.length-1].grades[i] = { name: item, grade: randon_grade() }
//              });
//          }
//     }  
//     function randon_grade(){return Math.floor(Math.random() * 61)+40; }
//      function object_advance_grades(FS_class, students_arr){
//         students_arr.forEach((item, i) => {
//             FS_class.lessons[0].grades[i] = { name: item, grade: randon_grade()}
//          });
//         }
     
//      object_advance_grades(fullStackClass, students);
//      fullStackClass.insertLesson("algo",students);
//      fullStackClass.insertLesson("math",students);
//      fullStackClass.insertLesson("programming",students);
    
//     console.log(fullStackClass);
     
//     //=======================================================================================================
        
    
// function createCard(cardObject: any) {

//     const lessons:Array<String> = [`${cardObject.insertLesson}`];
//     const students:Array<string> = ['Moshe', 'Ahron', 'Simi', 'Obama', 'Chiwawa'];
//     let grades:Array<number> = [];
  
//     lessons.forEach(function(lesson) {
//         document.getElementById("wrapper").innerHTML += 
//         `<div id="lesson">Lesson name : ${lesson}</div>`;
          
//         for (let i in students) {
//             let randomNum = Math.floor(Math.random() * 61) + 40;
//             grades[students[i]] = randomNum;
//             document.getElementById("wrapper").innerHTML += 
//             `<div id="name"> Name: ${students[i]}</div>`;
//             document.getElementById("wrapper").innerHTML += 
//             `<div id="grade"> Grade : ${randomNum.valueOf()}</div>`;
//         }
//         console.log(lesson, grades);
//     })
// }


// function handleCard(e: any) {
//     e.preventDefault();
//     const object = {}
//     for (let field of e.target) {
//         if (field.type !== 'submit') {
//             if (field.type === 'number') {
//                 object[field.name] = field.valueAsNumber;
//             }
//             else {
//                 object[field.name] = field.value;
//             }
//         }
//     }
//     createCard(object);
// }

    

//        // var inputValue = document.getElementById("subject").value;
//       //  document.getElementById("demo").innerHTML = `${x}`;
