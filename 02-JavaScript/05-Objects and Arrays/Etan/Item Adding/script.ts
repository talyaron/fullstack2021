<<<<<<< HEAD
let container = document.querySelector("#container");
interface Book {
  name: string;
  author: string;
}
interface Clothing {
  type: string;
  company: string;
}
interface Movie {
  name: string;
  year: number;
}
interface Home {
  Books: Array<Book>;
  Clothes: Array<Clothing>;
  Movies: Array<Movie>;
  addBook(name: string, author: string);
  removeBook(name: string);
  addClothing(type: string, company: string);
  removeClothing(type?: string, company?: string);
  addMovie(name: string, year: number);
  removeMovie(name: string);
}

const myHome: Home = {
  Books: [
    { name: "atomic habbits", author: "James Clear" },
    { name: "john", author: "dough" },
  ],
  Clothes: [
    { type: "Jeans pants", company: `Levi's` },
    { type: "Jeans jacket", company: `Levi's` },
  ],
  Movies: [
    { name: `Harry potter 1`, year: 2001 },
    { name: `Harry potter 2`, year: 2002 },
  ],
  addBook: function (name: string, author: string) {
    this.Books.push({ name: name, author: author });
    let lastOfList = myHome.Books.at(-1);
    let lastBook = `<div id="book">
       <p class="text">Your newly added book is:</p>
       <p class="first">${lastOfList.name}</p>
       <p class="second">By: ${lastOfList.author}</p>
   </div>`;
    container.innerHTML += lastBook;
  },
  removeBook(name: string){
    this.Books.splice(name,1)
      },
  addClothing: function (type: string, company: string) {
   let upHome = this.Clothes.push({ type: type, company: company });
    let lastOfList = myHome.Clothes.at(-1);
    let lastClothing = `<div id="clothing">
       <p class="text">Your newly added clothing item is:</p>
       <p class="first">A ${lastOfList.type}</p>
       <p class="second">By: ${lastOfList.company}</p>
   </div>`;
    container.innerHTML += lastClothing;

  },
  removeClothing(type: string){
this.Clothes.splice(type, 1)
  },

  addMovie: function (name: string, year: number) {
    this.Movies.push({ name: name, year: year });
    let lastOfList = myHome.Movies.at(-1);
    let lastMovie = `<div id="movie">
       <p class="text">Your newly added movie is:</p>
       <p class="first">${lastOfList.name}</p>
       <p class="second">Published:${lastOfList.year}</p>
       </div>`;
    container.innerHTML += lastMovie;
  },
  removeMovie( name: string){
    let result = this.Movies.splice(name, 1)
    console.log(result);
    
      },
};
  myHome.addBook("JavaScript: The Good Parts", "Douglas Crockford");
myHome.addClothing("jacket", `Levi's`);
myHome.addMovie("Pirates of Silicon Valley", 1999);
myHome.removeBook("atomic habbits")
myHome.removeClothing("jacket","Levi's")
myHome.removeMovie("Harry potter 1")

console.log(myHome);
=======
let container = document.querySelector('#container')
interface Book {name:string, author:string}
interface Clothing {type:string, company:string}
interface Movie {name:string, year:number}
interface Home{
Books: Array<Book>;
Clothes: Array<Clothing>;
Movies: Array<Movie>;
addBook(name:string, author:string)
addClothing(type:string, company:string)
addMovie(name: string, year:number)
}

const myHome:Home = {
    Books: [
        {name: 'atomic habbits', author: 'James Clear'},
        {name: 'john', author: 'dough'}],
    Clothes: [
        {type: 'Jeans pants', company: `Levi's`},
        {type: 'Jeans jacket', company: `Levi's`}
    ],
    Movies: [
        {name: `Harry potter 1`, year: 2001},
        {name: `Harry potter 2`, year: 2002}
    ]
    ,
    addBook:function(name:string, author:string){
       let upHome =  this.Books.push({name:name,author:author})
       let lastOfList = myHome.Books.at(-1)
       let lastBook = `<div id="book">
       <p classß="text">Your newly added book is:</p>
       <p class="first">${lastOfList.name}</p>
       <p class="second">By: ${lastOfList.author}</p>
   </div>`
       container.innerHTML += lastBook
       return upHome
    },
    addClothing:function(type:string, company:string){
        let upHome =  this.Clothes.push({type:type,company:company})
        let lastOfList = myHome.Clothes.at(-1)
        let lastClothing = `<div id="clothing">
       <p classß="text">Your newly added clothing item is:</p>
       <p class="first">A ${lastOfList.type}</p>
       <p class="second">By: ${lastOfList.company}</p>
   </div>`
       container.innerHTML += lastClothing
        return upHome
    },
    addMovie:function(name:string, year:number){
       let upHome =  this.Movies.push({name:name,year:year})
       let lastOfList = myHome.Movies.at(-1)
       let lastMovie = `<div id="movie">
       <p classß="text">Your newly added movie is:</p>
       <p class="first">${lastOfList.name}</p>
       <p class="second">Published:${lastOfList.year}</p>
       </div>`
       container.innerHTML += lastMovie
       return upHome
    }
}
myHome.addBook('JavaScript: The Good Parts', 'Douglas Crockford')
myHome.addClothing('jacket', `Levi's`)
myHome.addMovie('Pirates of Silicon Valley', 1999)

console.log(myHome)

>>>>>>> main
