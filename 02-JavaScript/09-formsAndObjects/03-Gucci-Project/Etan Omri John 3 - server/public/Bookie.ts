
async function getAllBooks() {
  const {data} = await axios.get("/all-books");
  console.log(data);
}

// function handleTop(ev) {
//   ev.preventDefault();
//   document.documentElement.scrollTop = 0;
// }
// function hideTopBtn() {
//   if (window.document.title === "Bookie") {
//     let rootElement = document.documentElement;
//     let topTotal = rootElement.scrollHeight - rootElement.clientHeight;
//     if (rootElement.scrollTop / topTotal > 0.5) {
//       backToTop.classList.remove("hidden");
//     } else {
//       backToTop.classList.add("hidden");
//     }
//   }
// }
// document.addEventListener("scroll", hideTopBtn);




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

// function showLocalToOwner(sortFunc) {
//   if (window.document.title === "myBookie") {
//     bookie.books.sort(sortFunc);
//     localStorage.setItem("Bookie shop", JSON.stringify(bookie));
//     JSON.parse(localStorage.getItem("Bookie shop"));
//     ownerTable.innerHTML = `<tr>
//   <th>ID</th>
//   <th>Category</th>
//   <th>Title</th>
//   <th>price</th>
//   <th>Img</th>
//   <th>Year</th>
//   <th>Functions</th>
// </tr>`;
//     for (let book in bookie.books) {
//       ownerTable.innerHTML += `<tr>
//   <td> ${bookie.books[book].id}  </td>
//   <td> ${bookie.books[book].category}  </td>
//   <td> ${bookie.books[book].title} </td>
//   <td> ${bookie.books[book].price}</td>
//   <td> <img src="./Images/${bookie.books[book].img}" alt=""></td>
//   <td> ${bookie.books[book].year}</td>
//   <td data-delete-update> 
//   <a onclick="handleDelete(event)">Delete</a>
//   <a onclick="handleEdit(event)">Change Price</a>
//   <input data-priceChange type="number" name="priceChange" placeholder="${bookie.books[book].price}" value="${bookie.books[book].price}">
//   </td>
//   </tr>`;
//     }
//   }
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
// window.onload = function () {
//   try {

//     if (window.document.title === "Bookie") {
//       window.addEventListener("scroll", function (e) {
//         if (window.pageYOffset > 100) {
//           document.querySelector("header").classList.add("is-scrolling");
//         } else {
//           document.querySelector("header").classList.remove("is-scrolling");
//         }
//       });

//       const menu_btn = document.querySelector(".navBar__row1__mobile__humburger");
//       const mobile_menu = document.querySelector(".mobileOptions");

//       menu_btn.addEventListener("click", function () {
//         menu_btn.classList.toggle("is-active");
//         mobile_menu.classList.toggle("is-active");
//       });
//     }
//     showLocalToOwner(undefined);
//   }
//   catch (error) {
//     console.error(error);
//   }
// };

// function handleSelect(ev) {
//   ev.preventDefault();
//   try {

//     const category = ev.target.value;
//     if (category === "all") {
//       bookie.tempBooks = bookie.books;
//       bookie.renderTempItem(rootBooks);
//     } else if (category === "thriller") {
//       bookie.tempBooks = bookie.books.filter((book) => {
//         return book.category === category;
//       });
//     } else if (category === "history") {
//       bookie.tempBooks = bookie.books.filter((book) => {
//         return book.category === category;
//       });
//     } else if (category === "cooking") {
//       bookie.tempBooks = bookie.books.filter((book) => {
//         return book.category === category;
//       });
//     } else if (category === "fantasy") {
//       bookie.tempBooks = bookie.books.filter((book) => {
//         return book.category === category;
//       });
//     }
//     bookie.renderTempItem(rootBooks);
//   }
//   catch (error) {
//     console.error(error);
//   }
// }

// function handleSort(ev) {
//   ev.preventDefault();
//   try {

//     if (ev.target.value === "sortAsc") {
//       bookie.sortBooksAsc();
//       bookie.tempBooks = bookie.books;
//       bookie.renderTempItem(rootBooks);
//     } else if (ev.target.value === "sortDesc") {
//       bookie.sortBooksDesc();
//       bookie.tempBooks = bookie.books;
//       bookie.renderTempItem(rootBooks);
//     }
//   }
//   catch (error) {
//     console.error(error);
//   }
// }

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
