const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

interface Store {
  books: Array<Book>,
  storeData(),
  getData(),
  addBook(
    title: string,
    author: string,
    genre:
      | "science fiction"
      | "detective"
      | "prose"
      | "adventures"
      | "children",
    year: number,
    rank: number,
    price: number,
    img: any,
    annotation: string,
    id: string
  );
  deleteBook(title: string),
  updateBook(title: string, price: number, id: string),
  deleteByID(id: string),
  addToCard(book: Book),
  showAnnotation(annotation: string),
  sortAscenByAuthor(),
  sortDescenByAuthor(),
  sortAscenByRanking(),
  sortDescenByRanking(),
  filterByYear(year: number),
  filterByRank(rank: number),
  filterByGenre(genre: string),
  filterByAuthor(author: string),
  filterByTitle(title: string),
  // render(list: any,root),
  // renderERP(list: any, rootERP),
  // renderAllBooks(root, rootERP),
  renderAddToCard(list: any, domElement),
  render(list: any, domElement: any),
  renderERP(list: any, domElement: any),
  // renderAllBooks(domElement: any), 
  renderFilterByYear(filteredByYear: Array<Book>, domElement),
  renderFilterByRank(filteredByRank: Array<Book>, domElement),
  renderFilterByGenre(filteredByGenre: Array<Book>, domElement),
  renderFilterByAuthor(filteredByAuthor: Array<Book>, domElement),
  renderFilterByTitle(filteredByTitle: Array<Book>, domElement),
}

interface Book {
  title: string,
  author: string,
  genre: "science fiction" | "detective" | "prose" | "adventures" | "children",
  year: number,
  rank: number,
  price: number,
  img: any,
  annotation?: string,
  id?: string
}

