
async function getAllBooks() {
  const {data} = await axios.get("/all-books");
  renderItem(data,rootBooks)
}
function appInit() {
getAllBooks();

try {

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
  // showLocalToOwner(undefined, ownerTable);
}
catch (error) {
  console.error(error);
}
}

const selectRoot = document.querySelector("[data-update-book-by-id]");
const addingForm = document.querySelector("[data-addingItemForm]");
const bookTitle = document.querySelector("[data-bookTitle]");
const imagePreview = document.querySelector("[data-bookImage-preview]");
const addToCart = document.querySelector("[data-add-to-cart]");
const cart = document.querySelector("[data-cart]");
const ownerTable = document.querySelector("[data-toggle-existing]");
const backToTop = document.querySelector("[data-back-to-top]");
const rootBooks = document.querySelector("[data-rootBooks]");

function renderItem(data,root) {
  if (window.document.title === "Bookie") {
    //bookie.books = JSON.parse(localStorage.getItem("Bookie shop")).books;
    let html = "";
    data.books.forEach((item) => {
      //domElement.innerHTML = "";
      html += `
          <div class="rootBooks__card">
              <button class="rootBooks__card__bag" onclick='handleAddToCart(event)'><svg xmlns="http://www.w3.org/2000/svg"
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
              <img src="./Images/${item.img}" alt="" class="rootBooks__card__img">
              <div class="rootBooks__card__title">${item.title}</div>
              <div class="rootBooks__card__price">${item.price}$</div>
          </div>`;
    });
    
    root.innerHTML = html;
  }
}
// function showLocalToOwner(data, sortFunc) {
//   if (window.document.title === "myBookie") {
//     data.books.sort(sortFunc);
//     // localStorage.setItem("Bookie shop", JSON.stringify(bookie));
//     // JSON.parse(localStorage.getItem("Bookie shop"));
//     ownerTable.innerHTML = `<tr>
//   <th>ID</th>
//   <th>Category</th>
//   <th>Title</th>
//   <th>price</th>
//   <th>Img</th>
//   <th>Year</th>
//   <th>Functions</th>
// </tr>`;
//     for (let book in data.books) {
//       ownerTable.innerHTML += `<tr>
//   <td> ${data.books[book].id}  </td>
//   <td> ${data.books[book].category}  </td>
//   <td> ${data.books[book].title} </td>
//   <td> ${data.books[book].price}</td>
//   <td> <img src="./Images/${data.books[book].img}" alt=""></td>
//   <td> ${data.books[book].year}</td>
//   <td data-delete-update> 
//   <a onclick="handleDelete(event)">Delete</a>
//   <a onclick="handleEdit(event)">Change Price</a>
//   <input data-priceChange type="number" name="priceChange" placeholder="${data.books[book].price}" value="${data.books[book].price}">
//   </td>
//   </tr>`;
//     }
//   }
// }

function handleTop(ev) {
  ev.preventDefault();
  document.documentElement.scrollTop = 0;
}
function hideTopBtn() {
  if (window.document.title === "Bookie") {
    let rootElement = document.documentElement;
    let topTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / topTotal > 0.5) {
      backToTop.classList.remove("hidden");
    } else {
      backToTop.classList.add("hidden");
    }
  }
}
document.addEventListener("scroll", hideTopBtn);




// function handleAddItem(ev: any) {
//   ev.preventDefault();
//   bookie.addItem(ev);
//   localStorage.setItem("Bookie shop", JSON.stringify(bookie));
//   ev.target.reset();
// }
// function showPreviewImage(ev: any) {
//   const imagePreview = document.querySelector("[data-bookImage-preview]");
//   const imgLink = ev.target.files[0].name;
//   const preview = `<img src="./Images/${imgLink}" alt="">`;
//   imagePreview.innerHTML = preview;
// }



// function handleEdit(ev) {
//   let data = ev.target.parentElement.parentElement.cells;
//   let id = data[0].textContent.replaceAll(/\s/g, "");
//   let priceChange = data[6].children.priceChange.valueAsNumber;
//   bookie.updateBook(id, priceChange);
//   bookie.renderItem(rootBooks);
// }
// function handleDelete(ev) {
//   let data = ev.target.parentElement.parentElement.cells;
//   let id = +data[0].textContent || data[0].textContent.replaceAll(/\s/g, "");
//   bookie.deleteBook(id);
// }
// enum Sorts {
//   ascYear = "ascYear",
//   descYear = "descYear",
//   ascPrice = "ascPrice",
//   descPrice = "descPrice",
// }

