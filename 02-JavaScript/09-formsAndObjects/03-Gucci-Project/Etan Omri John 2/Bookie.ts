const selectRoot = document.querySelector("[data-update-book-by-id]");
const addingForm = document.querySelector("[data-addingItemForm]");
const bookTitle = document.querySelector("[data-bookTitle]");
const imagePreview = document.querySelector("[data-bookImage-preview]");
const rootBooks = document.querySelector("[data-rootBooks]");
const backToTop = document.querySelector("[data-back-to-top]");
const ownerTable = document.querySelector("[data-toggle-existing]");

const ascPrice = (a, b) => {
  return a.price - b.price;
};
const descPrice = (a, b) => {
  return b.price - a.price;
};
const ascYear = (a, b) => {
  return a.year - b.year;
};
const descYear = (a, b) => {
  return b.year - a.year;
};

// make sure your function is called at the right page!!!
// if (window.document.title === 'Bookie')

function handleTop(ev) {
  ev.preventDefault();
  document.documentElement.scrollTop = 0;
}
function hideTopBtn() {
  if (window.document.title === "Bookie") {
    let rootElement = document.documentElement;
    let topTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / topTotal > 0.8) {
      backToTop.classList.remove("hidden");
    } else {
      backToTop.classList.add("hidden");
    }
  }
}
document.addEventListener("scroll", hideTopBtn);
interface BookShop {
  id: any;
  books: Array<book>;
  addItem(ev: any);
  // render(list: Array<book>, domElement);
  renderItem(domElement: any);
  //filterByCategory();
  //filterByPrice();
  updateBook(Id, priceChange);
  deleteBook(Id);
  //changeOrder()
  sortItemAsc();
  sortItemDesc();
}

interface book {
  id: any;
  category: "thriller" | "history" | "cooking" | "fantasy";
  title: string;
  price: number;
  img?: any;
  year?: number;
}

const bookie: BookShop = {
  id: 0,
  books: [
    {
      id: 1,
      category: "thriller",
      title: "bye",
      price: 3,
      img: "Bye.jpeg",
      year: 1998,
    },
    {
      id: 2,
      category: "thriller",
      title: "outsider",
      price: 154,
      img: "outsider.jpeg",
      year: 2000,
    },
    {
      id: 3,
      category: "thriller",
      title: "The Little Prince",
      price: 12,
      img: "the little prince.jpg",
      year: 1999,
    },
    {
      id: 4,
      category: "thriller",
      title: "Star wars",
      price: 18,
      img: "Star Wars.jpg",
      year: 2001,
    },
    {
      id: 5,
      category: "thriller",
      title: "Harry Potter",
      price: 35,
      img: "Harry Potter.jpg",
      year: 1995,
    },
  ],
  addItem(ev: any) {
    let id = +ev.target.elements.id.value || ev.target.elements.id.value;
    let category = ev.target.elements.category.value;
    let title = ev.target.elements.title.value;
    let price = +ev.target.elements.price.value;
    let img = ev.target.elements.image.files[0]?.name;
    let year = ev.target.elements.year.value;
    let book = { id, category, title, price, img, year };
    let newBook: book = book;
    makeId(newBook);
    this.books.push(newBook);
    showLocalToOwner(bookie, ascYear);
  },
  sortItemAsc() {
    this.items.sort((a, b) => {
      return a.price - b.price;
    });
  },

  sortItemDesc() {
    this.items.sort((a, b) => {
      return b.price - a.price;
    });
  },
  renderItem(domElement) {
    if (window.document.title === "Bookie") {
      let html = "";
      this.books.forEach((item) => {
        domElement.innerHTML = "";
        html += `
            <div class="rootBooks__card">
                <button class="rootBooks__card__bag" data-add-to-bag><svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 15 14">
                        <symbol viewBox="0 0 15 14" id="svg-icon-shopping-bag">
                            <title>shopping-bag</title>
                            <g fill="currentColor">
                                <path
                                    d="M13,4.2h-2.4l0-2c0-1.1-1.3-2-3-2s-3,0.8-3,2l0,2H1.9c-1,0-1.6,0.5-1.6,1.2l0.5,7.8h13.4l0.6-7.7&#10;&#9;&#9;&#9;C14.8,4.7,14,4.2,13,4.2z M6.1,2.2c0.1-0.1,0.6-0.5,1.5-0.5c0.9,0,1.4,0.3,1.5,0.5l0,2h-3L6.1,2.2z M12.8,11.7H2.2L1.8,5.8&#10;&#9;&#9;&#9;c0,0,0.1,0,0.1,0H13c0.1,0,0.2,0,0.2,0L12.8,11.7z" />
                            </g>
                        </symbol>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-icon-shopping-bag" />
                    </svg></button>
                <button class="rootBooks__card__heart"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 13.5">
                        <symbol viewBox="0 0 15 13.5" id="svg-icon-saved-items">
                            <title>saved-items</title>
                            <g fill="currentColor">
                                <path
                                    d="M12.5,5.3l-5,5.2l-5-5.3c0,0-0.8-0.9-0.8-1.5c0-1,0.8-1.8,1.7-1.8c0.6,0,1.1,0.3,1.4,0.9l2.6,2.7l2.7-2.8l0,0&#10;&#9;&#9;&#9;c0.3-0.5,0.8-0.9,1.5-0.9c0.9,0,1.7,0.8,1.7,1.8C13.4,4.4,12.5,5.3,12.5,5.3 M11.5,0c-1.1,0-2.1,0.6-2.7,1.5L7.5,2.8L6.2,1.5&#10;&#9;&#9;&#9;C5.6,0.6,4.6,0,3.5,0C1.5,0,0,1.7,0,3.8c0,1.2,0.5,2.3,1.4,3l1.3,1.4l4.9,5.3l0,0l0,0l4.9-5.3l1.2-1.4C14.5,6.1,15,5,15,3.8&#10;&#9;&#9;&#9;C15,1.7,13.5,0,11.5,0" />
                            </g>
                        </symbol>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-icon-saved-items" />
                    </svg></button>
                <img src="Images/${item.img}" alt="" class="rootBooks__card__img">
                <div class="rootBooks__card__title">${item.title}</div>
                <div class="rootBooks__card__price">${item.price}$</div>
            </div>`;
      });
      domElement.innerHTML = html;
    }
  },
  updateBook(id, priceChange) {
    let storage = this.books;
    storage.forEach((book) => {
      if (book.id === id || book.id === +id)
        console.log(book, "this is it"),
         book.price = +priceChange;
    });
    showLocalToOwner(bookie, ascPrice);
  },
  deleteBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
    let bookie = JSON.parse(localStorage.getItem("Bookie shop"));
    localStorage.setItem("Bookie shop", JSON.stringify(bookie));
    bookie.books = bookie.books.filter((book) => book.id !== id);
    bookie.books = bookie.books;
    localStorage.setItem("Bookie shop", JSON.stringify(bookie));
    showLocalToOwner(bookie, ascYear);
  },
};