const StandartEbooks:Store = {
  books: [
    {
      title: "Hemlock Veils",
      author: "Davenport Jennie",
      genre: "science fiction",
      year: 2014,
      rank: 3.62,
      price: 15,
      img: "https://litlife.club/data/Book/0/234000/234306/BC3_1422109172.jpg?w=600&h=600&q=90",
    },
    {
      title: "One by One",
      author: "Carter Chris",
      genre: "detective",
      year: 2013,
      rank: 9.83,
      price: 28,
      img: "https://litlife.club/data/Book/0/217000/217759/BC3_1410688094.jpg?w=600&h=600&q=90",
    },
    {
      title: "Fight Club",
      author: "Palahniuk Chuck",
      genre: "prose",
      year: 2009,
      rank: 9.63,
      price: 17,
      img: "https://litlife.club/data/Book/0/87000/87828/BC3_1474544490.jpg?w=600&h=600&q=90",
    },
    {
      title: "Ramage",
      author: "Pope Dudley",
      genre: "adventures",
      year: 2010,
      rank: 10.0,
      price: 34,
      img: "https://litlife.club/data/Book/0/119000/119128/BCS_1349028836.jpg?w=600&h=600&q=90",
    },
    {
      title: "Grimms` Fairy Tales",
      author: "Davenport Jennie",
      genre: "children",
      year: 1994,
      rank: 9.5,
      price: 32,
      img: "https://litlife.club/data/Book/0/0/707/BC3_1386593820.jpg?w=600&h=600&q=90",
    },
    {
      title: "The Caller",
      author: "Carter Chris",
      genre: "detective",
      year: 2017,
      rank: 9.59,
      price: 44,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg0qX-IoJ1JM2tnDq2uuAddWLNtVo5MSU72zXtTBJm8O9CET4_",
    },

    {
      title: "Revelation",
      author: "Karpyshyn Drew",
      genre: "science fiction",
      year: 2010,
      rank: 7.8,
      price: 21,
      img: "https://litlife.club/data/Book/0/91000/91909/BCS_1349020826.jpg?w=600&h=600&q=90",
    },
    {
      title: "Deception Point",
      author: "Brown Dan",
      genre: "detective",
      year: 2010,
      rank: 9.99,
      price: 39,
      img: "https://litlife.club/data/Book/0/125000/125823/BCS_1349021980.jpg?w=600&h=600&q=90",
    },
    {
      title: "The Secret History",
      author: "Tartt Donna",
      genre: "prose",
      year: 2011,
      rank: 9.89,
      price: 41,
      img: "https://litlife.club/data/Book/0/94000/94365/BC3_1474425076.jpg?w=600&h=600&q=90",
    },
    {
      title: "Hornblower and the Crisis",
      author: "Forester Cecil Scott",
      genre: "adventures",
      year: 1990,
      rank: 0.23,
      price: 10,
      img: "https://litlife.club/data/Book/0/126000/126284/BCS_1349022091.jpg?w=600&h=600&q=90",
    },
    {
      title: "The Adventures of Huckleberry Finn",
      author: "Twain Mark",
      genre: "children",
      year: 1981,
      rank: 10.0,
      price: 43,
      img: "https://litlife.club/data/Book/0/0/755/BC3_1386593870.jpg?w=600&h=600&q=90",
      annotation: "Book Description Hilariously picaresque, epic in scope, alive with the poetry and vigor of the American people, Mark Twain's story about a young boy and his journey down the Mississippi was the first great novel to speak in a truly American voice. Influencing subsequent generations of writers — from Sherwood Anderson to Twain's fellow Missourian, T.S. Eliot, from Ernest Hemingway and William Faulkner to J.D. Salinger — Huckleberry Finn, like the river which flows through its pages, is one of the great sources which nourished and still nourishes the literature of America."
    },
  ],

  storeData() {
    localStorage.setItem("storeData", JSON.stringify(this.books));
  },

  getData() {
    const booksStorage = JSON.parse(localStorage.getItem("storeData"));
    if (booksStorage) {
      this.books = booksStorage;
    }
  },

  addBook(title, author, genre, year, rank, price, img, annotation) {
    const id = uid();
    this.books.push({ title, author, genre, year, rank, price, img, annotation, id });
    this.storeData();
  },

  deleteBook(title) {
    const index = this.books.findIndex((book) => book.title === title);
    if (index >= 0) {
      this.books.splice(index, 1);
    }
    this.storeData();
  },

  deleteByID(id) {
    this.books = this.books.filter(book => book.id !== id);
    localStorage.setItem('storeData', JSON.stringify(this.books));
},

  updateBook(title, price, id) {
    const index = this.books.findIndex((book) => book.id === id);
    if (index >= 0) {
      this.books[index].title = title;
      this.books[index].price = price;
    }
    this.storeData();
  },

  addToCard(book: Book) {
    const index= this.books.findIndex((book)=> book.id === id);
    if (index >= 0) {
      this.books[index].id = id;
    }
    this.storeData();

   
  },

 
  sortAscenByAuthor() {
    this.books = this.books.sort((a, b) => {
      let authorA = a.author.toLowerCase(),
        authorB = b.author.toLowerCase();
      if (authorA < authorB)
        //sort string ascending
        return -1;
      if (authorA > authorB) return 1;
      return 0; //default return value (no sorting)
    });
    this.books.forEach(book=>{
      console.log(book.author)
    })
  },

  sortDescenByAuthor() {
    this.books = this.books.sort((a, b) => {
      let authorA = a.author.toLowerCase(),
        authorB = b.author.toLowerCase();
      if (authorA < authorB)
        //sort string ascending
        return 1;
      if (authorA > authorB) return -1;
      return 0; //default return value (no sorting)
    });
    console.log('------')
    this.books.forEach(book=>{
      console.log(book.author)
    })
  },

  sortAscenByYear() {
    this.books = this.books.sort((a, b) => {
      return a.year - b.year;
    });
  },

  sortDescenByYear() {
    this.books = this.books.sort((a, b) => {
      return b.year - a.year;
    });
  },

  sortAscenByRanking() {
    this.books = this.books.sort((a, b) => {
      return a.rank - b.rank;
    });
  },

  sortDescenByRanking() {
    this.books = this.books.sort((a, b) => {
      return b.rank - a.rank;
    });
  },

  filterByYear(year) {
    return this.books.filter((book) => book.year <= year);
  },

  filterByRank(rank) {
    return this.books.filter((book) => book.rank <= rank);
  },

  filterByGenre(genre) {
    return this.books.filter((book) => book.genre === genre);
  },

  filterByAuthor(author) {
    return this.books.filter((book) => book.author === author);
  },

  filterByTitle(title) {
    return this.books.filter((book) => book.title === title);
  },

  renderFilterByTitle(filteredByTitle, domElement) {
    this.render(filteredByTitle, domElement);
  },

  renderFilterByAuthor(filteredByAuthor, domElement) {
    this.render(filteredByAuthor, domElement);
  },

  renderFilterByGenre(filteredByGenre, domElement) {
    this.render(filteredByGenre, domElement);
  },

  renderFilterByRank(filteredByRank, domElement) {
    this.render(filteredByRank, domElement);
  },

  renderFilterByYear(filteredByYear, domElement) {
    this.render(filteredByYear, domElement);
  },

  render(list, domElement) {
    let htmlStore = '';
    list.forEach((book: any) => {
      htmlStore += 
             `<div class="container__card">
                  <h2>${book.title}</h2>
                  <h3>${book.author}</h3>      
                  <img class="img" src="${book.img}">
                  <p>${book.year} &nbsp &nbsp ${book.price}$</p>
                  <div class="rating">                 
                      <i class="far fa-star  " data-number="1" id="${book.title}" onclick = "handleStarClick(event)"></i>
                      <i class="far fa-star  " data-number="2" id="${book.title}" onclick = "handleStarClick(event)"></i>
                       <i class="far fa-star " data-number="3" id="${book.title}" onclick = "handleStarClick(event)"></i>
                       <i class="far fa-star " data-number="4" id="${book.title}" onclick = "handleStarClick(event)"></i>
                      <i class="far fa-star  " data-number="5" id="${book.title}" onclick = "handleStarClick(event)"></i>
                   </div>                   
                  <p> ${book.rank}</p>
                  <input  class = "container__card__addToCardBtn" onclick = "handleAddToCard(event)" id ="addToCard" type ="button" value = "Add to cart">
               </div>`  

    });  
   
    
    domElement.innerHTML = htmlStore;

  },


  renderERP(list, domElement) {
    let html = " ";
    list.forEach((book: any) => {
      html += 
             `<div class="containerERP">
             <div class='card'>
    
                  <div class="imgToEdit">
                    <div class="title">${book.title}</div>
                    <div class="img"><img src="${book.img}.jpg" alt=""></div>
                      <div class="rating">                 
                          <i class="far fa-star  " data-number="1" id="${book.title}" onclick = "handleStarClick(event)"></i>
                          <i class="far fa-star  " data-number="2" id="${book.title}" onclick = "handleStarClick(event)"></i>
                          <i class="far fa-star " data-number="3" id="${book.title}" onclick = "handleStarClick(event)"></i>
                          <i class="far fa-star " data-number="4" id="${book.title}" onclick = "handleStarClick(event)"></i>
                          <i class="far fa-star  " data-number="5" id="${book.title}" onclick = "handleStarClick(event)"></i>
                      </div>
                  </div>

                  <div class="author">${book.author}</div>
                  <div class="genre">${book.genre}</div>
                  <div class="year">${book.year}</div>
                  <div class="rank">${book.rank}</div>
                  <div class="rank">${book.rank}</div>
                   
                  
             </div>               
             <div class="delete">
                  <button onclick="handleDeleteByID('${book.id}')"><span style ="color: grey;">Delete book</span></button>
             </div>
             <div class="update">
                  <form id="formAdd" onsubmit="handleUpdateBook(event, '${book.id}')">
                       <input type="text" name="title" placeholder="Edit title" value="${book.title}">
                       <input type="number" name="price" placeholder="Edit price" value="${book.price}">
                       <input type="submit" id="update" value="Update book">
                  </form>
              </div>          
         </div>`
               

               
           
    });
   

    domElement.innerHTML = html;
  }

  // renderAddToCard(list, domElement) {
  //   let htmlCard = " ";
  //   list.forEach((book:any) => {
      
  //     htmlCard += `<div> </div>`
  //   });
  //   domElement.innerHTML = htmlCard;
  // },


  // renderAllBooks(domElement) {
  //   const list = this.books;
  //   this.render(list, domElement);
  //   this.renderERP(list, domElement);
  //   this.renderCard(list, domElement);
  // },

};

