const selectRoot = document.querySelector("[data-update-book-by-id]");
const addingForm = document.querySelector("[data-addingItemForm]");
const bookTitle = document.querySelector("[data-bookTitle]");
const imagePreview = document.querySelector("[data-bookImage-preview]");
let backToTop = document.querySelector("[data-back-to-top]");


function handleTop(ev) {
  ev.preventDefault();
  document.documentElement.scrollTop = 0;
}
function hideTopBtn(){
  let rootElement = document.documentElement;
  let topTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if ((rootElement.scrollTop / topTotal) > 0.80) {
    backToTop.classList.remove("hidden");
  } else {
    backToTop.classList.add("hidden");
  }
}
document.addEventListener("scroll", hideTopBtn)
interface BookShop {
  id: any;
  books: Array<book>;
  addItem(ev: any)
    //render(list: Array<book>, domElement);
    //renderItem(domElement: any);
    //filterByCategory();
    //filterByPrice();
    //updateBook();
    //deleteBook();
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
    books: [{id: 1, category: "thriller",title: 'okay',price: 19.99, year:1998}],
    addItem(ev:any) {
      let id = ev.target.elements.id.value;
  let category = ev.target.elements.category.value;
  let title = ev.target.elements.title.value;
  let price = ev.target.elements.price.value;
  let img = ev.target.elements.image.files[0]?.name;
  let year = ev.target.elements.year.value;
  let book = { id, category, title, price, img, year };
  let newBook: book = book;
  makeId(newBook);
  this.books.push(newBook);
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
  };
  let localBookie = bookie
  
  
  
  
  
  // addingForm.onsubmit(function(e) {})
  
  //function handleAddToCart()
  //function handleOpenThis()
  //function handleOpenMenu()
  //function handleCloseMenu()
  //function handleSortDesc()
  //function handleSortAsc(ev)
  function makeId(book: book) {
    if (book.id === "uid") {
      let uid = Math.random().toString(36).slice(-8);
      book.id = uid;
    } else {
      return;
    }
  }
  
  
  function handleAddItem(ev: any) {
    ev.preventDefault();
    console.dir(bookie);
    localBookie.addItem(ev)
    localStorage.setItem("Bookie shop", JSON.stringify(localBookie))
    ev.target.reset();
    console.log(localBookie);

    // localBookie.makeOptions(ev)
    // how to use localStorage:
    //   window.localStorage.setItem("Bookie shop", JSON.stringify(bookie));
    // let shopRetreval = localStorage.getItem("Bookie shop");
    // console.log("retrievedShop: ", JSON.parse(shopRetreval));
  }
  function showPreviewImage(ev: any) {
    const imagePreview = document.querySelector("[data-bookImage-preview]");
    const imgLink = ev.target.files[0].name;
    const preview = `<img src="./Images/${imgLink}" alt="">`;
    console.dir(imagePreview);
    console.dir(preview);
    console.dir(imgLink);
    imagePreview.innerHTML = preview;
  }
  
  function handleUpdate(ev: any) {
    ev.preventDefault();
    console.dir(ev.target);
  }
  
  
  
  
  localStorage.setItem("Bookie shop", JSON.stringify(localBookie))
  const stringBookie = localStorage.getItem("Bookie shop")
let parsedBookie = JSON.parse(stringBookie)

let ascPrice =(a:book,b:book)=>{
  return a.price - b.price
}
let descPrice = (a, b) => {
  return b.price - a.price;
}
let ascYear =(a:book,b:book)=>{
  return a.year - b.year
}
let descYear = (a, b) => {
  return b.price - a.price;
}
  // create an option to choose and update for each book
  function makeAnOption(shop: BookShop, root, sortFunc) {
    root.innerHTML = '';
    shop.books.sort(sortFunc);
  shop.books.forEach(
    (book) =>
      (root.innerHTML += `<option value="${book.id}">${book.title}(${book.year})</option>`)
  );
}
makeAnOption(localBookie, selectRoot, descPrice)
console.log(parsedBookie)
console.log(localBookie)