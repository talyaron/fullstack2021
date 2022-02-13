const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

interface Store {
  books: Array<Book>;
  storeData();
  getData();
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
  deleteBook(title: string);
  // updateBook(img: any, title: string, price: number, id: string);
  updateBook(title: string, price: number, id: string);
  deleteByID(id: string);
  addToCard(book: any);
  // showAnnotation(annotation: string);
  sortAscenByAuthor();
  sortDescenByAuthor();
  sortAscenByRanking();
  sortDescenByRanking();
  sortAscenByYear();
  sortDescenByYear();
  filterByYear(year: number);
  filterByRank(rank: number);
  filterByGenre(genre: string);
  filterByAuthor(author: string);
  filterByTitle(title: string);
  // render(list: any,root),
  // renderERP(list: any, rootERP),
  // renderAllBooks(root, rootERP),
  renderAddToCard(list: any, domElement);
  render(list: any, domElement: any);
  renderERP(list: any, domElement: any);
  renderAllBooks(domElement: any);
  renderFilterByYear(filteredByYear: Array<Book>, domElement);
  renderFilterByRank(filteredByRank: Array<Book>, domElement);
  renderFilterByGenre(filteredByGenre: Array<Book>, domElement);
  renderFilterByAuthor(filteredByAuthor: Array<Book>, domElement);
  renderFilterByTitle(filteredByTitle: Array<Book>, domElement);
  
}

interface Book {
  title: string;
  author: string;
  genre: "science fiction" | "detective" | "prose" | "adventures" | "children";
  year: number;
  rank: number;
  price: number;
  img: any;
  annotation?: string;
  id?: string;
}

