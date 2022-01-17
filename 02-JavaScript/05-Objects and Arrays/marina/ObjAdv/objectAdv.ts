
// 1. to express in 3 different ways (age 12)

const x: object = { age: 12 };
x.age = 12;
x['age'] = 12;
console.log(x);



const y: any = {};
const abc = 'age';
y.age = 20;
y['age'] = 20;
y[abc] = 20
console.log(y);



// 2. biuld am object from 2 arrays

interface Book {
    autor?: string;
    year?: number;
    pages?: number;
}

// option 1

const keys: any = [`autor`, `year`, `pages`];   
const values: any = ['Sheckly', 1976, 253];
const bookObj: Book = {};

keys.forEach((key, i) => bookObj[key] = values[i]);
console.log(bookObj);




// option 2

const book: any = [`name`, `autor`, `year`, `pages`];
const meanings: any = [`Monday start on Satoday`, 'Strugazkie', 1958, 312];
const bookOb: Book = {};

for (i = 0; i < book.length; i++) {
    bookOb[book[i]] = meanings[i]
}
console.log(bookOb);




// option 3

const story: any = [`name`, `autor`, `year`, `pages`];
const meaning: any = [`Animal Farm`, 'George Orwell', 1974, 214];
const storyObj: Book = {};

story.forEach((a,b) => {
    storyObj[a] = meaning[b]
});

console.log(storyObj);