// addingForm.onsubmit(function(e) {})

//function handleAddToCart()
//function handleOpenThis()
//function handleOpenMenu()
//function handleCloseMenu()
//function handleSortDesc()
//function handleSortAsc(ev)
function makeId(book: book) {
  let uid = Math.random().toString(36).slice(-8);
  if (book.id === "uid") {
    book.id = uid;
  } else {
    return;
  }
}
bookie.renderItem(rootBooks);

function handleAddItem(ev: any) {
  ev.preventDefault();
  bookie.addItem(ev);
  localStorage.setItem("Bookie shop", JSON.stringify(bookie));
  ev.target.reset();
}
function showPreviewImage(ev: any) {
  const imagePreview = document.querySelector("[data-bookImage-preview]");
  const imgLink = ev.target.files[0].name;
  const preview = `<img src="./Images/${imgLink}" alt="">`;
  imagePreview.innerHTML = preview;
}

function showLocalToOwner(shop: BookShop, sortFunc) {
  shop.books.sort(sortFunc);
  localStorage.setItem("Bookie shop", JSON.stringify(shop));
  let bookie = JSON.parse(localStorage.getItem("Bookie shop"));
  ownerTable.innerHTML = `<tr>
  <th>ID</th>
  <th>Category</th>
  <th>Title</th>
  <th>price</th>
  <th>Img</th>
  <th>Year</th>
</tr>`;
  for (let book in bookie.books) {
    ownerTable.innerHTML += `<tr>
  <td> ${bookie.books[book].id}  </td>
  <td> ${bookie.books[book].category}  </td>
  <td> ${bookie.books[book].title} </td>
  <td> ${bookie.books[book].price}</td>
  <td> <img src="./Images/${bookie.books[book].img}" alt=""></td>
  <td> ${bookie.books[book].year}</td>
  <td data-delete-update> 
  <a onclick="handleDelete(event)">Delete</a>
  <a onclick="handleEdit(event)">Change Price</a>
  <input data-priceChange type="number" name="priceChange" placeholder="${bookie.books[book].price}" value="${bookie.books[book].price}">
  </td>
  </tr>`;
  }
}

function handleEdit(ev) {
  let data = ev.target.parentElement.parentElement.cells;
  let id = data[0].textContent.replaceAll(/\s/g,'');
  let priceChange = data[6].children.priceChange.valueAsNumber;
  bookie.updateBook(id, priceChange);
}
function handleDelete(ev) {
  let data = ev.target.parentElement.parentElement.cells;
  let id = +data[0].textContent || data[0].textContent.replaceAll(/\s/g,'');
  bookie.deleteBook(id);
}

function handleOwnerSort(ev: any) {
  ev.preventDefault();
  const choice = ev.target.value;
  console.dir(choice);
  showLocalToOwner(bookie, choice);
}

window.onload = function () {
  if (window.document.title === "Bookie") {
    window.addEventListener("scroll", function (e) {
      if (window.pageYOffset > 100) {
        document.querySelector("header").classList.add("is-scrolling");
      } else {
        document.querySelector("header").classList.remove("is-scrolling");
      }
    });

    const menu_btn = document.querySelector(".navBar__row1__mobile__humburger");
    const mobile_menu = document.querySelector(".mobileOptions");

    menu_btn.addEventListener("click", function () {
      menu_btn.classList.toggle("is-active");
      mobile_menu.classList.toggle("is-active");
    });
  }
  showLocalToOwner(bookie, descYear);
};
