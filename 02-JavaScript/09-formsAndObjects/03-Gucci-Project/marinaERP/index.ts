const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

interface Store {
  Books: Array<Book>,
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
  updateBook(updateBook),
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
  render(list: any, domElement: any),
  renderAllBooks(domElement: any),
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

const StandartEbooks = {
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

  updateBook(updateBook) {
    const index = this.books.findIndex((book) => book.id === updateBook.id);
    if(index >= 0) {
      this.books[index].title = updateBook;
    }
    this.storeData();
  },

  showAnnotation(annotation) {
    // const id = uid();
    const index = this.books.findIndex((book) => book.img === annotation);
    if(index >= 0) {
      const annotation = this.querySelector('.annotation')
      annotation.style.visibility = 'visible';
    }

  },

  // sortAscenByAuthor() {
  //   this.books = this.books.sort((a, b) => {
  //     return a.author - b.author;
  //   });
  //   console.log(this.books);
  // },

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
  },

  sortDescenByAuthor() {
    this.books = this.books.sort((a, b) => {
      return b.author - a.author;
    });
    console.dir(this);
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
    let html = " ";
    list.forEach((book: any) => {
      html += `<div class="container__card" onmouseover = "handleShowAnnotation(event)" >
                  <h2>${book.title}</h2>
                  <h3> ${book.author}</h3>      
                  <img class="img" src="${book.img}">
                  <p>${book.year} &nbsp &nbsp ${book.price}$</p> 
                  
                  <div class="rating">                 
                      <i class="far fa-star" data-number="1"></i>
                      <i class="far fa-star" data-number="2"></i>
                       <i class="far fa-star" data-number="3"></i>
                       <i class="far fa-star" data-number="4"></i>
                      <i class="far fa-star" data-number="5"></i>
                   </div> 

                  <p> ${book.rank}</p>
                  <input  class = "container__card__addToCardBtn" onclick = "handleAddToCard()" id ="addToCard" type ="button" value = "Add to cart">              
               </div>`,
               `<div class="annotation">${book.annotation}</div>`
               //  <form class="inputs__form" onsubmit="handleUpdateBook(event, ${book.id})">
               //  <input class="container__inputs__form__one__inp" type="text" name="update" id="update"
               //      placeholder="Enter new title">
               //  <input class="container__inputs__form__one__inp" type="submit" id="updateBtn" value="update">
               // </form>`
    });
    domElement.innerHTML = html;
  },

  renderAllBooks(domElement) {
    const list = this.books;
    this.render(list, domElement);
  },
};


// doesnt work
// function handleShowAnnotation() {
//   const annotation: any = document.querySelector('.annotation');
//   StandartEbooks.showAnnotation(annotation);

// }



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
  const root = document.querySelector(".root");
  StandartEbooks.addBook(title, author, genre, year, rank, price, img, annotation);
  StandartEbooks.renderAllBooks(root);
  StandartEbooks.storeData();
}

// doesnt work
function handleDeleteBook(e) {
  e.preventDefault();
  console.log(e);
  const title = e.targer.elements.delete.value;
  const root = document.querySelector(".root");
  StandartEbooks.deleteBook(title);
  StandartEbooks.renderAllBooks(root);
  StandartEbooks.storeData();
}

// doesnt work
function handleUpdateBook(e) {
  e.preventDefault();
 
}

// doesnt work
function handleAuthorAscen() {
  StandartEbooks.sortAscenByAuthor();
  const root = document.querySelector(".root");
  StandartEbooks.renderAllBooks(root);
}

// doesnt work
function handleAuthoreDescen() {
  StandartEbooks.sortDescenByAuthor();
  const root = document.querySelector(".root");
  StandartEbooks.renderAllBooks(root);
}

function handleYearAscen() {
  StandartEbooks.sortAscenByYear();
  const root = document.querySelector(".root");
  StandartEbooks.renderAllBooks(root);
}

function handleYearDescen() {
  StandartEbooks.sortDescenByYear();
  const root = document.querySelector(".root");
  StandartEbooks.renderAllBooks(root);
}

function handleRankingAscen() {
  StandartEbooks.sortAscenByRanking();
  const root = document.querySelector(".root");
  StandartEbooks.renderAllBooks(root);
}

function handleRankingeDescen() {
  StandartEbooks.sortDescenByRanking();
  const root = document.querySelector(".root");
  StandartEbooks.renderAllBooks(root);
}

function handleFilterByYear(e) {
  e.preventDefault();
  // console.log(e);
  const year = e.target.valueAsNumber;
  const root = document.querySelector(".root");
  if (year) {
    const filteredByYear = StandartEbooks.filterByYear(year);
    StandartEbooks.renderFilterByYear(filteredByYear, root);
  } else {
    StandartEbooks.renderAllBooks(root);
  }
}

function handleFilterByRank(e) {
  e.preventDefault();
  const rank = e.target.valueAsNumber;
  const root = document.querySelector(".root");
  if (rank) {
    const filteredByRank = StandartEbooks.filterByRank(rank);
    StandartEbooks.renderFilterByRank(filteredByRank, root);
  } else {
    StandartEbooks.renderAllBooks(root);
  }
}

function handleFilterByGenre(e) {
  e.preventDefault();
  const genre = e.target.value;
  const root = document.querySelector(".root");
  if (genre) {
    const filterByGenre = StandartEbooks.filterByGenre(genre);
    StandartEbooks.renderFilterByGenre(filterByGenre, root);
  } else {
    StandartEbooks.renderAllBooks(root);
  }
}

function handleFilterByAuthor(e) {
  e.preventDefault();
  const author = e.target.value;
  const root = document.querySelector(".root");
  if (author) {
    const filterByAuthor = StandartEbooks.filterByAuthor(author);
    StandartEbooks.renderFilterByAuthor(filterByAuthor, root);
  } else {
    StandartEbooks.renderAllBooks(root);
  }
}

function handleFilterByTitle(e) {
  e.preventDefault();
  const title = e.target.value;
  const root = document.querySelector(".root");
  if (title) {
    const filterByTitle = StandartEbooks.filterByTitle(title);
    StandartEbooks.renderFilterByTitle(filterByTitle, root);
  } else {
    StandartEbooks.renderAllBooks(root);
  }
}

StandartEbooks.getData();
const root = document.querySelector(".root");
StandartEbooks.renderAllBooks(root);








const allstars = document.querySelectorAll('.fa-star')

allstars.forEach(star => {

  star.onclick = () => {

    let starlevel = star.getAttribute('data-number')

    allstars.forEach(element => { 
        
    if(starlevel < element.getAttribute('data-number')) {

        element.classList.remove('fas')
        element.classList.add('far')

      } else {
        element.classList.remove('far')
        element.classList.add('fas')
      }
         
    }
  }
})