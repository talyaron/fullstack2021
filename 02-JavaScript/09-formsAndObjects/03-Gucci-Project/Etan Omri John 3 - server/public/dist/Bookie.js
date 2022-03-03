var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function getAllBooks() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get("/all-books")];
                case 1:
                    data = (_a.sent()).data;
                    renderItem(data, rootBooks);
                    return [2 /*return*/];
            }
        });
    });
}
function appInit() {
    getAllBooks();
    try {
        if (window.document.title === "Bookie") {
            window.addEventListener("scroll", function (e) {
                if (window.pageYOffset > 100) {
                    document.querySelector("header").classList.add("is-scrolling");
                }
                else {
                    document.querySelector("header").classList.remove("is-scrolling");
                }
            });
            var menu_btn_1 = document.querySelector(".navBar__row1__mobile__humburger");
            var mobile_menu_1 = document.querySelector(".mobileOptions");
            menu_btn_1.addEventListener("click", function () {
                menu_btn_1.classList.toggle("is-active");
                mobile_menu_1.classList.toggle("is-active");
            });
        }
        //showLocalToOwner(undefined);
    }
    catch (error) {
        console.error(error);
    }
}
var selectRoot = document.querySelector("[data-update-book-by-id]");
var addingForm = document.querySelector("[data-addingItemForm]");
var bookTitle = document.querySelector("[data-bookTitle]");
var imagePreview = document.querySelector("[data-bookImage-preview]");
var addToCart = document.querySelector("[data-add-to-cart]");
var cart = document.querySelector("[data-cart]");
var ownerTable = document.querySelector("[data-toggle-existing]");
var backToTop = document.querySelector("[data-back-to-top]");
var rootBooks = document.querySelector("[data-rootBooks]");
function renderItem(data, root) {
    if (window.document.title === "Bookie") {
        //bookie.books = JSON.parse(localStorage.getItem("Bookie shop")).books;
        var html_1 = "";
        data.books.forEach(function (item) {
            //domElement.innerHTML = "";
            html_1 += "\n          <div class=\"rootBooks__card\">\n              <button class=\"rootBooks__card__bag\" onclick='handleAddToCart(event)'><svg xmlns=\"http://www.w3.org/2000/svg\"\n                      viewBox=\"0 0 15 14\">\n                      <symbol viewBox=\"0 0 15 14\" id=\"svg-icon-shopping-bag\">\n                          <title>shopping-bag</title>\n                          <g fill=\"currentColor\">\n                              <path\n                                  d=\"M13,4.2h-2.4l0-2c0-1.1-1.3-2-3-2s-3,0.8-3,2l0,2H1.9c-1,0-1.6,0.5-1.6,1.2l0.5,7.8h13.4l0.6-7.7&#10;&#9;&#9;&#9;C14.8,4.7,14,4.2,13,4.2z M6.1,2.2c0.1-0.1,0.6-0.5,1.5-0.5c0.9,0,1.4,0.3,1.5,0.5l0,2h-3L6.1,2.2z M12.8,11.7H2.2L1.8,5.8&#10;&#9;&#9;&#9;c0,0,0.1,0,0.1,0H13c0.1,0,0.2,0,0.2,0L12.8,11.7z\" />\n                          </g>\n                      </symbol>\n                      <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#svg-icon-shopping-bag\" />\n                  </svg></button>\n              <button class=\"rootBooks__card__heart\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15 13.5\">\n                      <symbol viewBox=\"0 0 15 13.5\" id=\"svg-icon-saved-items\">\n                          <title>saved-items</title>\n                          <g fill=\"currentColor\">\n                              <path\n                                  d=\"M12.5,5.3l-5,5.2l-5-5.3c0,0-0.8-0.9-0.8-1.5c0-1,0.8-1.8,1.7-1.8c0.6,0,1.1,0.3,1.4,0.9l2.6,2.7l2.7-2.8l0,0&#10;&#9;&#9;&#9;c0.3-0.5,0.8-0.9,1.5-0.9c0.9,0,1.7,0.8,1.7,1.8C13.4,4.4,12.5,5.3,12.5,5.3 M11.5,0c-1.1,0-2.1,0.6-2.7,1.5L7.5,2.8L6.2,1.5&#10;&#9;&#9;&#9;C5.6,0.6,4.6,0,3.5,0C1.5,0,0,1.7,0,3.8c0,1.2,0.5,2.3,1.4,3l1.3,1.4l4.9,5.3l0,0l0,0l4.9-5.3l1.2-1.4C14.5,6.1,15,5,15,3.8&#10;&#9;&#9;&#9;C15,1.7,13.5,0,11.5,0\" />\n                          </g>\n                      </symbol>\n                      <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#svg-icon-saved-items\" />\n                  </svg></button>\n              <img src=\"./Images/" + item.img + "\" alt=\"\" class=\"rootBooks__card__img\">\n              <div class=\"rootBooks__card__title\">" + item.title + "</div>\n              <div class=\"rootBooks__card__price\">" + item.price + "$</div>\n          </div>";
        });
        root.innerHTML = html_1;
    }
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
function handleSort(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var sort;
        return __generator(this, function (_a) {
            ev.preventDefault();
            sort = ev.target.value;
            console.log(sort);
            try {
                // const {data} = await.axios.get("/")
                // if (ev.target.value === "sortAsc") {
                //   bookie.sortBooksAsc();
                //   bookie.tempBooks = bookie.books;
                //   bookie.renderTempItem(rootBooks);
                // } else if (ev.target.value === "sortDesc") {
                //   bookie.sortBooksDesc();
                //   bookie.tempBooks = bookie.books;
                //   bookie.renderTempItem(rootBooks);
                // }
            }
            catch (error) {
                console.error(error);
            }
            return [2 /*return*/];
        });
    });
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
