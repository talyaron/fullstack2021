const x:any = {};
const abc = "age";

x.age = 12;
x['age'] = 12;

x[abc] = 12;
 


////
const keys = ["name", "author", "yearOfPublication","pages"];
const values = ["le petit prince","Antoine de Saint-Exupéry","1943","69",]
const bookObj = {};

// for (let i = 0; i < book.length; i++) {
//     bookObj[book[i]] = values[i]; 
// }

keys.forEach((key,i) => {
    bookObj[key] = values[i];
});
values.forEach((value,i) => {
    bookObj[keys[i]] = value;
});


console.log(bookObj);