const allstars: any = document.querySelectorAll('.fa-star')
function handleStarClick(ev) {

  allstars.forEach(star => {

    if (ev.target.id == star.id && ev.target.dataset.number >= star.dataset.number) {

      console.log(star.dataset.number);
      star.classList.add('fas');

    } else if (ev.target.id == star.id && ev.target.dataset.number < star.dataset.number) {
      star.classList.remove('fas');
    } else {
      return 0;
    }
  });
}





function handleAddBook(e) {
  e.preventDefault();
  let id = uid();
  console.log(e.target);
  const title = e.target.title.value;
  const author = e.target.author.value;
  const genre = e.target.genre.value;
  const year = e.target.year.valueAsNumber;
  const rank = e.target.rank.valueAsNumber;
  const price = e.target.price.valueAsNumber;
  const img = e.target.img.value;
  const annotation = e.target.annotation.value;
  const root = document.querySelector("#root");
  const rootERP = document.querySelector("#rootERP");
  StandartEbooks.addBook(title, author, genre, year, rank, price, img, annotation);
  // StandartEbooks.renderAllBooks(rootERP);
  StandartEbooks.render(rootERP, root);
  StandartEbooks.storeData();
  e.target.reset();
}




function handleDeleteBook(e) {
  e.preventDefault()
  try{
    console.log(e);
    console.log(e.target.elements.delete.value)
    const title = e.target.elements.delete.value;
      // const root = document.querySelector("#root");
      const rootERP = document.querySelector("#rootERP");
  if(title){
    console.log(title);

    StandartEbooks.deleteBook(title);
    // StandartEbooks.renderAllBooks(root);
    // StandartEbooks.renderAllBooks(rootERP);
    StandartEbooks.renderERP(rootERP, StandartEbooks.books);
    StandartEbooks.storeData();
  } else {
    throw new Error('User didnt write a title')
  }
  } catch(err){
    console.error(err)
  }
}