// function handleOwnerSort(ev: any) {
//   let sortFunc = ev.target.value;
//   if (window.document.title !== "myBookie") throw new Error("not this page");
//   try {
//     switch (sortFunc) {
//       case (sortFunc = Sorts.ascYear):
//         return showLocalToOwner(ascYear);
//       case Sorts.descYear:
//         return showLocalToOwner(descYear);
//       case Sorts.ascPrice:
//         return showLocalToOwner(ascPrice);
//       case Sorts.descPrice:
//         return showLocalToOwner(descPrice);
//     }
//     showLocalToOwner(descYear);
//   } catch (error) {
//     console.error(error);
//     alert(error.message);
//   }
// }

// function handleCustomerSort(ev: any) {
//   if (window.document.title === "Bookie") ev.preventDefault();
//   let sortFunc = ev.target.value;

//   if (sortFunc === "ascYear") {
//     bookie.books.sort(ascYear);
//   }
//   if (sortFunc === "descYear") {
//     bookie.books.sort(descYear);
//   }
//   if (sortFunc === "ascPrice") {
//     bookie.books.sort(ascPrice);
//   }
//   if (sortFunc === "descPrice") {
//     bookie.books.sort(descPrice);
//   }
//   localStorage.setItem("Bookie shop", JSON.stringify(bookie));
//   bookie.renderItem(rootBooks);
// }

// let count = 0;
// function handleAddToCart(ev) {
//   ev.preventDefault();
//   count++;
//   cart.innerHTML = count.toString();
//   // console.log(ev.target.parentElement.parentElement)
// }
// // Omri & Etan ------------------------->
// function handleSearch(ev) {
//   ev.preventDefault();
//   const searchTerm = ev.target.value;
//   const regex = new RegExp(searchTerm, "i");
//   bookie.tempBooks = JSON.parse(localStorage.getItem("Bookie shop")).books;
//   try {
//     if (searchTerm.length > 0) {
//       bookie.tempBooks = bookie.tempBooks.filter((book) => {
//         if (regex.test(book.title)) return true;
//       });
//       localStorage.setItem("Bookie shop", JSON.stringify(bookie));
//       bookie.renderTempItem(rootBooks);
//       return;
//     }
//     bookie.renderItem(rootBooks);
//   } catch (error) {
//     console.error(error);
//   }
// }
// // Etan done ------------------------->
// // Omri ------------------------->


async function handleSelect(ev) {
  ev.preventDefault();
  const category = ev.target.value;
  console.log(category);
  
  try {
    const {data} = await axios.post("/books-by-category", {category})
    renderItem(data,rootBooks)
    // if (category === "all") {
    //   data.tempBooks = data.books;
    //   data.renderTempItem(rootBooks);
    // } else if (category === "thriller") {
    //   data.tempBooks = data.books.filter((book) => {
    //     return book.category === category;
    //   });
    // } else if (category === "history") {
    //   data.tempBooks = data.books.filter((book) => {
    //     return book.category === category;
    //   });
    // } else if (category === "cooking") {
    //   data.tempBooks = data.books.filter((book) => {
    //     return book.category === category;
    //   });
    // } else if (category === "fantasy") {
    //   data.tempBooks = data.books.filter((book) => {
    //     return book.category === category;
    //   });
    // }
    // data.renderTempItem(rootBooks);
  }
  catch (error) {
    console.error(error);
  }
}

async function handleSort(ev) {
  ev.preventDefault();
  const sort = ev.target.value;
  try {
    const {data} = await axios.post("/sort-books", {sort})
     renderItem(data,rootBooks)
  }
  catch (error) {
    console.error(error);
  }
}

// function handleAmount(ev) {
//   try {

//     const amount = ev.target.valueAsNumber;
//     bookie.sortBooksAsc()
//     const minPrice = bookie.books[0].price;
//     bookie.tempBooks = bookie.books.filter((book) => {
//       return book.price < amount;
//     });
//     if (amount < minPrice) {
//       rootBooks.innerHTML = 'No books found';
//     }
//     else if (bookie.tempBooks.length > 0) {
//       bookie.renderTempItem(rootBooks);
//     } else {
//       bookie.renderItem(rootBooks);
//     }
//   }
//   catch (error) {
//     console.error(error);
//   }
// }
// // Omri end ------------------------->