const StandartEbooks= {
  books: [
    {
      title: "The Three-Body Problem",
      author: "Liu Cixin",
      genre: "science fictionscience fiction",
      year: 2008,
      rank: 4.07,
      price: 15,
      img: "https://images-na.ssl-images-amazon.com/images/I/919XM42JQlL.jpg",
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
      img: "https://images-na.ssl-images-amazon.com/images/I/81-7W7KGYQL.jpg",
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
      annotation:
        "Book Description Hilariously picaresque, epic in scope, alive with the poetry and vigor of the American people, Mark Twain's story about a young boy and his journey down the Mississippi was the first great novel to speak in a truly American voice. Influencing subsequent generations of writers — from Sherwood Anderson to Twain's fellow Missourian, T.S. Eliot, from Ernest Hemingway and William Faulkner to J.D. Salinger — Huckleberry Finn, like the river which flows through its pages, is one of the great sources which nourished and still nourishes the literature of America.",
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
    this.books.push({
      title,
      author,
      genre,
      year,
      rank,
      price,
      img,
      annotation,
      id,
    });
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
    this.books = this.books.filter((book) => book.id !== id);
    localStorage.setItem("storeData", JSON.stringify(this.books));
  },

  updateBook(id, title, price) {
    const index = this.books.findIndex((book) => book.id === id);
    if (index >= 0) {
      // this.books[index].img = img;
      this.books[index].title = title;
      this.books[index].price = price;
    }
    this.storeData();
  },

  addToCard(book: Book, id) {
    const index = this.books.findIndex((book) => book.id === id);
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
    this.books.forEach((book) => {
      console.log(book.author);
    });
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
    console.log("------");
    this.books.forEach((book) => {
      console.log(book.author);
    });
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
    let htmlStore = "";
    list.forEach((book: any) => {
      htmlStore += `<div class="card">
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
                  <input  class = "card__addToCardBtn" onclick = "handleAddToCard(event)" id ="addToCard" type ="button" value = "Add to cart">
               </div>`;
    });

    domElement.innerHTML = htmlStore;
  },

  renderERP(list, domElement) {
    let html = " ";
    list.forEach((book: any) => {
      html += `<div class="containerERP__content">
      
                  <div class='containerERP__content__cardERP'> 

                      <div class='containerERP__content__cardERP__img'> 
                         <img src="${book.img}.jpg" alt="">  
                      </div> 
                      
                       <div class='containerERP__content__cardERP__info'>  
                             <strong class="tistrongtle">${book.title}</strong>                                
                             <strong class="author">${book.author}</strong>
                             <strong class="genre">${book.genre}</strong>
                             <strong class="year">${book.year}</strong>
                             <strong class="rank">${book.rank}</strong>             
                        </div> 
                  </div>
                   <div class="containerERP__content__erpBtn">      
                         <div class="content__erpBtn__delete" style= "margin-bottom: 1em;" >
                               <button class="containerERP__inputs__form__one__inp"  onclick="handleDeleteByID('${book.id}')"><span style ="color: grey;">Delete book</span></button>
                         </div> 
                         <input class="containerERP__inputs__form__one__inp"  type="file" id="file" name="file" accept="image/png, image/jpeg"  style= "margin-bottom: 1em;"  >
                         <div class="content__erpBtn__update">
                             <form id="formAdd" onsubmit="handleUpdateBook(event, '${book.id}')">
                                  <select class="containerERP__inputs__form__one__inp" name="genre" id="">
                                      <option value="genre" disabled selected>genre</option>
                                      <option value="science fiction">science fiction</option>
                                      <option value="detective">detective</option>
                                      <option value="prose">prose</option>
                                      <option value="adventures">adventures</option>
                                      <option value="children">children</option>
                                   </select>  
                                 <input class="containerERP__inputs__form__one__inp"  type="text" name="title" placeholder="Edit title" value="${book.title}">
                                 <input class="containerERP__inputs__form__one__inp"  type="number" name="price" placeholder="Edit price" value="${book.price}">
                                 <input class="containerERP__inputs__form__one__inp"  type="submit" id="update" value="Update book">
                             </form>
                         </div> 
                    </div>          
               </div>`;
    });

    domElement.innerHTML = html;
  },

  renderAddToCard(list, domElement) {
    let htmlCard = " ";
    list.forEach((book: any) => {
      htmlCard += `<div class="card">
                       <h2>${book.title}</h2>
                       <h3>${book.author}</h3>      
                        <img class="img" src="${book.img}">
                        <strong>${book.year} &nbsp &nbsp ${book.price}$</strong>
                             <div class="rating">                 
                                  <i class="far fa-star  " data-number="1" id="${book.title}" onclick = "handleStarClick(event)"></i>
                                  <i class="far fa-star  " data-number="2" id="${book.title}" onclick = "handleStarClick(event)"></i>
                                  <i class="far fa-star " data-number="3" id="${book.title}" onclick = "handleStarClick(event)"></i>
                                  <i class="far fa-star " data-number="4" id="${book.title}" onclick = "handleStarClick(event)"></i>
                                  <i class="far fa-star  " data-number="5" id="${book.title}" onclick = "handleStarClick(event)"></i>
                             </div>                   
                          <strong> ${book.rank}</strong>
                          <input  class = "container__card__addToCardBtn" onclick = "handleAddToCard(event)" id ="addToCard" type ="button" value = "Add to cart">
                   </div>`;
    });
    domElement.innerHTML = htmlCard;
  },

  renderAllBooks(domElement) {
    const list = this.books;
    this.render(list, domElement);
    this.renderERP(list, domElement);
    this.renderAddToCar(list, domElement);
  },
};

StandartEbooks.getData();
StandartEbooks.storeData();

const allstars: any = document.querySelectorAll(".fa-star");
const rating: any = document.querySelector('.rating')



function handleStarClick(e) {

  console.log(e.target);

  allstars.forEach((star) => {
    if (
      e.target.id == star.id &&
      e.target.dataset.number >= star.dataset.number
    ) {
      console.log(star.dataset.number);
      star.classList.add("fas");
    } else if (
      e.target.id == star.id &&
      e.target.dataset.number < star.dataset.number
    ) {
      star.classList.remove("fas");
    } else {
      return 0;
    }
    console.log(star);
    console.log(e.target);
  });

}

// const allstars = null;

// if (Array.isArray(allstars)) {
//   allstars.forEach(element => {
//     console.log(element);
//   });
// }

function renderOwener() {
  StandartEbooks.getData();
  const rootERP = document.getElementById("rootERP");
  StandartEbooks.renderERP(StandartEbooks.books, rootERP);
}

function renderCustomer() {
  StandartEbooks.getData();
  const root = document.querySelector("#root");
  StandartEbooks.render(StandartEbooks.books, root);
}

function renderAddToCard() {
  StandartEbooks.getData();
  const rootCard = document.querySelector(".rootCard");
  StandartEbooks.renderAddToCard(StandartEbooks.books, rootCard);
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
  // const root = document.querySelector("#root");
  const rootERP = document.querySelector("#rootERP");
  StandartEbooks.addBook(
    title,
    author,
    genre,
    year,
    rank,
    price,
    img,
    annotation,
  );
  // StandartEbooks.renderAllBooks(rootERP);
  StandartEbooks.render(rootERP, root);
  StandartEbooks.storeData();
  e.target.reset();
}

function handleDeleteBook(e) {
  e.preventDefault();
  try {
    console.log(e);
    console.log(e.target.elements.delete.value);
    const title = e.target.elements.delete.value;
    // const root = document.querySelector("#root");
    const rootERP = document.querySelector("#rootERP");
    if (title) {
      console.log(title);

      StandartEbooks.deleteBook(title);
      // StandartEbooks.renderAllBooks(root);
      // StandartEbooks.renderAllBooks(rootERP);
      StandartEbooks.renderERP(rootERP, StandartEbooks.books);
      StandartEbooks.storeData();
    } else {
      throw new Error("User didnt write a title");
    }
  } catch (err) {
    console.error(err);
  }
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function handleDeleteByID(id) {
  console.log(id);
 
  const rootERP = document.getElementById("rootERP");
  StandartEbooks.deleteByID(id);
  StandartEbooks.renderERP(StandartEbooks.books, rootERP);
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function handleUpdateBook(e, id) {
  e.preventDefault();
  console.log(id);
  // const img = e.target.elements.img.value;
  const title = e.target.elements.title.value;
  const price = e.target.elements.price.valueAsNumber;
  const rootERP = document.querySelector("#rootERP");
  StandartEbooks.updateBook(id, title, price);
  StandartEbooks.renderERP(StandartEbooks.books, rootERP);
  StandartEbooks.storeData();
  // StandartEbooks.renderAllBooks(rootERP)
  e.target.reset();
}

// function handleAddToCard(ev) {
//   StandartEbooks.addToCard();
//   const rootCard=document.getElementById('rootCard')
//   StandartEbooks

// }

function handleAuthorAscen() {
  try {
    StandartEbooks.sortAscenByAuthor();
    const root = document.querySelector("#root");
    StandartEbooks.render(StandartEbooks.books, root);
  } catch (err) {
    console.error(err);
  }
}

function handleAuthoreDescen() {
  try {
    StandartEbooks.sortDescenByAuthor();
    const root = document.querySelector("#root");
    StandartEbooks.render(StandartEbooks.books, root);
  } catch (err) {
    console.error(err);
  }
}

function handleYearAscen() {
  StandartEbooks.sortAscenByYear();
  const root = document.querySelector("#root");
  StandartEbooks.render(StandartEbooks.books, root);
}

function handleYearDescen() {
  StandartEbooks.sortDescenByYear();
  const root = document.querySelector("#root");
  StandartEbooks.render(StandartEbooks.books, root);
}

function handleRankingAscen() {
  StandartEbooks.sortAscenByRanking();
  const root = document.querySelector("#root");
  StandartEbooks.render(StandartEbooks.books, root);
}

function handleRankingeDescen() {
  StandartEbooks.sortDescenByRanking();
  const root = document.querySelector("#root");
  StandartEbooks.render(StandartEbooks.books, root);
}

function handleFilterByYear(e) {
  e.preventDefault();
  const year = e.target.valueAsNumber;
  const root = document.querySelector("#root");
  if (year) {
    const filteredByYear = StandartEbooks.filterByYear(year);
    StandartEbooks.renderFilterByYear(filteredByYear, root);
  } else {
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
    StandartEbooks.render(StandartEbooks.books, root);
  }
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function handleSelectByGenre(e) {
  e.preventDefault();
  console.log(e.target);
  console.log(e);
  
  const genre = e.target.value;
  const root = document.querySelector("#root");
  if (genre === "all") {
    StandartEbooks.render(StandartEbooks.books, root);
  } else {
    console.log(genre);
    const filterByGenre = StandartEbooks.filterByGenre(genre);
    StandartEbooks.renderFilterByGenre(filterByGenre, root);
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
    StandartEbooks.render(StandartEbooks.books, root);
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
    StandartEbooks.render(StandartEbooks.books, root);
  }
}

const root = document.querySelector("#root");
const rootERP = document.querySelector("#rootERP");
// StandartEbooks.renderERP(root, rootERP);

StandartEbooks.getData();
StandartEbooks.storeData();














const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
const rootElement = document.documentElement;

function handleScroll() {
  // Do something on scroll
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.8) {
    // Show button
    scrollToTopBtn.classList.add("showBtn");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn");
  }
  
  
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);