function handleDeleteByID(id) {
  const rootERP = document.getElementById('rootERP');
  StandartEbooks.deleteByID(id)
  StandartEbooks.renderERP(StandartEbooks.books, rootERP)
}



function handleUpdateBook(e, id) {
  e.preventDefault();
  const title = e.target.elements.title.value;
  const price = e.target.elements.price.valueAsNumber;
  StandartEbooks.updateBook(title, price, id);
  const rootERP = document.querySelector("#rootERP");
  StandartEbooks.renderERP(StandartEbooks.books, rootERP);
  // StandartEbooks.renderAllBooks(rootERP)
  e.target.reset();
}

// function handleAddToCard(ev) {
//   StandartEbooks.addToCard();
//   const rootCard=document.getElementById('rootCard')
//   StandartEbooks

// }


function handleAuthorAscen() {
  try{
  StandartEbooks.sortAscenByAuthor();
  const root = document.querySelector("#root");
  // StandartEbooks.renderAllBooks(root);
  StandartEbooks.render(StandartEbooks.books, root);
  } catch(err){
    console.error(err)
  }
}


function handleAuthoreDescen() {
  try{
  StandartEbooks.sortDescenByAuthor();
  const root = document.querySelector("#root");
  // StandartEbooks.renderAllBooks(root);
  StandartEbooks.render(StandartEbooks.books, root);
} catch(err){
  console.error(err)
}
}

function handleYearAscen() {
  StandartEbooks.sortAscenByYear();
  const root = document.querySelector("#root");
  // StandartEbooks.renderAllBooks(root);
  StandartEbooks.render(StandartEbooks.books, root);
}

function handleYearDescen() {
  StandartEbooks.sortDescenByYear();
  const root = document.querySelector("#root");
  // StandartEbooks.renderAllBooks(root);
  StandartEbooks.render(StandartEbooks.books, root);
}

function handleRankingAscen() {
  StandartEbooks.sortAscenByRanking();
  const root = document.querySelector("#root");
  // StandartEbooks.renderAllBooks(root);
  StandartEbooks.render(StandartEbooks.books, root);
}

function handleRankingeDescen() {
  StandartEbooks.sortDescenByRanking();
  const root = document.querySelector("#root");
  // StandartEbooks.renderAllBooks(root);
  StandartEbooks.render(StandartEbooks.books, root);
}

function handleFilterByYear(e) {
  e.preventDefault();
  // console.log(e);
  const year = e.target.valueAsNumber;
  const root = document.querySelector("#root");
  if (year) {
    const filteredByYear = StandartEbooks.filterByYear(year);
    StandartEbooks.renderFilterByYear(filteredByYear, root);
  } else {
    // StandartEbooks.renderAllBooks(root);
    StandartEbooks.render(StandartEbooks.books, root);
  }
}

function handleFilterByRank(e) {
  e.preventDefault();
  const rank = e.target.valueAsNumber;
  const root = document.querySelector("#root");
  if (rank) {
    const filteredByRank = StandartEbooks.filterByRank(rank);
    StandartEbooks.renderFilterByRank(filteredByRank, root);
  } else {
    // StandartEbooks.renderAllBooks(root);
    StandartEbooks.render(StandartEbooks.books, root);
  }
}

function handleFilterByGenre(e) {
  e.preventDefault();
  const genre = e.target.value;
  const root = document.querySelector("#root");
  if (genre) {
    const filterByGenre = StandartEbooks.filterByGenre(genre);
    StandartEbooks.renderFilterByGenre(filterByGenre, root);
  } else {
    // StandartEbooks.renderAllBooks(root);
    StandartEbooks.render(StandartEbooks.books,root);
  }
}

function handleFilterByAuthor(e) {
  e.preventDefault();
  const author = e.target.value;
  const root = document.querySelector("#root");
  if (author) {
    const filterByAuthor = StandartEbooks.filterByAuthor(author);
    StandartEbooks.renderFilterByAuthor(filterByAuthor, root);
  } else {
    // StandartEbooks.renderAllBooks(root);
    StandartEbooks.render(StandartEbooks.books,root);
  }
}

function handleFilterByTitle(e) {
  e.preventDefault();
  const title = e.target.value;
  const root = document.querySelector("#root");
  if (title) {
    const filterByTitle = StandartEbooks.filterByTitle(title);
    StandartEbooks.renderFilterByTitle(filterByTitle, root);
  } else {
    // StandartEbooks.renderAllBooks(root);
    StandartEbooks.render(StandartEbooks.books,root);
  }
}


const root = document.querySelector("#root");
const rootERP = document.querySelector("#rootERP");
StandartEbooks.renderERP(root, rootERP);




StandartEbooks.getData();
StandartEbooks.storeData();





